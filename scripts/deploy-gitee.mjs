/**
 * Deploy to Gitee Pages
 * Usage: node scripts/deploy-gitee.mjs
 */
import { execSync } from 'child_process';
import { existsSync, rmSync } from 'fs';
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

// Remember current branch
const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { cwd: ROOT, encoding: 'utf-8' }).trim();
console.log(`  当前分支: ${currentBranch}`);

try {
  // Remove existing local gitee-pages if any
  try { run('git branch -D gitee-pages', { stdio: 'pipe' }); } catch {}

  // Create clean orphan branch
  run('git checkout --orphan gitee-pages');

  // Remove everything tracked
  try { run('git rm -rf --quiet .', { stdio: 'pipe' }); } catch {}

  // Clean untracked files (node_modules etc) — keep only .git
  run('git clean -fdx --quiet');

  // Copy dist contents to root
  run(`cp -r "${distDir}"/* .`);
  run('touch .nojekyll');

  // Stage and commit
  run('git add -A');
  run('git commit -m "Deploy to Gitee Pages"');
  run('git push -f gitee gitee-pages');

  console.log('\n✅ 部署完成！');
} catch (e) {
  console.error('\n❌ 部署失败:', e.message);
} finally {
  // Return to original branch
  console.log(`\n↩ 切换回 ${currentBranch}...`);
  try { run(`git checkout ${currentBranch}`, { stdio: 'pipe' }); } catch {}
  try { run('git branch -D gitee-pages', { stdio: 'pipe' }); } catch {}
}

console.log('   现在去 Gitee 开启 Pages:');
console.log('   https://gitee.com/kk784199880/playground-home/pages\n');
