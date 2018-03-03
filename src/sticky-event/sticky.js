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
            '个人技能',
            '简历说明',
        ];

        const t = container.querySelector('template');
        const toc = document.querySelector('#toc > ul');
        // t2是#toc下的template
        const t2 = toc.querySelector('template');
        // msg即currentValue，i即index
        MSGS.forEach(function (msg, i) {
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
            a.href = '#' + normalizeTitle(msg);
            // 插入到侧边菜单的父容器中去
            toc.appendChild(tocClone);
        });
    }


    /**
     * @param {!Element} container #container容器
     */
    function ckeckStickyChange(container) {
        const targets = Array.from(container.children);
        /* const targets = [].slice.call(container.children); */
        const top = document.querySelector('nav').getBoundingClientRect().height;
        for (let target of targets) {
            const targetInfo = target.getBoundingClientRect(),
                stickyTarget = target.querySelector('.sticky'),
                isShadow = Boolean(target.querySelector('.shadow'));
            const targetTop = targetInfo.top,
                targetBottom = targetInfo.bottom - stickyTarget.getBoundingClientRect().height;

            if (targetTop < top && targetBottom > top) {
                fire(true, stickyTarget);
                continue;
            }

            if ((targetTop >= top || targetBottom <= top) && isShadow) {
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
            allTocsItems.map(function (el) {
                const match = (el.firstElementChild.getAttribute('href').slice(1) ===
                    target.firstElementChild.id);
                el.classList.toggle('active', match);
            });
        }
    }

    /** 
     * 调整现有的sticky框位置
    */
    function adjustStickyTarget() {
        const target = document.querySelector('.shadow');
        if (target) {
            const parent = target.parentElement,
                parentInfo = parent.getBoundingClientRect(),
                paddingTop = Number.parseInt(getComputedStyle(parent)['padding-top'].replace('px', '')),
                paddingBottom = Number.parseInt(getComputedStyle(parent)['padding-bottom'].replace('px', '')),
                padding = paddingTop + paddingBottom;
            // 将nav的高度和container的padding算入
            const top = paddingTop - parentInfo.top,
                bottom = parentInfo.bottom - target.getBoundingClientRect().height - padding;

            let position = top > 10 ? top : 10;
            if (bottom > 0) {
                target.style.top = position + 'px';
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


    function scrollToHeader(el, event) {
        event.preventDefault();
        const target = document.querySelector('#' + normalizeTitle(el.textContent));

        if (target) {
            const parent = target.parentElement.parentElement;
            window.scrollTo({ top: parent.offsetTop + 2, left: 0, behavior: 'smooth' });
        }

        if (getComputedStyle(toc).left === '0px') {
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
    const container = document.querySelector('#container'),
        hamburger = document.querySelector('#hamburger'),
        toc = document.querySelector('#toc');
    generatePage(container);
    // 所有的侧边栏菜单项目
    const allTocsItems = Array.from(toc.querySelectorAll('.toc-item'));

    /**
     * 2. 初次检测
     */
    ckeckStickyChange(container);

    /**
     * 3. 注册事件监听器
     */

    // throttler控制触发间隔，暂定为60fps
    let throttler = null;
    window.addEventListener('scroll', function () {
        adjustStickyTarget();
        ckeckStickyChange(container);

        /* if (!throttler) {
        
            throttler = setTimeout(() => {
                throttler = null;
            }, 10);
        } */
    });

    window.scrollToHeader = scrollToHeader;

})();