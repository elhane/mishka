//menu
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

//modal
var cartBtn = document.querySelectorAll('.catalog-item__button');
var modal = document.querySelector(".modal-overlay");


for (var i = 0; i < cartBtn.length; i++) {
  cartBtn[i].addEventListener('click', function(evt) {
    if (modal.classList.contains('modal-overlay--closed')) {
      evt.preventDefault();
      modal.classList.remove('modal-overlay--closed');
      modal.classList.add('modal-overlay--opened');
    } else {
      modal.classList.add('modal-overlay--closed');
      modal.classList.remove('modal-overlay--opened');
    }
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {

      if (modal.classList.contains("modal-overlay--opened")) {
        evt.preventDefault();
        modal.classList.remove("modal-overlay--opened");
        modal.classList.add('modal-overlay--closed');
      }
    }
  });
}
