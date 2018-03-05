'use strict';

;
(function () {
    var hamburger = document.querySelector('#hamburger'),
        container = document.querySelector('#container'),
        toc = document.querySelector('#toc');

    var toggleTable = function toggleTable() {
        if (hamburger.classList.contains('transformed')) {
            hamburger.classList.remove('transformed');
            toc.style.display = 'none';
        } else {
            hamburger.classList.add('transformed');
            toc.style.display = 'block';
        }
    };

    var checkScreen = function checkScreen() {
        if (getComputedStyle(toc).left === '0px') {
            hamburger.classList.toggle('transformed', false);
            toc.style.display = 'none';
        } else {
            var offset = container.getBoundingClientRect().right;
            toc.style.display = 'block';
            toc.style.left = offset + 'px';
        }
    };

    checkScreen();
    window.addEventListener('resize', checkScreen, false);
    window.toggleTable = toggleTable;
})();