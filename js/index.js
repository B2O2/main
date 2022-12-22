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

//마우스 커서(반전 원/근데 한 페이지에서만 보임.. 왜?ㅠㅠ)
(function cursor() {
  const circle = window.document.body.querySelector('.circle');
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
})();

//마우스커서 안 보이게 (수정해야 함...)
//window.document.body.style.cursor = 'none';

//가로스크롤
(function Xscroll() {
  const container = document.querySelector('.container');
  const stickyBox = document.querySelector('.sticky_box');
  const horizontal = document.querySelector('.horizontal');
  function calcHt(ht) {
    return ht.scrollWidth - document.documentElement.clientWidth + document.documentElement.clientHeight;
  }

  container.style.height = `${calcHt(horizontal)}px`; // 4775
  addEventListener('scroll', scrolled);

  function scrolled() {
    horizontal.style.transform = `translateX(-${stickyBox.offsetTop}px)`;
  }
})();

/*
수정요소
 1. 주부생활 섹션 하단부 흰 바탕 보이는 것
 2. 커서 이벤트 메인에서만 작동하는 것
 3. 특정 위치 도달하면 푸터, 메인토글바, 페이지네이션 검정색으로 변경
 4. 특정 위치 도달하면 로고 블랙 버젼으로 변경되는 것.
 5. 스크롤 오류 해결 (내리면 하단으로 휘리릭 내려감)
 6. 스크롤바 없애기
 7. 로딩중 다른 창으로 못 넘어가게 블락하기
 8. 메인페이지 사진 확대하고 줄어드는 것 (중요)
*/

// 검정색 만들기
const footer = document.querySelector(`footer`);
const section = document.querySelector(`.container`);

let footerOffsetTop = footer.getClientRects().top;
let clientHt = document.documentElement.clientHeight;

console.log(footerOffsetTop); // 왜 언디파인드..?
console.log(clientHt); // 959 현재 보여지는 화면의 길이
console.log(footer.clientHeight); // footer의 길이 94
