/**
 * Deploy to Gitee Pages
 * Usage: node scripts/deploy-gitee.mjs
 */
import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

function run(cmd, opts = {}) {
  console.log(`  > ${cmd}`);
  return execSync(cmd, { cwd: ROOT, stdio: 'inherit', ...opts });
}

console.log('\n🚀 部署到 Gitee Pages...\n');

// Step 1: Build
console.log('📦 构建项目...');
run('npx vite build', { env: { ...process.env, VITE_BASE: '/playground-home/' } });

// Step 2: Push dist to gitee-pages branch
console.log('\n📤 推送到 Gitee...');
const distDir = join(ROOT, 'dist');
if (!existsSync(distDir)) {
  console.error('❌ dist/ 目录不存在，构建失败');
  process.exit(1);
}

// Create a temp worktree for the gitee-pages branch
const tmpDir = join(ROOT, '.gitee-pages-tmp');

// Remove old tmp if exists
try { run(`rm -rf "${tmpDir}"`, { shell: true }); } catch {}

try {
  // Create gitee-pages as orphan branch
  try {
    run('git checkout --orphan gitee-pages');
    run('git rm -rf --quiet .', { shell: true });
    // Copy dist contents to root
    run(`cp -r "${distDir}"/* .`, { shell: true });
    run(`cp -r "${distDir}"/.nojekyll . 2>/dev/null || true`, { shell: true });
    // Create .nojekyll for GitHub Pages (harmless for Gitee)
    run('touch .nojekyll');
    run('git add -A');
    run('git commit -m "Deploy to Gitee Pages"');
    run('git push -f gitee gitee-pages');
  } catch (e) {
    // Branch might already exist, update it
    run('git checkout master');
    try { run('git branch -D gitee-pages'); } catch {}
    run('git checkout --orphan gitee-pages');
    run('git rm -rf --quiet .', { shell: true });
    run(`cp -r "${distDir}"/* .`, { shell: true });
    run('touch .nojekyll');
    run('git add -A');
    run('git commit -m "Deploy to Gitee Pages"');
    run('git push -f gitee gitee-pages');
  }
} finally {
  // Return to master
  run('git checkout master');
  try { run(`rm -rf "${tmpDir}"`, { shell: true }); } catch {}
  // Clean up local gitee-pages branch
  try { run('git branch -D gitee-pages'); } catch {}
}

console.log('\n✅ 部署完成！');
console.log('   现在去 Gitee 开启 Pages:');
console.log('   https://gitee.com/kk784199880/playground-home/pages\n');
