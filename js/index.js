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

//휠 블락화 (한 페이지씩만 보이게 하는 것)
window.addEventListener(
  'wheel',
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);
let mHtml = $('html');
let page = 1;

mHtml.animate({ scrollTop: 0 }, 10);

$(window).on('wheel', function (e) {
  if (mHtml.is(':animated')) return;
  if (e.originalEvent.deltaY > 0) {
    if (page == 13) return;
    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;
    page--;
  }
  let posTop = (page - 1) * $(window).height();
  mHtml.animate({ scrollTop: posTop });
});

// 마우스 커서(반전 원/근데 한 페이지에서만 보임.. 왜?ㅠㅠ)
function Cursor() {
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
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX - circle.offsetWidth / 4;
    mouseY = e.clientY - circle.offsetHeight / 4;
  });
}

// 마우스커서 안 보이게 (수정해야 함...)
// window.document.body.style.cursor = 'none';

//가로스크롤;
const container = document.querySelector('.container');
const stickyBox = document.querySelector('.sticky_box');
const horizontal = document.querySelector('.horizontal');

function calcHt(ht) {
  return ht.scrollWidth - document.documentElement.clientWidth + document.documentElement.clientHeight;
}

// 매개변수로 요소 노드를 넘기고 값으로 반환
container.style.height = `${calcHt(horizontal)}px`;

addEventListener('scroll', scrolled);

function scrolled() {
  // 포지션이 적용된 가장 가까운 부모는 .container
  console.log('stickyBox.offsetTop:', stickyBox.offsetTop);
  horizontal.style.transform = `translate(-${stickyBox.offsetTop}px)`;
}
