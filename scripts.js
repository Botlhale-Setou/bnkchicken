const btnNo = document.querySelector('#no');
const slider = document.querySelector('#slider');

let indexSlider = 1;

btnNo.addEventListener('click', () => {
  if (indexSlider === 6) {
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
    default:
      break;
  }
});