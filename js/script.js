const hamburgerMenu = document.querySelector(".hamburger-menu");
const mainHeader = document.querySelector('.main-header');

hamburgerMenu.setAttribute("src", "./assets/images/icon-hamburger.png");

let menuOpen = false;
hamburgerMenu.addEventListener("click", (e) => {
  if(!menuOpen) {
    hamburgerMenu.setAttribute("src", "./assets/images/icon-close.png");
    mainHeader.classList.add('mobile-header');
    document.body.style.overflow = 'hidden';
    menuOpen = true;
  } else {
    hamburgerMenu.setAttribute("src", "./assets/images/icon-hamburger.png");
    mainHeader.classList.remove('mobile-header');
    document.body.style.overflow = 'scroll';
    menuOpen = false;
  }
});
