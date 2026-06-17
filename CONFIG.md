# 网站配置指南

## 🎨 颜色配置

编辑 `assets/styles.css` 中的 CSS 变量来改变网站的配色方案：

```css
:root {
    --primary-color: #2563eb;      /* 主色 - 蓝色 */
    --secondary-color: #1e40af;    /* 辅助色 - 深蓝 */
    --accent-color: #f59e0b;       /* 强调色 - 橙色 */
    --text-dark: #1f2937;          /* 深色文字 */
    --text-light: #6b7280;         /* 浅色文字 */
    --bg-light: #f9fafb;           /* 浅色背景 */
    --bg-white: #ffffff;           /* 白色背景 */
}
```

### 推荐的配色方案

#### 蓝色系（默认）
```css
--primary-color: #2563eb;
--secondary-color: #1e40af;
--accent-color: #f59e0b;
```

#### 紫色系
```css
--primary-color: #9333ea;
--secondary-color: #7e22ce;
--accent-color: #ec4899;
```

#### 绿色系
```css
--primary-color: #10b981;
--secondary-color: #059669;
--accent-color: #f59e0b;
```

#### 深色系
```css
--primary-color: #1e293b;
--secondary-color: #0f172a;
--accent-color: #06b6d4;
```

## 📝 内容修改指南

### 修改导航栏

编辑 `index.html` 中的以下部分：

```html
<div class="nav-brand">Xinyuan Zhu</div>  <!-- 修改网站名称 -->
<ul class="nav-menu">
    <li><a href="#home" class="nav-link">首页</a></li>
    <!-- 添加或修改导航项目 -->
</ul>
```

### 修改个人介绍

编辑 `#hero` 部分：

```html
<h1 class="hero-title">Xinyuan Zhu
    <span class="chinese-name">朱新源</span>
</h1>
<p class="hero-subtitle">计算机科学 | 机器学习 | 软件开发</p>
<p class="hero-description">
    <!-- 修改个人介绍文本 -->
</p>
```

### 修改联系方式

编辑以下信息：

```html
<p><strong>电话：</strong> +86 18042788597</p>
<p><strong>邮箱：</strong> xinyuanzhu2024@163.com</p>
```

### 修改社交链接

编辑联系部分的社交媒体链接：

```html
<a href="https://www.linkedin.com/in/xinyuan-jacob-zhu-3a6934273/" class="social-link">LinkedIn</a>
<a href="https://github.com/yourprofile" class="social-link">GitHub</a>
<a href="https://www.xiaohongshu.com/user/profile/60c16b480000000001000267?xsec_token=ABTmZ0Op8PPglmPBaZB1a74RVVqLVq_K4Z7UMDhUHX3w0%3D&xsec_source=pc_search" class="social-link">RedNote</a>
```

## 🖼️ 添加图片

### 个人头像

1. 准备一张正方形的个人照片（建议 500x500px）
2. 保存为 JPG 或 PNG 格式
3. 放在 `images/` 文件夹中，命名为 `profile.jpg`
4. HTML 中已自动引用

### 添加其他图片

在各个部分中添加图片：

```html
<img src="images/project1.jpg" alt="项目1描述">
<img src="images/achievement.jpg" alt="成就图片">
```

## 🔧 常见修改

### 修改页面标题

在 `<head>` 中修改：

```html
<title>Xinyuan Zhu - 个人网站</title>
```

### 修改导航链接

在导航菜单中添加或移除链接：

```html
<li><a href="#new-section" class="nav-link">新页面</a></li>
```

### 修改按钮文本

```html
<a href="#contact" class="btn btn-primary">联系我</a>
<a href="#experience" class="btn btn-secondary">了解更多</a>
```

### 修改段落文本

直接编辑 HTML 中的文本内容：

```html
<p class="about-content">
    我是一名充满热情的计算机科学专业人士...
</p>
```

## 💻 高级定制

### 修改字体

在 CSS 中修改 `font-family`：

```css
body {
    font-family: 'Segoe UI', 'Roboto', 'Ubuntu', sans-serif;
}
```

### 修改动画速度

编辑 CSS 中的 `transition` 属性：

```css
:root {
    --transition: all 0.5s ease;  /* 改为 0.5s 使动画更慢 */
}
```

### 修改阴影效果

编辑 CSS 中的 `box-shadow`：

```css
:root {
    --shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    --shadow-lg: 0 25px 60px rgba(0, 0, 0, 0.2);
}
```

### 修改圆角

编辑 CSS 中的 `border-radius`：

```css
.education-card {
    border-radius: 15px;  /* 修改圆角大小 */
}
```

## 📊 添加新的部分

### 步骤 1：添加 HTML

在 `index.html` 中添加新的 section：

```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">新部分标题</h2>
        <!-- 内容 -->
    </div>
</section>
```

### 步骤 2：更新导航

在导航菜单中添加链接：

```html
<li><a href="#new-section" class="nav-link">新部分</a></li>
```

### 步骤 3：添加样式

在 `assets/styles.css` 中添加：

```css
.new-section {
    padding: 80px 0;
    background-color: var(--bg-light);
}

.new-section h2 {
    color: var(--primary-color);
}
```

## 📱 响应式测试

在浏览器中按 F12 打开开发者工具，使用设备模拟来测试不同屏幕尺寸：

- 移动设备：< 480px
- 平板：480px - 1024px
- 桌面：> 1024px

## ✅ 检查清单

- [ ] 添加了个人头像
- [ ] 修改了所有个人信息
- [ ] 更新了教育背景
- [ ] 更新了实习经历
- [ ] 添加了科研成果
- [ ] 更新了技能列表
- [ ] 修改了联系方式
- [ ] 添加了社交媒体链接
- [ ] 测试了所有链接
- [ ] 在手机上测试了响应式效果
- [ ] 修改了配色方案（可选）

## 🐛 故障排除

### 图片不显示

- 检查文件名是否正确
- 检查文件路径是否正确
- 确保图片文件存在于 `images/` 文件夹中

### 样式不正常

- 清除浏览器缓存（Ctrl+Shift+Delete）
- 检查 CSS 文件是否被正确加载
- 检查浏览器控制台是否有错误

### 链接不工作

- 检查 href 属性中的 ID 是否与对应部分匹配
- 确保没有拼写错误
- 检查是否有重复的 ID

## 📞 需要帮助？

- 查看 README.md 获取更多信息
- 检查浏览器开发者工具中的控制台错误
- 测试在不同浏览器中的效果

---

祝网站制作愉快！ 🎉
