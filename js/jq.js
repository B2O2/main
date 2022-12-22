// 로딩창 제이쿼리
$(window).load(function () {
  $('#roading').show();

  setTimeout(() => {
    $('#roading').fadeOut();
  }, 2000);
});

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
    if (page == 12) return;
    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;
    page--;
  }
  let posTop = (page - 1) * $(window).height();
  mHtml.animate({ scrollTop: posTop });
});

//씨발
let isVisible = false;
const change = document.querySelector(`.container`);
const black = document.querySelector(`footer`);

$(window).on('scroll', function () {
  if (checkVisible($('.container')) && !isVisible) {
    footer.style.color = `#000`;
    isVisible = true;
  }
});

function checkVisible(elm, eval) {
  eval = eval || 'object visible';
  let viewportHeight = $(window).height(), // Viewport Height
    scrolltop = $(window).scrollTop(), // Scroll Top
    y = $(elm).offset().top,
    elementHeight = $(elm).height();

  if (eval == 'object visible') return y < viewportHeight + scrolltop && y > scrolltop - elementHeight;
  if (eval == 'above') return y < viewportHeight + scrolltop;
}

// 시발? 이게아닌가봄
// $(window).document.scroll(function () {
//   let scrT = $(window).scrollTop();
//   console.log(scrT); //스크롤 값 확인용
//   if (scrT == $(document).height() - $(window).height()) {
//     footer.style.color = `#000`;
//   } else {
//     footer.style.color = `#fff`;
//   }
// });
