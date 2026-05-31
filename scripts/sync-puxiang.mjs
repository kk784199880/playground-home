/**
 * Semi-automated sync script for Puxiang (普象) portfolio → works.ts
 *
 * Usage:
 *   node scripts/sync-puxiang.mjs
 *
 * What it does:
 *   1. Opens a Chromium browser to https://www.puxiang.com/wuxiaofan
 *   2. If a slider captcha appears, waits for you to solve it manually
 *   3. Scrapes all gallery links, visits each to extract work details
 *   4. Downloads cover images to public/assets/works/
 *   5. Generates and overwrites src/data/works.ts
 */

import { chromium } from 'playwright';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const PU_XIANG_PROFILE = 'https://www.puxiang.com/wuxiaofan';
const WORKS_DIR = path.join(ROOT, 'public', 'assets', 'works');
const OUTPUT_FILE = path.join(ROOT, 'src', 'data', 'works.ts');

// --------------- helpers ---------------

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function downloadImage(page, url, filepath) {
  try {
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    if (!response || !response.ok()) {
      console.warn(`  ⚠ Failed to download image: ${response?.status()}`);
      return false;
    }
    const buffer = await response.body();
    await fs.writeFile(filepath, buffer);
    return true;
  } catch (e) {
    console.warn(`  ⚠ Image download error: ${e.message}`);
    return false;
  }
}

// --------------- main ---------------

async function main() {
  console.log('🔧 Launching browser...');
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  // Step 1 — Open profile
  console.log(`🌐 Opening ${PU_XIANG_PROFILE}`);
  await page.goto(PU_XIANG_PROFILE, { waitUntil: 'domcontentloaded', timeout: 30000 });

  // Step 2 — Check for captcha
  const captchaDetected = await page.$('text=请完成滑动验证').catch(() => null);
  if (captchaDetected) {
    console.log('');
    console.log('⚠️  检测到滑动验证码！请在浏览器中手动完成滑动验证。');
    console.log('   完成后按 Enter 键继续...');
    console.log('');
    // Wait for user input in terminal
    await new Promise((resolve) => {
      process.stdin.once('data', resolve);
    });
    // Wait a moment for the page to load after captcha
    await sleep(2000);
  }

  // Step 3 — Scrape gallery links from profile page
  console.log('📋 Collecting gallery links...');
  await page.waitForTimeout(1000);

  const galleryLinks = await page.evaluate(() => {
    const links = new Set();
    // Puxiang profile galleries are usually in <a> tags with gallery URLs
    document.querySelectorAll('a[href*="/galleries/"]').forEach((a) => {
      const href = a.getAttribute('href');
      if (href && href.includes('/galleries/') && href.length > 50) {
        links.add(href.startsWith('http') ? href : `https://www.puxiang.com${href}`);
      }
    });
    return [...links];
  });

  if (galleryLinks.length === 0) {
    console.log('❌ No gallery links found. The page may not have loaded correctly.');
    console.log('   Make sure you solved the captcha and the profile page fully loaded.');
    await browser.close();
    process.exit(1);
  }

  console.log(`   Found ${galleryLinks.length} works.`);

  // Step 4 — Visit each gallery page and extract data
  const works = [];

  for (let i = 0; i < galleryLinks.length; i++) {
    const url = galleryLinks[i];
    console.log(`\n📄 [${i + 1}/${galleryLinks.length}] ${url.split('/').pop()}`);

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForTimeout(500);

      // Check for captcha again
      const hasRecaptcha = await page.$('text=请完成滑动验证').catch(() => null);
      if (hasRecaptcha) {
        console.log('   ⚠ Captcha appeared again. Please solve it and press Enter...');
        await new Promise((resolve) => process.stdin.once('data', resolve));
        await sleep(2000);
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
        await page.waitForTimeout(500);
      }

      const data = await page.evaluate(() => {
        const title = document.querySelector('h2')?.textContent?.trim() || '';
        const category =
          document.querySelector('a[href*="industry"]')?.textContent?.trim() || '';
        const tags = [
          ...new Set(
            Array.from(document.querySelectorAll('a[href*="tid="]')).map((a) =>
              a.textContent.trim()
            )
          ),
        ];

        // Find description — the main paragraph before images
        const mainArea = document.querySelector('.galleries-detail') || document;
        const paragraphs = mainArea.querySelectorAll('p');
        let description = '';
        for (const p of paragraphs) {
          const text = p.textContent.trim();
          if (
            text.length > 40 &&
            !text.includes('沪公网') &&
            !text.includes('版权归') &&
            !text.includes('转载')
          ) {
            description = text;
            break;
          }
        }

        // Find first large image
        const imgs = document.querySelectorAll('img[src*="photo/image"]');
        let coverUrl = '';
        for (const img of imgs) {
          if (img.naturalWidth > 400) {
            coverUrl = img.src || img.getAttribute('data-src') || '';
            break;
          }
        }

        // Get date
        const metaText = document.querySelector('.galleries-detail')?.textContent || '';
        const dateMatch = metaText.match(/(\d{4}-\d{2}-\d{2})/);
        const year = dateMatch ? dateMatch[1].slice(0, 4) : '';

        return { title, category, tags, description, coverUrl, year };
      });

      console.log(`   → ${data.title || '(no title)'}`);
      console.log(`   → Category: ${data.category}, Tags: ${data.tags.join(', ')}`);

      works.push({ ...data, url });
    } catch (e) {
      console.warn(`   ⚠ Error: ${e.message}`);
    }
  }

  // Step 5 — Download images
  console.log('\n🖼️  Downloading cover images...');
  await fs.mkdir(WORKS_DIR, { recursive: true });

  for (const work of works) {
    if (!work.coverUrl) {
      console.log(`   ⊘ ${work.title} — no image URL`);
      continue;
    }

    const slug = slugify(work.title.replace(/[^\x00-\x7F]/g, '').trim()) || slugify(work.url.split('/').pop());
    const ext = work.coverUrl.match(/\.(jpe?g|png)/i)?.[0] || '.jpg';
    const filename = `${slug}${ext}`;
    const filepath = path.join(WORKS_DIR, filename);

    console.log(`   ↓ ${filename}`);
    const ok = await downloadImage(page, work.coverUrl, filepath);
    if (ok) {
      work.imageFile = `/assets/works/${filename}`;
      console.log(`     OK (${(await fs.stat(filepath)).size} bytes)`);
    } else {
      work.imageFile = '';
    }
  }

  // Step 6 — Generate works.ts
  console.log('\n📝 Generating works.ts...');

  const ts = generateWorksTs(works);

  await fs.writeFile(OUTPUT_FILE, ts, 'utf-8');
  console.log(`   ✅ Written to ${OUTPUT_FILE}`);

  console.log(`\n🎉 Done! ${works.length} works synced.`);
  console.log('   Review src/data/works.ts, adjust awards/descriptions, then commit.\n');

  await browser.close();
}

