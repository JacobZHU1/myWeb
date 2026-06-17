@echo off
REM Windows 启动本地网站服务器脚本

echo.
echo ========================================
echo  ^| 🚀 启动个人网站本地服务器
echo ========================================
echo.
echo 📝 服务器信息：
echo    • 地址：http://localhost:8000
echo    • 停止：按 Ctrl+C
echo.
echo 💡 提示：
echo    • 在浏览器中打开 http://localhost:8000
echo    • 编辑文件后，刷新浏览器即可看到更改
echo.

cd /d "%~dp0"
python -m http.server 8000

pause
