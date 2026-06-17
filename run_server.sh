#!/bin/bash
# 启动本地网站服务器脚本

echo "🚀 启动 Xinyuan Zhu 个人网站本地服务器..."
echo ""
echo "📝 服务器信息："
echo "   • 地址: http://localhost:8000"
echo "   • 停止: 按 Ctrl+C"
echo ""
echo "💡 提示:"
echo "   • 在浏览器中打开 http://localhost:8000"
echo "   • 编辑文件后，刷新浏览器即可看到更改"
echo "   • 使用 VS Code 的 Live Server 扩展可以自动刷新"
echo ""

cd "$(dirname "$0")"
python3 -m http.server 8000
