const btnNo = document.querySelector('#no');
const bntYes = document.querySelector('#yes');
const slider = document.querySelector('#slider');
const slider2 = document.querySelector('#slider2');
const btnBurger = document.querySelector('#burgerbtn');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#main-contact');
const minigame = document.querySelector('#minigame');
const btnX = document.querySelector('#btnX');

let indexSlider = 1;
let indexSlider2 = 1;
let active = false;

btnBurger.addEventListener('click', () => {
  if (active === false) {
    active = true;
    menu.style.left = 0;
    btnBurger.classList.toggle('active');
  } else {
    active = false;
    menu.style.left = '-100vw';
    btnBurger.classList.toggle('active');
  }
});

btnNo.addEventListener('click', () => {
  if (indexSlider === 7) {
    indexSlider = 1;
  } else {
    indexSlider += 1;
  }
  switch (indexSlider) {
    case 1:
      slider.style.left = '0';
      break;
    case 2:
      slider.style.left = '-100vw';
      break;
    case 3:
      slider.style.left = '-200vw';
      break;
    case 4:
      slider.style.left = '-300vw';
      break;
    case 5:
      slider.style.left = '-400vw';
      break;
    case 6:
      slider.style.left = '-500vw';
      break;
    case 7:
      slider.style.left = '-600vw';
      break;
    default:
      break;
  }
  if (indexSlider2 === 10) {
    indexSlider2 = 1;
  } else {
    indexSlider2 += 1;
  }
  switch (indexSlider2) {
    case 1:
      slider2.style.left = 0;
      break;
    case 2:
      slider2.style.left = '-100vw';
      break;
    case 3:
      slider2.style.left = '-200vw';
      break;
    case 4:
      slider2.style.left = '-300vw';
      break;
    case 5:
      slider2.style.left = '-400vw';
      break;
    case 6:
      slider2.style.left = '-500vw';
      break;
    case 7:
      slider2.style.left = '-600vw';
      break;
    case 8:
      slider2.style.left = '-700vw';
      break;
    case 9:
      slider2.style.left = '-800vw';
      break;
    case 10:
      slider2.style.left = '-900vw';
      break;
    default:
      break;
  }
});

bntYes.addEventListener('click', () => {
  contact.style.left = '10vw';
  minigame.style.right = '-100vw';
});

btnX.addEventListener('click', () => {
  contact.style.left = '-80vw';
  minigame.style.right = 0;
});