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
    ]

    const toc = document.querySelector('#toc > ul')
      // t2是#toc下的template
      , t2 = toc.querySelector('template')
      , h2List = container.querySelectorAll('h2')

    // msg即currentValue，i即index
    MSGS.forEach((msg, i) => {
      const h2 = h2List[i]
      if (h2) {
        // 更改sticky框的标题
        h2.textContent = msg
        // 修正id（其实就是将空白符和感叹号，替换为'-'的标题）
        h2.id = normalizeTitle(msg)
      }

      // 侧边菜单部分
      // 深度复制侧边菜单节点
      const tocClone = t2.content.cloneNode(true)
      const a = tocClone.querySelector('a')
      // 设置anchor的文本标题
      a.textContent = msg;
      // 设置anchor的链接地址（替换掉一些符号）
      a.href = '#' + normalizeTitle(msg)
      // 插入到侧边菜单的父容器中去
      toc.appendChild(tocClone)
    })
  }


  const top = document.querySelector('nav').getBoundingClientRect().height

  /**
   * @param {!Element} container #container容器
   */
  function checkStickyChange(container) {
    const targets = Array.from(container.children)
    for (let target of targets) {
      const targetInfo = target.getBoundingClientRect()
        , stickyTarget = target.querySelector('.sticky')
        , isShadow = Boolean(target.querySelector('.shadow'))
        , targetTop = targetInfo.top
        , targetBottom = targetInfo.bottom - stickyTarget.getBoundingClientRect().height - 20

      if (!isShadow && targetTop < top && targetBottom > top) {
        fire(true, stickyTarget)
        continue
      }

      if (isShadow) {
        if (targetTop >= top) {
          fire(false, stickyTarget, true)
        } else if (targetBottom <= top) {
          fire(false, stickyTarget, false)
        }
      }
    }
  }


  /**
   * 对指定的目标(target)触发'sticky-change'事件
   * 特别注意这里的事件由document发布，监听也应当由document监听
   * @param {boolean} stuck
   * @param {Element} target
   * @param {boolean} isUpside
   */
  function fire(stuck, target, isUpside = true) {
    // 切换阴影
    target.classList.toggle('shadow', stuck)

    // 如果为切换粘滞，更新侧边栏展开的栏目
    if (stuck) {
      allTocsItems.map((el) => {
        const isMatch = (el.firstElementChild.getAttribute('href').slice(1) === target.firstElementChild.id)
        el.classList.toggle('active', isMatch)
      })
    }
    // 向上滚动至停止粘滞，回复原位
    else {
      const style = target.style
      style.position = 'absolute'
      style.left = '10px'
      style.right = '10px'
      if (isUpside) {
        style.top = '10px'
        style.bottom = 'auto'
      } else {
        style.bottom = '10px'
        style.top = 'auto'
      }
    }
  }


  /**
   * 调整现有的sticky框位置
   */
  function adjustStickyTarget() {
    const target = document.querySelector('.shadow');
    if (target) {
      const parent = target.parentElement
        , parentInfo = parent.getBoundingClientRect()
        , paddingTop = 70
        , paddingBottom = 10
        , bottom = parentInfo.bottom - target.getBoundingClientRect().height - (paddingTop + paddingBottom)

      if (bottom > 0) {
        const style = target.style
        style.position = 'fixed'
        style.top = top + 10 + 'px'
        style.left = parentInfo.left + 10 + 'px'
        style.right = document.documentElement.clientWidth - parentInfo.right + 10 + 'px'
      }
    }
  }

  /**
   * 将空白符（空格，制表符，换行符等）和感叹号，替换为'-'
   * @param {string} title
   */
  function normalizeTitle(title) {
    return title.replace(/[\s!]/g, '-')
  }

  /**
   * Prevent default
   * @param {Element} el
   * @param {MouseEvent} event
   */
  function scrollToHeader(el, event) {
    event.preventDefault()
    const header = document.querySelector('#' + normalizeTitle(el.textContent))

    if (header) {
      const parent = header.parentElement.parentElement
      window.scrollTo({
        // 记得减去paddingTop，然后预留几个px来触发
        top: parent.offsetTop - 48,
        left: 0,
        behavior: 'smooth',
      })
    }

    // 移动端模式下关闭菜单
    if (getComputedStyle(toc).left === '0px') {
      hamburger.classList.toggle('transformed', false)
      toc.style.display = 'none'
    }
  }

  /******************
   开始执行
   ******************/
  /**
   * 1. 初始化页面
   */
  const container = document.querySelector('#container')
    , hamburger = document.querySelector('#hamburger')
    , toc = document.querySelector('#toc')
  generatePage(container)
  // 所有的侧边栏菜单项目
  const allTocsItems = Array.from(toc.querySelectorAll('.toc-item'))

  /**
   * 2. 初次检测
   */
  checkStickyChange(container)
  adjustStickyTarget()

  /**
   * 3. 注册事件监听器
   */
    // throttler控制触发间隔，暂定为60fps
  let throttler = null
  let throttledCheck = () => {
    checkStickyChange(container)
    adjustStickyTarget()
    throttler = throttler || setTimeout(() => {
      throttler = null
    }, 16)
  };

  window.addEventListener('scroll', throttledCheck, false)
  window.addEventListener('resize', throttledCheck, false)

  window.scrollToHeader = scrollToHeader

})();