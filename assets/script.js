// ============================================
// Apple 风格的丝滑动画和交互
// ============================================

// 1. 初始化 - 页面加载时的动画
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    initializeIntersectionObserver();
    initializeNavigation();
    initializeAboutSlider();
    initializeForm();
    createBackToTopButton();
});

// 2. 导航栏交互
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    // 汉堡菜单
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // 点击菜单外部关闭
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // 平滑滚动导航
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                // 关闭菜单
                navMenu?.classList.remove('active');
                hamburger?.classList.remove('active');

                // 平滑滚动
                setTimeout(() => {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        });
    });

    // 导航栏滚动效果
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 8px 32px rgba(107, 29, 43, 0.15)';
            navbar.style.backdropFilter = 'blur(20px) saturate(180%)';
        } else {
            navbar.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
            navbar.style.backdropFilter = 'blur(20px) saturate(180%)';
        }
    }, { passive: true });
}

// 3. 页面加载时的初始动画
function initializeAnimations() {
    // 为所有需要动画的元素添加初始样式
    const animatedElements = document.querySelectorAll(
        '.hero-image, .hero-text, .education-card, .timeline-item, .research-card, .skill-category'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
    });
}

// 4. 交叉观察器 - 元素进入视口时的动画
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 添加动画类
                entry.target.style.animation = `fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    document.querySelectorAll(
        '.hero-image, .hero-text, .education-card, .timeline-item, .research-card, .skill-category, .paper-item, .contact-info-box'
    ).forEach(el => {
        observer.observe(el);
    });
}

// 5. 按钮悬停效果
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.02)';
    });

    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });

    btn.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(-1px) scale(0.98)';
    });

    btn.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-3px) scale(1.02)';
    });
});

// 5.1 About section photo slider - Apple-style pinned scroll gallery
function initializeAboutSlider() {
    const aboutSection = document.querySelector('#about');
    if (!aboutSection) return;

    const slides = Array.from(aboutSection.querySelectorAll('.about-bg-slider .about-slide'));
    const dots = Array.from(aboutSection.querySelectorAll('.about-dot'));
    const bgSlider = document.getElementById('aboutBgSlider');
    const counterCurrent = document.getElementById('aboutCounterCurrent');
    const scrollHint = document.getElementById('aboutScrollHint');

    const slideCount = Math.min(slides.length, dots.length) || slides.length;
    let activeIndex = 0;
    let isAnimating = false;
    let hintDismissed = false;

    const pad = (n) => String(n + 1).padStart(2, '0');

    const setActiveSlide = (index) => {
        if (index === activeIndex) return;
        slides[activeIndex]?.classList.remove('active');
        dots[activeIndex]?.classList.remove('active');
        activeIndex = index;
        slides[activeIndex]?.classList.add('active');
        dots[activeIndex]?.classList.add('active');
        if (counterCurrent) counterCurrent.textContent = pad(activeIndex);
    };

    const dismissHint = () => {
        if (hintDismissed || !scrollHint) return;
        hintDismissed = true;
        scrollHint.classList.add('is-hidden');
    };

    // The gallery only "pins" the wheel on wide viewports where the section
    // fills the full viewport height (see CSS .about height: 100vh).
    const isPinned = () => {
        if (window.innerWidth <= 900) return false;
        const rect = aboutSection.getBoundingClientRect();
        const epsilon = 2;
        return rect.top <= epsilon && rect.bottom >= window.innerHeight - epsilon;
    };

    aboutSection.addEventListener('wheel', (event) => {
        if (!isPinned()) return;
        if (Math.abs(event.deltaY) < 4) return;

        const direction = event.deltaY > 0 ? 1 : -1;
        const atLastGoingForward = direction > 0 && activeIndex === slideCount - 1;
        const atFirstGoingBack = direction < 0 && activeIndex === 0;

        // Already at the first/last photo and scrolling further away from the
        // gallery: release the wheel so the page continues to scroll normally.
        if (atLastGoingForward || atFirstGoingBack) return;

        event.preventDefault();
        dismissHint();
        if (isAnimating) return;

        isAnimating = true;
        setActiveSlide(activeIndex + direction);
        setTimeout(() => {
            isAnimating = false;
        }, 620);
    }, { passive: false });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            dismissHint();
            setActiveSlide(Number(dot.dataset.index));
        });
    });

    // Subtle Apple-style parallax: the photo drifts opposite the cursor.
    if (bgSlider && window.matchMedia('(pointer: fine)').matches) {
        aboutSection.addEventListener('mousemove', (event) => {
            const rect = aboutSection.getBoundingClientRect();
            const relX = (event.clientX - rect.left) / rect.width - 0.5;
            const relY = (event.clientY - rect.top) / rect.height - 0.5;
            bgSlider.style.transform = `translate3d(${relX * -24}px, ${relY * -18}px, 0) scale(1.04)`;
        }, { passive: true });

        aboutSection.addEventListener('mouseleave', () => {
            bgSlider.style.transform = 'translate3d(0, 0, 0) scale(1.04)';
        });
    }
}

// 6. 卡片悬停效果
document.querySelectorAll('.education-card, .research-card, .contact-info-box').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 20px 50px rgba(107, 29, 43, 0.15)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.06)';
    });
});

// 7. 表单处理 - submits to Formspree via fetch so visitors never need their
// own email client open; gives inline Apple-style loading/success/error states.
function initializeForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    // Input focus animation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const submitLabel = submitBtn.querySelector('.btn-label');
    const originalLabel = submitLabel ? submitLabel.textContent : '';
    const statusEl = contactForm.querySelector('#contactFormStatus');

    const setStatus = (message, tone) => {
        if (!statusEl) return;
        statusEl.textContent = message;
        statusEl.className = 'contact-form-status' + (tone ? ` is-${tone}` : '');
    };

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (submitBtn.disabled) return;

        submitBtn.disabled = true;
        submitBtn.classList.add('is-loading');
        setStatus('', '');

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { Accept: 'application/json' }
            });

            if (response.ok) {
                submitBtn.classList.remove('is-loading');
                submitBtn.classList.add('is-success');
                if (submitLabel) submitLabel.textContent = 'Sent';
                setStatus('Thanks! Your message has been sent — I’ll get back to you soon.', 'success');
                contactForm.reset();

                setTimeout(() => {
                    submitBtn.classList.remove('is-success');
                    if (submitLabel) submitLabel.textContent = originalLabel;
                    submitBtn.disabled = false;
                }, 2400);
            } else {
                const data = await response.json().catch(() => null);
                const detail = data?.errors?.map(err => err.message).join(', ');
                throw new Error(detail || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            submitBtn.classList.remove('is-loading');
            submitBtn.disabled = false;
            setStatus(
                `${error.message || 'Something went wrong.'} You can also email me directly at xinyuanzhu2024@163.com.`,
                'error'
            );
        }
    });
}

// 8. 返回顶部按钮
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.id = 'backToTop';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #6b1d2b, #8b2c42);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
        display: none;
        z-index: 999;
        box-shadow: 0 8px 32px rgba(107, 29, 43, 0.3);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    `;

    document.body.appendChild(button);

    // 显示/隐藏按钮
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'block';
            button.style.animation = 'slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        } else {
            button.style.display = 'none';
        }
    }, { passive: true });

    // 点击返回顶部
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 悬停效果
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.15) translateY(-5px)';
        this.style.boxShadow = '0 15px 40px rgba(107, 29, 43, 0.4)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
        this.style.boxShadow = '0 8px 32px rgba(107, 29, 43, 0.3)';
    });
}

// 9. 为页面添加必要的动画样式
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }

    /* 平滑的所有过渡 */
    * {
        scroll-behavior: smooth;
    }

    /* 为按钮添加丝滑过渡 */
    .btn {
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    /* 为卡片添加丝滑过渡 */
    .education-card, .research-card, .contact-info-box, .timeline-content {
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    /* 禁用选中时的文本突出显示 */
    ::selection {
        background-color: rgba(107, 29, 43, 0.2);
        color: inherit;
    }

    /* 改进的焦点样式 */
    :focus-visible {
        outline: 2px solid #6b1d2b;
        outline-offset: 4px;
    }
`;
document.head.appendChild(styleSheet);

// 10. 性能优化 - 防抖函数
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// 11. 平滑的页面加载检测
window.addEventListener('load', () => {
    document.documentElement.style.scrollBehavior = 'smooth';
});

// 12. 鼠标跟踪光效（可选高级效果）
document.addEventListener('mousemove', debounce((e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // 可以在这里添加自定义的鼠标跟踪效果
}, 100), false);

console.log('🎨 Apple风格网站脚本已加载 - 享受丝滑的动画效果！');

