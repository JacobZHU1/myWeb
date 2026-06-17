# 🚀 快速开始指南

欢迎使用你的个人网站！按照以下步骤快速设置你的网站。

## ⚡ 5 分钟快速设置

### 步骤 1：添加头像（1 分钟）

1. 准备一张个人照片（正方形最佳，建议 500×500px）
2. 将其保存为 `profile.jpg`
3. 放在 `images/` 文件夹中

### 步骤 2：本地预览（1 分钟）

在浏览器中打开 `index.html` 文件，或者：

```bash
# 如果你有 Python
python -m http.server 8000

# 然后访问 http://localhost:8000
```

### 步骤 3：更新个人信息（2 分钟）

编辑 `index.html` 中的以下内容：

- **名字**：搜索 "Xinyuan Zhu" 并替换为你的名字
- **中文名**：搜索 "朱新源" 并替换
- **邮箱**：搜索 "xinyuanzhu2024@163.com" 并替换
- **电话**：搜索 "+86 18042788597" 并替换

### 步骤 4：修改色彩方案（1 分钟，可选）

编辑 `assets/styles.css` 中的颜色变量：

```css
:root {
    --primary-color: #2563eb;      /* 改成你喜欢的颜色 */
    --accent-color: #f59e0b;
}
```

## 📖 详细文档

- **[README.md](README.md)** - 完整功能说明
- **[CONFIG.md](CONFIG.md)** - 详细配置指南
- **[IMAGES_GUIDE.md](IMAGES_GUIDE.md)** - 图片添加教程

## 🎯 下一步任务

### 必做任务

- [ ] 添加个人头像到 `images/profile.jpg`
- [ ] 更新 HTML 中的个人信息
- [ ] 更新联系方式（邮箱、电话）
- [ ] 测试网站在浏览器中的显示

### 推荐任务

- [ ] 自定义配色方案
- [ ] 添加社交媒体链接
- [ ] 在手机上测试响应式效果
- [ ] 修改教育和经历部分的内容

### 高级任务

- [ ] 部署到 GitHub Pages
- [ ] 添加自定义域名
- [ ] 启用表单收集功能
- [ ] 添加博客或作品集部分

## 🔍 文件说明

```
myweb/
├── index.html              ← 主网页文件（编辑内容）
├── README.md              ← 完整说明文档
├── CONFIG.md              ← 配置指南
├── IMAGES_GUIDE.md        ← 图片添加教程
├── QUICKSTART.md          ← 本文件
├── images/                ← 图片文件夹
│   └── profile.jpg        ← 放你的头像这里
└── assets/
    ├── styles.css         ← 样式文件（修改颜色）
    └── script.js          ← 交互脚本
```

## 📝 编辑技巧

### 使用 VS Code 编辑

1. 用 VS Code 打开 `index.html`
2. 使用 Ctrl+H（或 Cmd+H）进行查找替换
3. 使用实时服务器插件实时预览

推荐插件：
- Live Server - 实时刷新预览
- HTML Snippets - HTML 代码补全
- CSS Peek - CSS 快速查看

### 快速找到要修改的部分

使用 Ctrl+F（Cmd+F）搜索以下关键词：

- `Xinyuan Zhu` - 找到名字
- `朱新源` - 找到中文名
- `xinyuanzhu2024@163.com` - 找到邮箱
- `+86 18042788597` - 找到电话
- `--primary-color` - 找到颜色设置

## 🌐 部署指南

### 部署到 GitHub Pages（推荐新手）

1. 在 GitHub 上创建新仓库：`yourusername.github.io`
2. 克隆到本地
3. 将所有文件复制到仓库
4. 提交并推送：
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
5. 访问 `https://yourusername.github.io`

### 部署到 Netlify（推荐简单快速）

1. 访问 [netlify.com](https://netlify.com)
2. 选择 "Add new site" > "Deploy manually"
3. 拖拽 `myweb` 文件夹进去
4. 完成！会自动生成访问链接

### 部署到自己的服务器

1. 使用 FTP 上传所有文件
2. 配置 Web 服务器指向根目录
3. 访问你的域名

## 💡 常见问题

**Q：如何修改导航菜单？**

A：编辑 `index.html` 中的 `<nav>` 部分：
```html
<ul class="nav-menu">
    <li><a href="#home" class="nav-link">首页</a></li>
    <!-- 修改这里 -->
</ul>
```

**Q：如何改变颜色？**

A：编辑 `assets/styles.css` 中的 `:root` 部分：
```css
--primary-color: #你的颜色;
```

**Q：图片不显示怎么办？**

A：检查以下几点：
1. 文件名是否为 `profile.jpg`（区分大小写）
2. 是否在 `images/` 文件夹中
3. 浏览器控制台是否有错误（F12）

**Q：如何测试响应式设计？**

A：在浏览器中按 F12，然后点击手机图标切换到移动设备视图。

**Q：可以添加博客吗？**

A：可以，但需要一些 HTML 和 CSS 知识。参考 [README.md](README.md) 中的高级定制部分。

## 🎨 配色灵感

### 专业蓝色（默认）
```css
--primary-color: #2563eb;
--secondary-color: #1e40af;
--accent-color: #f59e0b;
```

### 优雅紫色
```css
--primary-color: #9333ea;
--secondary-color: #7e22ce;
--accent-color: #ec4899;
```

### 清爽绿色
```css
--primary-color: #10b981;
--secondary-color: #059669;
--accent-color: #06b6d4;
```

### 现代深色
```css
--primary-color: #3b82f6;
--secondary-color: #1e40af;
--accent-color: #8b5cf6;
```

## ✨ 进阶技巧

### 1. 添加 Google Analytics

在 `</head>` 之前添加：
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

### 2. 添加联系表单

使用 [Formspree](https://formspree.io/) 或 [EmailJS](https://www.emailjs.com/)

### 3. 自定义域名

在 Netlify 或 GitHub Pages 中设置自定义域名

## 📞 获取帮助

遇到问题？试试：

1. 查阅 [README.md](README.md) 获取完整文档
2. 查看浏览器控制台错误（F12）
3. 查找关键词在 HTML/CSS 中是否有拼写错误
4. 尝试在不同浏览器中打开

## 🎓 学习资源

- [HTML 教程](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS 教程](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript 基础](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Web 开发最佳实践](https://web.dev/)

## ✅ 准备完成清单

在将网站公开发布前，检查以下内容：

- [ ] 头像已添加
- [ ] 所有个人信息已更新
- [ ] 联系方式正确
- [ ] 所有链接都能工作
- [ ] 在桌面浏览器上测试过
- [ ] 在手机浏览器上测试过
- [ ] 拼写和语法检查无误
- [ ] 考虑过搜索引擎优化 (SEO)

## 🚀 下一步

1. ✅ 完成快速设置
2. 📖 阅读详细文档（README.md）
3. 🎨 自定义设计（CONFIG.md）
4. 🖼️ 添加更多图片和内容
5. 🌐 部署到网络

---

**祝你的网站制作顺利！** 🎉

如有任何问题，请参考详细文档或联系支持。
