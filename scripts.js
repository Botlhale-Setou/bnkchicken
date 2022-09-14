const btnNo = document.querySelector('#no');
const bntYes = document.querySelector('#yes');
const slider = document.querySelector('#slider');
const slider2 = document.querySelector('#slider2');
const btnBurger = document.querySelector('#burgerbtn');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#main-contact');
const minigame = document.querySelector('#minigame');
const btnX = document.querySelector('#btnX');
const next = document.querySelector('#next');
const products = document.querySelector('#products-slider');

let indexSlider = 1;
let indexSlider2 = 1;
let indexProducts = 1;
let active = false;

const dataMod = {
  name: ['Full Chicken', 'Thighs', 'Wings', 'Fillets', 'Drumsticks', 'Misc'],
  briefDesc: ['Fresh full chicken 2kg+', 'Thigh combo pack', 'Wing combo pack', 'Fillet combo pack', 'Drumstick combo pack', 'Other products...'],
  desc: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'],
  price: [90, 90, 90, 90, 90, 'Variable pricing'],
  images: ['./artwork/products/fullchicken1.jpeg', './artwork/products/thighs.jpeg', './artwork/products/wings.jpeg', './artwork/products/fillets.jpeg', './artwork/products/drumsticks.jpeg', './artwork/products/misc.jpeg'],
};

products.innerHTML = `
<div class="product-card">
  <h3 class="p-name" id="p-name1">${dataMod.name[0]}</h3>
  <p class="p-bdesc" id="p-bdesc1">${dataMod.briefDesc[0]}</p>
  <p class="p-price" id="p-price1">${dataMod.price[0]}</p>
  <img src="${dataMod.images[0]}" alt="" class="p-img" id="p-img1">
</div>
<div class="product-card">
  <h3 class="p-name" id="p-name1">${dataMod.name[1]}</h3>
  <p class="p-bdesc" id="p-bdesc1">${dataMod.briefDesc[1]}</p>
  <p class="p-price" id="p-price1">${dataMod.price[1]}</p>
  <img src="${dataMod.images[1]}" alt="" class="p-img" id="p-img1">
</div>
<div class="product-card">
  <h3 class="p-name" id="p-name1">${dataMod.name[2]}</h3>
  <p class="p-bdesc" id="p-bdesc1">${dataMod.briefDesc[2]}</p>
  <p class="p-price" id="p-price1">${dataMod.price[2]}</p>
  <img src="${dataMod.images[2]}" alt="" class="p-img" id="p-img1">
</div>
<div class="product-card">
  <h3 class="p-name" id="p-name1">${dataMod.name[3]}</h3>
  <p class="p-bdesc" id="p-bdesc1">${dataMod.briefDesc[3]}</p>
  <p class="p-price" id="p-price1">${dataMod.price[3]}</p>
  <img src="${dataMod.images[3]}" alt="" class="p-img" id="p-img1">
</div>
<div class="product-card">
  <h3 class="p-name" id="p-name1">${dataMod.name[4]}</h3>
  <p class="p-bdesc" id="p-bdesc1">${dataMod.briefDesc[4]}</p>
  <p class="p-price" id="p-price1">${dataMod.price[4]}</p>
  <img src="${dataMod.images[4]}" alt="" class="p-img" id="p-img1">
</div>
<div class="product-card">
  <h3 class="p-name" id="p-name1">${dataMod.name[5]}</h3>
  <p class="p-bdesc" id="p-bdesc1">${dataMod.briefDesc[5]}</p>
  <p class="p-price" id="p-price1">${dataMod.price[5]}</p>
  <img src="${dataMod.images[5]}" alt="" class="p-img" id="p-img1">
</div>
`;

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

next.addEventListener('click', () => {
  if (indexProducts === 6) {
    indexProducts = 1;
  } else {
    indexProducts += 1;
  }
  switch (indexProducts) {
    case 1:
      products.style.left = '0';
      break;
    case 2:
      products.style.left = '-100vw';
      break;
    case 3:
      products.style.left = '-200vw';
      break;
    case 4:
      products.style.left = '-300vw';
      break;
    case 5:
      products.style.left = '-400vw';
      break;
    case 6:
      products.style.left = '-500vw';
      break;
    default:
      break;
  }
});