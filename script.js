; (function () {
    const hamburger = document.querySelector('#hamburger');
    const toc = document.querySelector('#toc');

    const toggleTable = function () {
        if (hamburger.classList.contains('transformed')) {
            hamburger.classList.remove('transformed');
            toc.style.display = 'none';
        } else {
            hamburger.classList.add('transformed');
            toc.style.display = 'block';
        }
    }

    const checkScreen = function () {
        if (getComputedStyle(toc).position === 'fixed') {
            hamburger.classList.toggle('transformed', false);
            toc.style.display = 'none';
        } else {
            toc.style.display = 'block';
        }
    }

    checkScreen();
    window.addEventListener('resize', checkScreen);
    window.toggleTable = toggleTable;
})();