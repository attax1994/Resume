;
(function () {
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


    const top = document.querySelector('nav').getBoundingClientRect().height;
    /**
     * @param {!Element} container #container容器
     */
    function ckeckStickyChange(container) {
        const targets = Array.from(container.children);
        /* const targets = [].slice.call(container.children); */
        for (let target of targets) {
            const targetInfo = target.getBoundingClientRect(),
                stickyTarget = target.querySelector('.sticky'),
                isShadow = Boolean(target.querySelector('.shadow'));
            const targetTop = targetInfo.top,
                targetBottom = targetInfo.bottom - stickyTarget.getBoundingClientRect().height;

            if (targetTop < top && targetBottom > top && !isShadow) {
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

        // 如果为切换粘滞，更新侧边栏展开的栏目
        if (stuck) {
            allTocsItems.map(function (el) {
                const match = (el.firstElementChild.getAttribute('href').slice(1) ===
                    target.firstElementChild.id);
                el.classList.toggle('active', match);
            });
        }
        // 向上滚动至停止粘滞，回复原位
        else {
            const targetInfo = target.getBoundingClientRect();
            if (targetInfo.top > top) {
                target.style.top = '10px';
                /* target.style.transform = 'none'; */
            }
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
                parentStyle = getComputedStyle(parent),
                paddingTop = Number.parseInt(parentStyle['padding-top']),
                paddingBottom = Number.parseInt(parentStyle['padding-bottom']);
            // 将nav的高度和container的padding算入
            const top = paddingTop - parentInfo.top,
                bottom = parentInfo.bottom - target.getBoundingClientRect().height - (paddingTop + paddingBottom),
                position = top > 10 ? top : 10;

            if (bottom > 0) {
                target.style.top = position + 'px';
                // 如果不需要ie9支持，选用translate3d，开启GPU渲染
                /* target.style.transform = 'translate3d(0,' + (position - 10) + 'px, 0)'; */
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

    /**
     * Prevent default 
     * @param {Element} el 
     * @param {MouseEvent} event 
     */
    function scrollToHeader(el, event) {
        event.preventDefault();
        const header = document.querySelector('#' + normalizeTitle(el.textContent));

        if (header) {
            const parent = header.parentElement.parentElement;
            window.scrollTo({
                // 记得减去paddingTop，然后预留几个px来触发
                top: parent.offsetTop - 48,
                left: 0,
                behavior: 'smooth'
            });
        }

        // 移动端模式下关闭菜单
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
    adjustStickyTarget();

    /**
     * 3. 注册事件监听器
     */
    // throttler控制触发间隔，暂定为60fps
    let throttler = null;
    window.addEventListener('scroll', function () {
        ckeckStickyChange(container);
        adjustStickyTarget();
        /* throttler = throttler || setTimeout(() => {
            throttler = null;
        }, 10); */
    });

    window.scrollToHeader = scrollToHeader;

})();