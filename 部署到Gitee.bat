@echo off
chcp 65001 >nul
title 部署到 Gitee Pages
echo.
echo   🚀 部署到 Gitee Pages
echo   ────────────────────
echo.
cd /d "%~dp0"
call node scripts/deploy-gitee.mjs
pause
