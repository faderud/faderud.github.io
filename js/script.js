function sticky(selector) {
  var el = document.querySelector(selector);
  var elTop;

  function updateElTop() {
    el.classList.remove('stick');
    elTop = el.offsetTop;
    el.classList.add('stick');
  }

  function determineStuck() {
    var stuck = window.pageYOffset >= elTop;
    el.classList.toggle('stuck', stuck);
  }

  updateElTop();
  determineStuck();

  window.onscroll = throttle(determineStuck, 100);
  window.onresize = debounce(updateElTop ,500);  
}

sticky('nav');

function smoothScroll(selector) {
  if (selector) {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
