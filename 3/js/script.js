const menu = document.querySelector('.main-nav');
const menuBtn = document.querySelector('.main-nav__toggle');
const body = document.querySelector('body');

if (document.querySelector('.no-js')) {
  body.classList.remove('no-js');
}

if (menuBtn) {
  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    menu.classList.toggle('main-nav--opened');
  })
}
