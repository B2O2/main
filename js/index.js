// 메뉴 toggle기능 생성
(function turnMenu() {
  const menuOpen = document.querySelector('header .menu_open');
  const menuPage = document.querySelector('.menu_page');
  const menuClose = document.querySelector('.menu_page .menu_close');
  menuOpen.addEventListener('click', () => {
    menuPage.classList.add('active');
    menuPage.classList.remove('none');
  });
  menuClose.addEventListener('click', () => {
    menuPage.classList.remove('active');
    menuPage.classList.add('none');
  });
})();

// 마우스 커서(흰색 원)
const circle = document.querySelector('.circle');
let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;
let speed = 0.4;
const animate = () => {
  let distX = mouseX - circleX;
  let distY = mouseY - circleY;
  let translatedValue = `translate3d(${circleX}px, ${circleY}px, 0 )`;

  circleX = circleX + distX * speed;
  circleY = circleY + distY * speed;

  circle.style.transform = translatedValue;

  requestAnimationFrame(animate);
};

animate();

document.addEventListener('mousemove', e => {
  mouseX = e.clientX - circle.offsetWidth / 4;
  mouseY = e.clientY - circle.offsetHeight / 4;
});

// 마우스커서 안 보이게 (수정해야 함...) window.document.body.style.cursor = 'none';

//가로 스크롤
// const container = document.querySelector(`.art2`);
// const boxes = document.querySelectorAll(`.frame`);

// const scrolled = e => {
//     console.log(e.deltaY);
//     let num = (container.scrollLeft += e.deltaY);
//     console.log(num);
//   };

//   container.addEventListener(`wheel`, scrolled);

let swiper = new Swiper('.mySwiper', {
  // spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
