# Xinyuan Zhu 个人网站

一个现代化、响应式的个人作品集网站，展示教育背景、实习经历、科研成果和专业技能。

## 🎨 功能特性

- **响应式设计** - 完美适配桌面、平板和手机
- **现代化界面** - 使用渐变色、阴影和动画效果
- **平滑滚动** - 导航链接之间的平滑过渡
- **动画效果** - 元素进入视口时的渐变动画
- **易于定制** - 清晰的代码结构，方便修改内容和样式
- **SEO 友好** - 语义化 HTML 标记

## 📁 文件结构

```
myweb/
├── index.html           # 主 HTML 文件
├── images/              # 图片文件夹（存放头像等）
│   └── profile.jpg      # 个人头像（需要添加）
└── assets/
    ├── styles.css       # 样式文件
    └── script.js        # JavaScript 脚本
```

## 🚀 如何使用

### 1. 添加个人头像

将你的头像图片命名为 `profile.jpg`，放在 `images/` 文件夹中。

推荐：
- 文件格式：JPG、PNG 或 WebP
- 推荐尺寸：500x500 像素或更大
- 文件大小：小于 500KB

### 2. 本地预览

在浏览器中打开 `index.html` 文件，或使用本地服务器：

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js (http-server)
npx http-server

# 然后访问 http://localhost:8000
```

### 3. 定制内容

编辑 `index.html` 文件来修改内容：

- **导航栏**：编辑 `<nav>` 部分
- **个人介绍**：编辑 `<section id="hero">` 部分
- **教育背景**：编辑 `<section id="education">` 部分
- **实习经历**：编辑 `<section id="experience">` 部分
- **科研成果**：编辑 `<section id="research">` 部分
- **论文发表**：编辑 `<section id="papers">` 部分
- **技能**：编辑 `<section id="skills">` 部分
- **联系方式**：编辑 `<section id="contact">` 部分

### 4. 定制样式

编辑 `assets/styles.css` 文件来修改颜色和样式：

```css
:root {
    --primary-color: #2563eb;      /* 主色（蓝色） */
    --secondary-color: #1e40af;    /* 辅助色（深蓝） */
    --accent-color: #f59e0b;       /* 强调色（橙色） */
    /* ... 其他颜色 */
}
```

## 🎯 常见定制

### 修改颜色方案

在 `assets/styles.css` 的 `:root` 部分修改色变量：

```css
--primary-color: #9333ea;       /* 改为紫色 */
--secondary-color: #7e22ce;
--accent-color: #ec4899;        /* 改为粉红色 */
```

### 添加新的部分

1. 在 HTML 中添加新的 `<section>`
2. 在 CSS 中添加对应的样式类
3. 根据需要在 JavaScript 中添加交互

### 添加社交媒体链接

编辑联系部分的社交链接：

```html
<a href="https://linkedin.com/in/yourprofile" class="social-link">LinkedIn</a>
<a href="https://github.com/yourprofile" class="social-link">GitHub</a>
```

### 启用联系表单

替换 `assets/script.js` 中的表单提交处理，连接到你的邮件服务（如 EmailJS、Formspree）

## 🌐 部署

### 部署到 GitHub Pages

1. 创建一个名为 `yourusername.github.io` 的 GitHub 仓库
2. 将所有文件上传到该仓库
3. 访问 `https://yourusername.github.io`

### 部署到 Netlify

1. 连接你的 GitHub 仓库到 Netlify
2. 设置构建命令：留空
3. 设置发布目录：根目录（.）
4. 点击部署

### 部署到自己的服务器

1. 将文件上传到服务器
2. 配置 Web 服务器（如 Nginx、Apache）
3. 访问你的域名

## 📝 内容建议

### 个人介绍部分

- 简明扼要地介绍自己
- 突出你的主要成就
- 包含关键的联系方式

### 教育背景

- 学校名称、学位和专业
- 入学和毕业日期
- 重要成就或荣誉

### 实习经历

- 公司名称和职位
- 时间段
- 3-5 个主要工作成果或成就

### 技能部分

- 按类别组织技能
- 只列出你真正掌握的技能
- 考虑添加熟练程度指示器

## 🔧 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript (Vanilla)** - 交互和动画
- **Flexbox & Grid** - 响应式布局
- **CSS Animations** - 页面动画效果

## 💡 最佳实践

- 定期更新内容
- 保持信息真实准确
- 使用高质量的头像照片
- 确保所有链接正确
- 定期检查浏览器兼容性
- 使用 SEO 友好的描述

## 📱 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- 移动浏览器

## 🎓 进阶定制

### 添加暗黑模式

在 CSS 中添加：

```css
@media (prefers-color-scheme: dark) {
    :root {
        --text-dark: #f3f4f6;
        --bg-white: #1f2937;
        /* ... 其他颜色 */
    }
}
```

### 添加多语言支持

使用 JavaScript 库如 i18n 来实现多语言切换。

### 添加博客功能

可以添加静态博客生成器或连接到内容管理系统。

## 📧 联系与支持

- 邮箱：xinyuanzhu2024@163.com
- 电话：+86 18042788597

## 📄 许可证

此项目为个人作品集网站，自由使用。

---

**最后更新**: 2025年

祝你的个人网站受欢迎！ 🚀
