# 📚 Xinyuan Zhu 个人网站 - 完整指南

欢迎使用你的个人网站！这是一个现代化、响应式的个人作品集网站。

## 🎯 项目概览

这个项目包含了一个完整的个人网站框架，已经预填了你的简历内容（基于你提供的中英文简历）。

**网站展示内容：**
- ✨ 个人介绍与头像
- 🎓 教育背景（耶鲁大学、香港中文大学、慕尼黑工业大学）
- 💼 实习经历（博世、OPPO、中信证券、香港应用科技研究院）
- 🔬 科研经历（毕业设计、强化学习项目、帆船项目）
- 📄 论文发表
- 💻 专业技能
- 📞 联系方式

## 📁 完整文件结构

```
myweb/
├── 🌐 核心文件
│   └── index.html                  # 主网页 - 所有内容的源头
│
├── 🎨 样式和交互
│   └── assets/
│       ├── styles.css              # 样式（1000+ 行 CSS）
│       └── script.js               # 交互脚本（200+ 行 JS）
│
├── 🖼️  图片
│   └── images/
│       └── profile.jpg             # 你需要放你的头像这里
│
├── 📖 文档和指南
│   ├── QUICKSTART.md              # ⭐️ 新手必读的快速开始指南
│   ├── README.md                  # 完整功能和使用说明
│   ├── CONFIG.md                  # 详细的配置和定制指南
│   ├── IMAGES_GUIDE.md            # 图片添加详细教程
│   └── 本文件
│
├── 🚀 启动脚本
│   ├── run_server.sh              # Linux/Mac 用户用这个
│   ├── run_server.bat             # Windows 用户用这个
│   └── PROJECT_INFO.py            # 显示项目信息的 Python 脚本
│
└── 📊 文件统计
    • 总文件数：10 个
    • HTML：1 个
    • CSS：1 个（~700 行）
    • JavaScript：1 个（~200 行）
    • 文档：4 个
    • 脚本：3 个
```

## 🚀 立即开始（5 分钟）

### 方式 1：直接在浏览器中打开（最简单）

1. 找到 `index.html` 文件
2. 双击或右键 → 用浏览器打开
3. 网站就会在浏览器中显示

### 方式 2：使用本地服务器（推荐）

**macOS/Linux：**
```bash
cd /Users/zhuxinyuan/Desktop/test0/myweb
bash run_server.sh
# 然后打开浏览器访问 http://localhost:8000
```

**Windows：**
1. 进入 `myweb` 文件夹
2. 双击 `run_server.bat`
3. 在浏览器访问 `http://localhost:8000`

**手动启动：**
```bash
cd /Users/zhuxinyuan/Desktop/test0/myweb
python3 -m http.server 8000
# 然后打开 http://localhost:8000
```

## ✅ 必做的 3 件事

### 1️⃣ 添加你的头像

**步骤：**
1. 准备一张个人照片
   - 建议：正方形格式，500×500 像素
   - 格式：JPG 或 PNG
   - 大小：100-500 KB

2. 保存为 `profile.jpg`

3. 放在 `images/` 文件夹中

4. 刷新浏览器，头像就会显示！

### 2️⃣ 更新个人信息

在 `index.html` 中修改：

**最重要的部分：**
- 搜索 `Xinyuan Zhu` → 改成你的名字
- 搜索 `朱新源` → 改成你的中文名
- 搜索 `+86 18042788597` → 改成你的电话
- 搜索 `xinyuanzhu2024@163.com` → 改成你的邮箱

**推荐的部分：**
- 更新教育背景部分（你可以只保留自己的学校）
- 更新实习经历部分
- 更新科研经历部分
- 更新技能部分

**可选的部分：**
- 修改导航栏
- 修改按钮文本
- 添加新的部分

### 3️⃣ （可选）自定义颜色

打开 `assets/styles.css`，修改最上面的颜色变量：

