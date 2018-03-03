;
(function () {
  const progressBody = document.querySelector('.with-progress');


  function checkProgressBody() {
    const bottom = progressBody.getBoundingClientRect().bottom;
    if ((bottom - window.pageYOffset) < 0 && !progressBody.classList.contains('progress-active')) {
      progressBody.classList.add('progress-active');
      window.removeEventListener('scroll', checkProgressBody, false)
    }
  }

  window.addEventListener('scroll', checkProgressBody, false);
})();