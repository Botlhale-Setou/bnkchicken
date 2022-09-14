const btnNo = document.querySelector('#no');
const bntYes = document.querySelector('#yes');
const slider = document.querySelector('#slider');
const slider2 = document.querySelector('#slider2');
const btnBurger = document.querySelector('#burgerbtn');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#main-contact');
const minigame = document.querySelector('#minigame');
const btnX = document.querySelector('#btnX');
const productsSec = document.querySelector('#products-sec');
const next = document.querySelector('#next');

let indexSlider = 1;
let indexSlider2 = 1;
let indexProducts = 1;
let active = false;

const dataMod = {
  name: ['Full Chicken', 'Thighs', 'Wings', 'Fillets', 'Drumsticks', 'Misc'],
  briefDesc: ['Fresh full chicken 2kg+', 'Thigh combo pack', 'Wing combo pack', 'Fillet combo pack', 'Drumstick combo pack', 'Other products...'],
  desc: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'],
  price: [90, 90, 90, 90, 90, 'Variable pricing'],
  images: ['./artwork/products/'],
};

productsSec.innerHTML = `
<img src="./artwork/products/bg.jpeg" alt="Background buns!" id="bg">
		<div class="" id="products-title-container">
			<h2 class="" id="products-title">Products</h2>
    </div>
		<p class="products-forward" id="products-forward">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet laudantium officia optio harum quidem perspiciatis aliquid fugit ipsum vel!</p>
		<div id="next">></div>
		<section class="" id="products">
			<article class="product-card">
				<h3 class="p-name" id="p-name1">Meat</h3>
				<p class="p-bdesc" id="p-bdesc1">Meat brief description</p>
				<p class="p-price" id="p-price1">Rxx.xx</p>
				<img src="./artwork/logo.png" alt="" class="p-img" id="p-img1">
			</article>
			<article class="product-card">
				<h3 class="p-name" id="p-name2">Meat</h3>
				<p class="p-bdesc" id="p-bdesc2">Meat brief description</p>
				<p class="p-price" id="p-price2">Rxx.xx</p>
				<img src="./artwork/logo.png" alt="" class="p-img" id="p-img2">
			</article>
			<article class="product-card">
				<h3 class="p-name" id="p-name3">Meat</h3>
				<p class="p-bdesc" id="p-bdesc3">Meat brief description</p>
				<p class="p-price" id="p-price3">Rxx.xx</p>
				<img src="./artwork/logo.png" alt="" class="p-img" id="p-img3">
			</article>
			<article class="product-card">
				<h3 class="p-name" id="p-name4">Meat</h3>
				<p class="p-bdesc" id="p-bdesc4">Meat brief description</p>
				<p class="p-price" id="p-price4">Rxx.xx</p>
				<img src="./artwork/logo.png" alt="" class="p-img" id="p-img4">
			</article>
			<article class="product-card">
				<h3 class="p-name" id="p-name5">Meat</h3>
				<p class="p-bdesc" id="p-bdesc5">Meat brief description</p>
				<p class="p-price" id="p-price5">Rxx.xx</p>
				<img src="./artwork/logo.png" alt="" class="p-img" id="p-img5">
			</article>
			<article class="product-card">
				<h3 class="p-name" id="p-name6">Meat</h3>
				<p class="p-bdesc" id="p-bdesc6">Meat brief description</p>
				<p class="p-price" id="p-price6">Rxx.xx</p>
				<img src="./artwork/logo.png" alt="" class="p-img" id="p-img6">
			</article>
		</section>
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
  
});