```css
:root {
    --primary-color: #2563eb;      /* 主色 - 改成你喜欢的颜色 */
    --secondary-color: #1e40af;    /* 辅助色 */
    --accent-color: #f59e0b;       /* 强调色 */
}
```

更多颜色方案参考 [CONFIG.md](CONFIG.md) 中的"推荐的配色方案"部分。

## 📖 详细文档导航

| 文档 | 用途 | 何时阅读 |
|-----|------|--------|
| [QUICKSTART.md](QUICKSTART.md) | 5分钟快速入门 | 首先阅读 |
| [README.md](README.md) | 完整功能说明和部署指南 | 需要更多细节时 |
| [CONFIG.md](CONFIG.md) | 详细配置和定制指南 | 想要修改样式或配色时 |
| [IMAGES_GUIDE.md](IMAGES_GUIDE.md) | 图片添加和优化教程 | 添加头像或其他图片时 |

## 🎨 网站功能详解

### 导航栏
- 粘性导航（滚动时保持在顶部）
- 平滑滚动到各部分
- 响应式菜单（手机上显示汉堡菜单）

### Hero Section（英雄部分）
- 个人头像
- 名字和专业方向
- 两个行动按钮
- 漂亮的渐变背景

### 关于我
- 个人简介
- 联系方式速览

### 教育背景
- 网格布局的教育卡片
- 悬停时有动画效果
- 展示学位、成绩、荣誉

### 实习经历
- 时间线格式
- 按时间倒序排列
- 每个公司显示成就列表

### 科研经历
- 研究项目展示
- 项目成果总结

### 论文发表
- 论文编号和标题
- 作者和发表会议

### 技能部分
- 按类别分组（编程、框架等）
- 技能标签设计
- 悬停时有动画

### 联系方式
- 三种联系方式展示
- 接触表单
- 社交媒体链接

## 🔧 常见定制

### 修改网站标题

编辑 `index.html` 的 `<head>` 部分：

```html
<title>你的名字 - 个人网站</title>
```

### 修改导航链接

编辑 `<nav>` 部分的链接，或在导航中添加新链接：

```html
<ul class="nav-menu">
    <li><a href="#portfolio" class="nav-link">作品集</a></li>
</ul>
```

### 添加新的内容部分

1. 在 HTML 中添加新的 `<section>`
2. 给它一个唯一的 `id`（如 `id="portfolio"`）
3. 在导航中添加对应的链接
4. 在 CSS 中添加样式（复制现有部分的样式并修改）

### 修改字体

编辑 `assets/styles.css` 中的 `body` 规则：

```css
body {
    font-family: '你的字体', sans-serif;
}
```

推荐字体：`'Segoe UI'`, `'Helvetica Neue'`, `'Roboto'`

## 📱 响应式设计

网站已经针对所有屏幕大小进行了优化：

- **桌面** (≥1024px) - 完整的多列布局
- **平板** (768-1024px) - 优化的布局
- **手机** (≤768px) - 单列布局，易于阅读

**测试方法：**
1. 在浏览器中按 F12
2. 点击手机图标
3. 选择不同的设备尺寸

## 🌐 部署到网络

### 方案 1：GitHub Pages（推荐新手）

1. 创建 GitHub 账户（如果没有的话）
2. 创建新仓库：`yourusername.github.io`
3. 将本文件夹的所有文件上传到仓库
4. 访问 `https://yourusername.github.io`

详细步骤见 [README.md](README.md) 中的部署部分。

### 方案 2：Netlify（最快）

