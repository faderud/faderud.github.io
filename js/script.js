function sticky(selector) {
  var el = document.querySelector(selector);
  var elTop;

  updateElTop();
  determineStuck();

  function updateElTop() {
    el.classList.remove('stick');
    elTop = el.offsetTop;
    el.classList.add('stick');
  }

  function determineStuck() {
    var stuck = window.pageYOffset >= elTop;
    el.classList.toggle('stuck', stuck);

    if (stuck) {
      el.classList.add('was-stuck'); // persistent
    }
  }

  window.addEventListener('scroll', throttle(determineStuck, 100));
  window.addEventListener('resize', debounce(updateElTop ,500));  
}

function wasScrolled() {
  window.removeEventListener('scroll', wasScrolled);
  document.body.classList.add('scrolled');
}

function smoothScroll(selector) {
  if (selector) {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}

var CAROUSEL_INTERVAL = 2500; // miliseconds
function roundrobin(parentSel, itemsSel) {
  var numOfItems = document.querySelectorAll(itemsSel).length;
  var parent = document.querySelector(parentSel);
  var selectedIdx = 0;
  
  window.setInterval(next, CAROUSEL_INTERVAL);

  function next() {
    selectedIdx = (selectedIdx + 1) % numOfItems;
    parent.dataset.selected = selectedIdx;
  }
}


sticky('nav');
roundrobin('#main h1', '#main h1 em');
window.addEventListener('scroll', wasScrolled);