function generateWorksTs(works) {
  const entries = works
    .map((w) => {
      const title = w.title || 'Untitled';
      const titleParts = title.split(/[-—–·|]\s*/);
      const enTitle = (titleParts[1] || titleParts[0] || '').trim();
      const zhTitle = titleParts.length > 1 ? titleParts[0].trim() : undefined;

      const id = slugify(enTitle.replace(/[^\x00-\x7F]/g, '').trim()) || slugify(w.url.split('/').pop());

      const desc = (w.description || '').replace(/\n/g, ' ').trim().slice(0, 300);

      const tags = (w.tags || []).map((t) => `'${t}'`).join(', ');

      const link = w.url || '';

      return `  {
    id: '${id}',
    title: '${enTitle.replace(/'/g, "\\'")}',
    titleZh: ${zhTitle ? `'${zhTitle.replace(/'/g, "\\'")}'` : 'undefined'},
    category: '${(w.category || 'Other').replace(/'/g, "\\'")}',
    year: '${w.year || ''}',
    award: undefined,
    description:
      '${desc.replace(/'/g, "\\'")}',
    tags: [${tags}],
    image: '${w.imageFile || ''}',
    link: '${link}',
  }`;
    })
    .join(',\n');

  return `export interface WorkItem {
  id: string;
  title: string;
  titleZh?: string;
  category: string;
  year?: string;
  award?: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

// Synced from Puxiang — https://www.puxiang.com/wuxiaofan
// Run: node scripts/sync-puxiang.mjs

const works: WorkItem[] = [
${entries},
];

export default works;
`;
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