1. 访问 [netlify.com](https://netlify.com)
2. 选择"Deploy manually"
3. 拖拽 `myweb` 文件夹进去
4. 获得自动生成的 URL

### 方案 3：自己的服务器

需要 FTP/SSH 访问权限，上传文件后配置 Web 服务器。

## 🛠️ 推荐的编辑工具

### 代码编辑器

**VS Code**（最推荐）
- 免费、功能强大
- 安装插件：
  - Live Server - 实时预览
  - HTML Snippets - HTML 代码补全
  - CSS Peek - CSS 快速查看

**其他选择**
- Sublime Text
- Atom
- 在线编辑器：Replit、CodePen

### 快捷键

| 快捷键 | 功能 |
|--------|------|
| Ctrl+H (Cmd+H) | 查找替换 |
| Ctrl+F (Cmd+F) | 查找 |
| Ctrl+S (Cmd+S) | 保存 |
| Ctrl+/ (Cmd+/) | 注释 |
| Ctrl+Shift+L (Cmd+Shift+L) | 选择所有相同文本 |

## ⚠️ 常见问题解答

### Q：网站怎么在浏览器中打开？

A：方式有多种：
- 双击 `index.html`
- 右键 `index.html` → 用浏览器打开
- 使用 `python -m http.server 8000` 启动本地服务器

### Q：图片为什么不显示？

A：检查以下几点：
1. 文件是否在 `images/` 文件夹中
2. 文件名是否正确（应该是 `profile.jpg`）
3. 是否区分了大小写
4. 浏览器缓存 - 按 Ctrl+Shift+Delete 清除并重新刷新

### Q：怎样修改颜色？

A：编辑 `assets/styles.css` 最上面的 `:root` 部分的 CSS 变量。

### Q：可以添加新的部分吗？

A：可以，复制现有部分的 HTML，修改内容和 ID，然后添加对应的 CSS。

### Q：手机上显示不对怎么办？

A：这不太可能，因为网站已经进行了响应式设计。检查：
1. 浏览器是否最新版本
2. 清除浏览器缓存
3. 在不同浏览器中测试

### Q：怎样启用联系表单功能？

A：需要连接到后端服务：
- [Formspree](https://formspree.io/) - 最简单
- [EmailJS](https://www.emailjs.com/) - 无需后端
- 自己的 PHP/Node.js 后端

## 📊 项目统计

- **总代码行数**：约 1300 行
- **HTML**：~400 行
- **CSS**：~700 行
- **JavaScript**：~200 行
- **文档**：4 个详细指南
- **支持浏览器**：所有现代浏览器

## 🎓 学习资源

如果你想学习更多：

- [MDN Web Docs](https://developer.mozilla.org/) - 最好的 Web 开发资源
- [CSS-Tricks](https://css-tricks.com/) - CSS 技巧和教程
- [JavaScript.info](https://javascript.info/) - JavaScript 完整指南
- [Codecademy](https://codecademy.com/) - 交互式学习平台

## 💡 最佳实践

1. **定期更新** - 经历和成就发生变化时更新网站
2. **保持简洁** - 只展示最重要的信息
3. **高质量图片** - 使用清晰、专业的头像
4. **检查拼写** - 确保没有语法错误
5. **多浏览器测试** - 在不同浏览器和设备上测试
6. **备份** - 定期备份你的代码和内容

## 📞 获得帮助

如果遇到问题：

1. 查看相关的 Markdown 文档
2. 检查浏览器控制台错误（F12）
3. 尝试在 Google 上搜索错误信息
4. 在 Stack Overflow 上提问

## 🎉 总结

你现在拥有了一个：
- ✅ 现代化的个人网站
- ✅ 响应式设计
- ✅ 易于定制的代码
- ✅ 完整的文档
- ✅ 所有你的关键信息

**下一步：**
1. 添加头像
2. 根据需要修改内容
3. 自定义颜色（可选）
4. 部署到网络
5. 分享你的网站！

---

## 📝 版本信息

- **版本**：1.0
- **创建时间**：2025 年 6 月
- **最后更新**：2025 年 6 月
- **兼容性**：所有现代浏览器

---

祝你网站制作顺利！如有任何问题，请查阅相关文档。🚀

**开始吧！** 👉 [快速开始指南](QUICKSTART.md)
