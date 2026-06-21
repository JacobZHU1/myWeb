// ============================================
// Apple 风格的丝滑动画和交互
// ============================================

// 1. 初始化 - 页面加载时的动画
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    initializeIntersectionObserver();
    initializeSectionFlip();
    initializeNavigation();
    initializeAboutSlider();
    initializeCardTilt();
    initializeForm();
    createBackToTopButton();
    initializeAutoTapBookmarkletLink();
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
                const el = entry.target;
                // 添加动画类
                el.style.animation = `fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
                // `forwards` keeps the animation "filling" indefinitely, which
                // would otherwise permanently block later JS-driven transform
                // changes (e.g. the hover tilt) on this element. Once the
                // entrance animation finishes, hand `transform`/`opacity`
                // back to plain inline styles so later mutations apply normally.
                el.addEventListener('animationend', () => {
                    el.style.animation = '';
                    el.style.opacity = '1';
                    el.style.transform = '';
                }, { once: true });
                observer.unobserve(el);
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

// 4.1 "Page flip" reveal - each major section tilts up into place once as
// it scrolls into view (see .section-flip in styles.css for the resting/
// revealed transform states).
function initializeSectionFlip() {
    const sections = document.querySelectorAll('.section-flip');
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -80px 0px'
    });

    sections.forEach(section => observer.observe(section));
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

// 6. 卡片 3D 倾斜效果 - replaces the old flat translateY lift with a subtle
// cursor-driven tilt (box-shadow/border-color stay owned by CSS :hover;
// this owns `transform` exclusively so the two never fight each other).
function initializeCardTilt() {
    const cards = document.querySelectorAll(
        '.education-card, .research-card, .timeline-content, .skill-category, .contact-info-box, .paper-item'
    );
    if (!cards.length || !window.matchMedia('(pointer: fine)').matches) return;

    const REST_TRANSFORM = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';

    cards.forEach(card => {
        card.style.transform = REST_TRANSFORM;
        let frame = null;

        card.addEventListener('mousemove', (event) => {
            if (frame) return;
            frame = requestAnimationFrame(() => {
                const rect = card.getBoundingClientRect();
                const relX = (event.clientX - rect.left) / rect.width - 0.5;
                const relY = (event.clientY - rect.top) / rect.height - 0.5;
                const rotateY = relX * 8;
                const rotateX = relY * -8;
                card.style.transform =
                    `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.015)`;
                frame = null;
            });
        }, { passive: true });

        card.addEventListener('mouseleave', () => {
            if (frame) {
                cancelAnimationFrame(frame);
                frame = null;
            }
            card.style.transform = REST_TRANSFORM;
        });
    });
}

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
    const isZh = document.documentElement.lang === 'zh';

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
                if (submitLabel) submitLabel.textContent = isZh ? '已发送' : 'Sent';
                setStatus(
                    isZh
                        ? '感谢您的留言，我会尽快回复！'
                        : 'Thanks! Your message has been sent — I’ll get back to you soon.',
                    'success'
                );
                contactForm.reset();

                setTimeout(() => {
                    submitBtn.classList.remove('is-success');
                    if (submitLabel) submitLabel.textContent = originalLabel;
                    submitBtn.disabled = false;
                }, 2400);
            } else {
                const data = await response.json().catch(() => null);
                const detail = data?.errors?.map(err => err.message).join(', ');
                throw new Error(detail || (isZh ? '出现了一些问题，请稍后重试。' : 'Something went wrong. Please try again.'));
            }
        } catch (error) {
            submitBtn.classList.remove('is-loading');
            submitBtn.disabled = false;
            setStatus(
                isZh
                    ? `${error.message || '出现了一些问题。'}您也可以直接发邮件至 xinyuanzhu2024@163.com。`
                    : `${error.message || 'Something went wrong.'} You can also email me directly at xinyuanzhu2024@163.com.`,
                'error'
            );
        }
    });
}


// 7.1 AutoTap Bookmarklet - the cross-site answer to "click a spot on a
// *different* page at a fixed time". A page can never reach into another
// origin's tab (same-origin policy, no exceptions) - so instead of trying to
// reach over there, this code runs *inside* that other page, dropped in by
// the user's own bookmarklet click. Self-contained on purpose: it must work
// dropped into a stranger's page with zero access to this site's CSS/JS.
// Built from a real function (not a hand-escaped string) via Function.
// prototype.toString() so the source below is what actually executes - no
// string-escaping bugs between "what I wrote" and "what runs".
function autotapBookmarkletMain() {
    var HOST_ID = '__autotapBookmarkletHost';
    var existing = document.getElementById(HOST_ID);
    if (existing) {
        if (window.__autotapBookmarkletCleanup) window.__autotapBookmarkletCleanup();
        existing.remove();
        return;
    }

    var BURST_CLICKS = [0, 40, 90];
    var MAX_LOG_ENTRIES = 5;

    var host = document.createElement('div');
    host.id = HOST_ID;
    host.style.position = 'fixed';
    host.style.bottom = '20px';
    host.style.right = '20px';
    host.style.zIndex = '2147483647';
    document.documentElement.appendChild(host);
    var shadow = host.attachShadow({ mode: 'open' });

    shadow.innerHTML =
        '<style>' +
        ':host{all:initial;}' +
        '.atb-panel{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;width:280px;' +
        'background:rgba(255,255,255,0.97);border:1px solid rgba(0,0,0,0.12);border-radius:14px;' +
        'box-shadow:0 12px 40px rgba(0,0,0,0.25);overflow:hidden;color:#1a1a1a;}' +
        '.atb-header{background:linear-gradient(135deg,#6b1d2b,#8b2c42);color:#fff;padding:10px 12px;' +
        'font-weight:700;font-size:13px;display:flex;justify-content:space-between;align-items:center;}' +
        '.atb-close{cursor:pointer;font-size:16px;line-height:1;padding:0 4px;}' +
        '.atb-body{padding:12px;}' +
        '.atb-btn{font:inherit;font-size:12.5px;padding:7px 10px;border-radius:8px;border:1px solid rgba(0,0,0,0.15);' +
        'background:#f5f5f7;cursor:pointer;color:#1a1a1a;}' +
        '.atb-btn-primary{background:#6b1d2b;color:#fff;border-color:#6b1d2b;}' +
        '.atb-btn:disabled{opacity:0.5;cursor:default;}' +
        '.atb-target-info{font-size:11.5px;color:#6b6b6b;margin:8px 0;word-break:break-word;' +
        'background:#f5f5f7;border-radius:6px;padding:6px 8px;}' +
        '.atb-label{display:block;font-size:11.5px;font-weight:600;margin-bottom:4px;}' +
        '.atb-row{display:flex;gap:6px;margin-bottom:8px;}' +
        '.atb-input{font:inherit;font-size:12.5px;padding:6px;border-radius:8px;border:1px solid rgba(0,0,0,0.15);flex:1;min-width:0;}' +
        '.atb-status{font-size:11.5px;color:#6b6b6b;min-height:2.6em;}' +
        '.atb-status.is-armed{color:#6b1d2b;font-weight:600;}' +
        '.atb-status.is-fired{color:#2f7a4d;font-weight:600;}' +
        '.atb-log{list-style:none;margin:6px 0 0;padding:0;font-family:ui-monospace,Menlo,monospace;' +
        'font-size:10.5px;color:#6b6b6b;display:flex;flex-direction:column;gap:3px;max-height:80px;overflow:auto;}' +
        '</style>' +
        '<div class="atb-panel">' +
        '<div class="atb-header"><span>⏱ AutoTap</span><span class="atb-close" id="atbClose">×</span></div>' +
        '<div class="atb-body">' +
        '<button id="atbPick" class="atb-btn" style="width:100%;margin-bottom:8px;">Pick Target</button>' +
        '<div id="atbTargetInfo" class="atb-target-info">No target selected yet.</div>' +
        '<label class="atb-label" for="atbTime">Start time</label>' +
        '<div class="atb-row">' +
        '<input type="time" step="1" id="atbTime" class="atb-input">' +
        '<button id="atbArm" class="atb-btn atb-btn-primary" disabled>Schedule</button>' +
        '</div>' +
        '<button id="atbCancel" class="atb-btn" style="width:100%;margin-bottom:8px;" hidden>Cancel</button>' +
        '<div id="atbStatus" class="atb-status">Pick a target, then schedule.</div>' +
        '<ul id="atbLog"></ul>' +
        '</div></div>';

    var closeBtn = shadow.getElementById('atbClose');
    var pickBtn = shadow.getElementById('atbPick');
    var targetInfo = shadow.getElementById('atbTargetInfo');
    var timeInput = shadow.getElementById('atbTime');
    var armBtn = shadow.getElementById('atbArm');
    var cancelBtn = shadow.getElementById('atbCancel');
    var statusEl = shadow.getElementById('atbStatus');
    var logEl = shadow.getElementById('atbLog');

    var soon = new Date(Date.now() + 60000);
    timeInput.value =
        String(soon.getHours()).padStart(2, '0') + ':' +
        String(soon.getMinutes()).padStart(2, '0') + ':' +
        String(soon.getSeconds()).padStart(2, '0');

    var pickedTarget = null;
    var picking = false;
    var countdownId = null;
    var wakeTimeoutId = null;
    var watchIntervalId = null;
    var targetTimestamp = null;

    function setStatus(message, tone) {
        statusEl.textContent = message;
        statusEl.className = 'atb-status' + (tone ? ' is-' + tone : '');
    }

    function formatClock(date) {
        return date.toLocaleTimeString('en-GB', { hour12: false }) +
            '.' + String(date.getMilliseconds()).padStart(3, '0');
    }

    function logEntry(text) {
        var li = document.createElement('li');
        li.textContent = text;
        logEl.prepend(li);
        while (logEl.children.length > MAX_LOG_ENTRIES) logEl.removeChild(logEl.lastChild);
    }

    function clearTimers() {
        if (countdownId) clearInterval(countdownId);
        if (wakeTimeoutId) clearTimeout(wakeTimeoutId);
        if (watchIntervalId) clearInterval(watchIntervalId);
        countdownId = wakeTimeoutId = watchIntervalId = null;
    }

    function resetControls() {
        armBtn.disabled = !pickedTarget;
        cancelBtn.hidden = true;
        timeInput.disabled = false;
        pickBtn.disabled = false;
    }

    function describeTarget(el) {
        var tag = el.tagName.toLowerCase();
        var id = el.id ? '#' + el.id : '';
        var text = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40);
        return '<' + tag + '>' + id + (text ? ' "' + text + '"' : '');
    }

    function onDocumentClickWhilePicking(e) {
        if (e.target === host) return;
        e.preventDefault();
        e.stopPropagation();
        document.removeEventListener('click', onDocumentClickWhilePicking, true);
        picking = false;
        pickedTarget = e.target;
        pickBtn.textContent = 'Pick Target';
        pickBtn.disabled = false;
        targetInfo.textContent = 'Target: ' + describeTarget(pickedTarget);
        armBtn.disabled = false;
        setStatus('Target marked. Pick a time and hit Schedule.', '');

        var prevOutline = pickedTarget.style.outline;
        pickedTarget.style.outline = '3px solid #d4a574';
        setTimeout(function () { pickedTarget.style.outline = prevOutline; }, 1500);
    }

    function parseTargetTime(value) {
        var parts = value.split(':').map(Number);
        if (parts.some(isNaN)) return null;
        var h = parts[0], m = parts[1], s = parts[2] || 0;
        var date = new Date();
        date.setHours(h, m, s, 0);
        if (date.getTime() <= Date.now()) date.setDate(date.getDate() + 1);
        return date;
    }

    function fireBurst() {
        BURST_CLICKS.forEach(function (delay, i) {
            setTimeout(function () {
                var now = new Date();
                pickedTarget.click();
                var deltaMs = now.getTime() - targetTimestamp;
                var sign = deltaMs >= 0 ? '+' : '';
                logEntry('Click ' + (i + 1) + '/' + BURST_CLICKS.length + ' at ' + formatClock(now) +
                    ' (' + sign + deltaMs + 'ms)');
                if (i === BURST_CLICKS.length - 1) {
                    setStatus('Fired ' + BURST_CLICKS.length + ' clicks around ' + formatClock(new Date(targetTimestamp)) + '.', 'fired');
                    resetControls();
                }
            }, delay);
        });
    }

    function startPreciseWatch() {
        watchIntervalId = setInterval(function () {
            if (Date.now() >= targetTimestamp) {
                clearInterval(watchIntervalId);
                watchIntervalId = null;
                fireBurst();
            }
        }, 15);
    }

    function updateCountdown() {
        var remainingMs = targetTimestamp - Date.now();
        if (remainingMs <= 1000) {
            clearInterval(countdownId);
            countdownId = null;
            setStatus('Armed — firing any moment now…', 'armed');
            return;
        }
        var totalSeconds = Math.ceil(remainingMs / 1000);
        var mm = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        var ss = String(totalSeconds % 60).padStart(2, '0');
        setStatus('Armed — firing in ' + mm + ':' + ss, 'armed');
    }

    pickBtn.addEventListener('click', function () {
        if (picking) {
            picking = false;
            document.removeEventListener('click', onDocumentClickWhilePicking, true);
            pickBtn.textContent = 'Pick Target';
            return;
        }
        picking = true;
        pickBtn.textContent = 'Click the real target…';
        document.addEventListener('click', onDocumentClickWhilePicking, true);
    });

    armBtn.addEventListener('click', function () {
        if (!pickedTarget) {
            setStatus('Pick a target first.', '');
            return;
        }
        var parsed = parseTargetTime(timeInput.value);
        if (!parsed) {
            setStatus('Enter a valid time first.', '');
            return;
        }
        clearTimers();
        targetTimestamp = parsed.getTime();

        armBtn.disabled = true;
        cancelBtn.hidden = false;
        timeInput.disabled = true;
        pickBtn.disabled = true;

        updateCountdown();
        countdownId = setInterval(updateCountdown, 1000);

        var msUntilWake = Math.max(targetTimestamp - Date.now() - 250, 0);
        wakeTimeoutId = setTimeout(startPreciseWatch, msUntilWake);
    });

    cancelBtn.addEventListener('click', function () {
        clearTimers();
        resetControls();
        setStatus('Cancelled. Pick a time and hit Schedule.', '');
    });

    closeBtn.addEventListener('click', function () {
        if (window.__autotapBookmarkletCleanup) window.__autotapBookmarkletCleanup();
        host.remove();
    });

    window.__autotapBookmarkletCleanup = function () {
        clearTimers();
        document.removeEventListener('click', onDocumentClickWhilePicking, true);
    };
}

// Builds the javascript: URI from the real function above (toString(), not
// a hand-written string), so the bookmarklet's source of truth is the
// readable function and can't drift out of sync with what ships. Also wires
// up the Computer/iPhone install tabs and the copy-to-clipboard button -
// iOS Safari has no drag-to-bookmarks-bar gesture, so the documented
// workaround there is: bookmark any page, then edit that bookmark's URL and
// paste this code in. That requires getting the code onto the clipboard
// first, which is what the copy button is for.
function initializeAutoTapBookmarkletLink() {
    const link = document.getElementById('autotapBookmarkletLink');
    if (!link) return;
    const code = '(' + autotapBookmarkletMain.toString() + ')();';
    const bookmarkletUrl = 'javascript:' + code;
    link.href = 'javascript:' + encodeURIComponent(code);

    const tabDesktop = document.getElementById('autotapTabDesktop');
    const tabIos = document.getElementById('autotapTabIos');
    const panelDesktop = document.getElementById('autotapPanelDesktop');
    const panelIos = document.getElementById('autotapPanelIos');

    if (tabDesktop && tabIos && panelDesktop && panelIos) {
        const showTab = (activeTab, activePanel, inactiveTab, inactivePanel) => {
            activeTab.classList.add('is-active');
            activeTab.setAttribute('aria-selected', 'true');
            inactiveTab.classList.remove('is-active');
            inactiveTab.setAttribute('aria-selected', 'false');
            activePanel.hidden = false;
            inactivePanel.hidden = true;
        };
        tabDesktop.addEventListener('click', () => showTab(tabDesktop, panelDesktop, tabIos, panelIos));
        tabIos.addEventListener('click', () => showTab(tabIos, panelIos, tabDesktop, panelDesktop));
    }

    const copyBtn = document.getElementById('autotapCopyBtn');
    const copyStatus = document.getElementById('autotapCopyStatus');
    if (!copyBtn || !copyStatus) return;

    const fallbackCopy = (text) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        let ok = false;
        try {
            ok = document.execCommand('copy');
        } catch (e) {
            ok = false;
        }
        textarea.remove();
        return ok;
    };

    // navigator.clipboard.writeText() can hang indefinitely instead of
    // rejecting (seen when the permission stack can never produce a
    // decision) - race it against a timeout so the fallback always runs
    // and the button never gets stuck with no feedback.
    const withTimeout = (promise, ms) =>
        Promise.race([
            promise,
            new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms))
        ]);

    copyBtn.addEventListener('click', async () => {
        let copied = false;
        if (navigator.clipboard?.writeText) {
            try {
                await withTimeout(navigator.clipboard.writeText(bookmarkletUrl), 1500);
                copied = true;
            } catch (e) {
                copied = false;
            }
        }
        if (!copied) copied = fallbackCopy(bookmarkletUrl);

        copyStatus.textContent = copied
            ? 'Copied! Now go paste it into your bookmark’s URL field.'
            : 'Couldn’t copy automatically — select the bookmarklet link’s address manually instead.';
        copyStatus.className = 'autotap-copy-status' + (copied ? ' is-success' : ' is-error');
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

