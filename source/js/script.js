//menu
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

//modal
if (document.querySelector(".modal-overlay")) {
  var cartBtn = document.querySelectorAll(".modal-button");
  var modalOverlay = document.querySelector(".modal-overlay");

  for (var i = 0; i < cartBtn.length; i++) {
    cartBtn[i].addEventListener("click", function(evt) {
      if (modalOverlay.classList.contains("modal-overlay--closed")) {
        evt.preventDefault();
        modalOverlay.classList.remove("modal-overlay--closed");
        modalOverlay.classList.add("modal-overlay--opened");
      } else {
        modalOverlay.classList.add("modal-overlay--closed");
        modalOverlay.classList.remove("modal-overlay--opened");
      }
    });

    window.addEventListener("click", function (evt) {
      if (evt.target === modalOverlay) {
        modalOverlay.classList.remove("modal-overlay--opened");
        modalOverlay.classList.add("modal-overlay--closed");
      }
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        if (modalOverlay.classList.contains("modal-overlay--opened")) {
          evt.preventDefault();
          modalOverlay.classList.remove("modal-overlay--opened");
          modalOverlay.classList.add("modal-overlay--closed");
        }
      }
    });
  }
}
