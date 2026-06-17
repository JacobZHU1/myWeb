# 📸 图片添加指南

## 个人头像设置

### 文件位置
- 路径：`images/profile.jpg`
- 类型：JPG、PNG 或 WebP
- 推荐尺寸：500×500 像素或更大
- 文件大小：100KB - 500KB
- 背景：建议使用简洁背景或模糊背景

### 如何添加头像

1. **准备图片**
   - 选择一张清晰、正式的个人照片
   - 使用正方形格式（如 500×500px）
   - 可以是证件照、工作照或专业写真照

2. **优化图片**
   - 使用在线工具或图片编辑软件压缩图片
   - 保持在 500KB 以内以加快加载速度
   - 建议转换为 WebP 格式以获得更好的压缩效果

3. **放置文件**
   - 将图片保存为 `profile.jpg`（或 `.png`）
   - 放在 `images/` 文件夹中
   - 刷新网站即可看到效果

### 图片处理工具

免费在线工具：
- [TinyPNG](https://tinypng.com/) - 图片压缩
- [Squoosh](https://squoosh.app/) - Google 开发的图片优化工具
- [CloudConvert](https://cloudconvert.com/) - 图片格式转换
- [Pixlr](https://pixlr.com/) - 在线图片编辑器
- [Canva](https://www.canva.com/) - 设计工具

本地工具：
- Photoshop
- GIMP（免费）
- Paint.NET（免费）
- Krita（免费）

## 📁 完整的 images 文件夹结构

```
images/
├── profile.jpg                 # 个人头像（必需）
├── hero-bg.jpg                 # 页面背景（可选）
├── education-banner.jpg        # 教育部分图片（可选）
├── experience-icons/           # 经验公司图标（可选）
│   ├── bosch.png
│   ├── oppo.png
│   ├── citic.png
│   └── ...
└── projects/                   # 项目图片（可选）
    ├── project1.jpg
    ├── project2.jpg
    └── ...
```

## 🖼️ 在网站中使用图片

### 已经配置的图片

个人头像在 HTML 中已经配置：

```html
<img src="images/profile.jpg" alt="Xinyuan Zhu" class="profile-pic">
```

### 添加新图片

在各个部分添加图片的例子：

#### 1. 在教育部分添加学校标志

```html
<div class="education-card">
    <img src="images/yale-logo.png" alt="Yale Logo" class="school-logo">
    <h3>耶鲁大学</h3>
    <!-- ... -->
</div>
```

#### 2. 在经历部分添加公司图标

```html
<div class="timeline-content">
    <img src="images/experience-icons/bosch.png" alt="Bosch" class="company-logo">
    <h3>博世（中国）</h3>
    <!-- ... -->
</div>
```

#### 3. 在技能部分添加技术栈图片

```html
<div class="skill-icon">
    <img src="images/python-logo.png" alt="Python">
    <p>Python</p>
</div>
```

## 🎨 图片相关的 CSS 样式

### 为图片添加样式

在 `assets/styles.css` 中添加或修改：

```css
/* 圆形头像 */
.profile-pic {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
}

/* 公司/学校标志 */
.school-logo,
.company-logo {
    max-width: 100px;
    height: auto;
    margin-bottom: 1rem;
}

/* 项目图片 */
.project-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.project-image:hover {
    transform: scale(1.05);
}

/* 技能图标 */
.skill-icon {
    text-align: center;
}

.skill-icon img {
    width: 50px;
    height: 50px;
    margin-bottom: 0.5rem;
}
```

## 📊 图片优化建议

### 文件大小对比

| 格式 | 文件大小 | 优点 | 缺点 |
|------|---------|------|------|
| JPG | 小 | 文件小，加载快 | 有损压缩，质量可能下降 |
| PNG | 中等 | 无损压缩，支持透明 | 文件较大 |
| WebP | 最小 | 文件最小，质量好 | 老浏览器不支持 |

### 推荐设置

- **头像**：PNG 或 WebP，400-500px，保留透明度
- **背景**：JPG 或 WebP，高分辨率，大小 < 500KB
- **图标**：PNG 或 SVG，保留透明度
- **项目图片**：JPG 或 WebP，宽度 600-1200px，大小 < 300KB

## 🔧 常见图片问题解决

### 问题 1：图片不显示

**原因**：
- 文件路径错误
- 文件不存在
- 文件名拼写错误
- 浏览器缓存

**解决方案**：
1. 检查文件是否确实存在于 `images/` 文件夹
2. 检查 HTML 中的路径是否正确
3. 检查文件名大小写是否匹配
4. 清除浏览器缓存（Ctrl+Shift+Delete）
5. 打开浏览器开发者工具（F12）查看控制台错误

### 问题 2：图片加载很慢

**原因**：
- 文件太大
- 网络连接慢
- 图片分辨率太高

**解决方案**：
1. 压缩图片到 < 500KB
2. 使用 CDN 加快加载速度
3. 转换为更小的格式（如 WebP）
4. 使用懒加载技术

### 问题 3：图片质量差

**原因**：
- 过度压缩
- 图片分辨率低
- 缩放比例不对

**解决方案**：
1. 使用原始高分辨率图片
2. 使用适当的压缩设置
3. 确保 CSS 中的大小合适

## 📷 图片采集建议

### 个人头像拍摄建议

- 📸 **背景**：选择简洁或模糊的背景
- 💡 **光线**：自然光或工作室光线，避免强烈阴影
- 📐 **角度**：正面或 3/4 侧面
- 👔 **着装**：正式或商务休闲风格
- 😊 **表情**：自然微笑或中立表情

### 图片来源

- 自己拍摄
- 专业摄影师
- Unsplash、Pexels 等免费素材库（需确认可以用于个人网站）
- 公司提供的专业照片

## 🌐 响应式图片

### 为不同屏幕设置不同大小的图片

```html
<picture>
    <source media="(min-width: 1200px)" srcset="images/profile-large.jpg">
    <source media="(min-width: 768px)" srcset="images/profile-medium.jpg">
    <img src="images/profile.jpg" alt="Xinyuan Zhu" class="profile-pic">
</picture>
```

## ✅ 图片优化检查清单

- [ ] 头像已放在 `images/profile.jpg`
- [ ] 图片大小 < 500KB
- [ ] 图片分辨率 ≥ 400×400px
- [ ] 文件名与 HTML 中的路径匹配
- [ ] 在本地测试过图片显示
- [ ] 图片在手机上也能正确显示
- [ ] 考虑过使用 WebP 格式以优化性能

## 📚 更多资源

- [图片优化最佳实践](https://web.dev/optimize-images/)
- [响应式图片指南](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [图片压缩工具大全](https://www.smashingmagazine.com/2020/08/compress-images/)

---

祝图片添加顺利！ 🎉
