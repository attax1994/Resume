; (function () {
    'use strict';


    /**
     * 初始化页面
     * @param {!Element} container
     */
    function generatePage(container) {
        // 定义各个栏目标题
        const MSGS = [
            '个人简介',
            '实习经历',
            '项目经历',
            '教育经历',
            '其他',
            '简历说明',
        ];

        const t = container.querySelector('template');
        const toc = document.querySelector('#toc > ul');
        // t2是#toc下的template
        const t2 = toc.querySelector('template');

        // msg即currentValue，i即index
        MSGS.forEach((msg, i) => {
            const h2 = container.querySelectorAll('h2')[i];
            if (h2) {
                // 更改sticky框的标题
                h2.textContent = msg;
                // 修正id（其实就是将空白符和感叹号，替换为'-'的标题）
                h2.id = normalizeTitle(msg);
            }

            // 侧边菜单部分
            // 深度复制侧边菜单节点
            const tocClone = t2.content.cloneNode(true);
            const a = tocClone.querySelector('a');
            // 设置anchor的文本标题
            a.textContent = msg;
            // 设置anchor的链接地址（替换掉一些符号）
            a.href = `#${normalizeTitle(msg)}`;
            // 插入到侧边菜单的父容器中去
            toc.appendChild(tocClone);
        });
    }


    /**
     * 设置IntersectionObserver，从而确认文章容器顶部
     * class为`.section_sentinel--top`的元素是否可视
     * @param {!Element} container #container容器
     */
    function ckeckStickyHeadersChange(container) {
        const targets = Array.from(container.children);
        for (let target of targets) {
            const targetInfo = target.getBoundingClientRect();
            const stickyTarget = target.querySelector('.sticky');
            const isShadow = Boolean(target.querySelector('.shadow'));
            const rootBoundsInfo = container.getBoundingClientRect();

            const headerTop = targetInfo.top + 10,
                headerBottom = targetInfo.bottom - stickyTarget.getBoundingClientRect().height - 10;

            if (headerTop < rootBoundsInfo.top && headerBottom > rootBoundsInfo.top) {
                fire(true, stickyTarget);
                continue;
            }

            if ((headerTop >= rootBoundsInfo.top || headerBottom <= rootBoundsInfo.top) && isShadow) {
                fire(false, stickyTarget);
                continue;
            }
        }
    }


    /**
     * 对指定的目标(target)触发'sticky-change'事件
     * 特别注意这里的事件由document发布，监听也应当由document监听
     * @param {boolean} stuck
     * @param {!Element} target Target element of event.
     */
    function fire(stuck, target) {
        // 切换阴影
        target.classList.toggle('shadow', stuck);

        // 更新侧边栏展开的栏目
        if (stuck) {
            allTocsItems.map(el => {
                const match = (el.firstElementChild.getAttribute('href').slice(1) ===
                    target.firstElementChild.id);
                el.classList.toggle('active', match);
            });
        }
    }


    function adjustStickyTarget() {
        const target = document.querySelector('.shadow');
        if (target) {
            const parentInfo = target.parentElement.getBoundingClientRect();
            // 将nav的高度和container的padding算入
            const top = 70 - parentInfo.top,
                bottom = parentInfo.bottom - target.getBoundingClientRect().height - 80;
            let position = top > 10 ? top : 10;
            if (bottom > 0) {
                target.style.top = `${position}px`;
            }
        }
    }

    /**
     * 将空白符（空格，制表符，换行符等）和感叹号，替换为'-'
     * @param {string} title 
     */
    function normalizeTitle(title) {
        return title.replace(/[\s!]/g, '-');
    }


    function scrollToHeader(el) {
        event.preventDefault();
        const target = document.querySelector(`#${normalizeTitle(el.textContent)}`);
        const hamburger = document.querySelector('#hamburger');
        const toc = document.querySelector('#toc');

        if (target) {
            const parent = target.parentElement.parentElement;
            // 滚动效果已经设置scroll-behavior: smooth
            container.scrollTop = parent.offsetTop + 12;
        }

        if (getComputedStyle(toc).position === 'fixed') {
            hamburger.classList.toggle('transformed', false);
            toc.style.display = 'none';
        }

    }

    /******************
           开始执行
     ******************/
    /**
     * 1. 初始化页面
     */
    const container = document.querySelector('#container');
    generatePage(container);

    /**
     * 2. 初次检测
     */
    ckeckStickyHeadersChange(container);

    /**
     * 3. 注册事件监听器
     */
    // 所有的侧边栏菜单项目
    const allTocsItems = Array.from(document.querySelectorAll('#toc .toc-item'));

    // 由container监听滚动事件
    // throttler控制触发间隔，暂定为60fps
    let throttler = null;
    container.addEventListener('scroll', () => {
        adjustStickyTarget();
        if (!throttler) {
            ckeckStickyHeadersChange(container);
            throttler = setTimeout(() => {
                throttler = null;
            }, 16);
        }
    });

    window.scrollToHeader = scrollToHeader;

})();