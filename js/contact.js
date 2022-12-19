//page 한 스크롤시 이동
const main = document.body.querySelector('main');
const part_1 = document.body.querySelector('.part_1');
const part_2 = document.body.querySelector('.part_2');


window.addEventListener('wheel', function(e) {
  e.preventDefault();
},{passive: false});

let html = $("html");
let page = 1;

$("html").animate({scrollTop : 0}, 10);

window.on('wheel', function(e) {
  if($("html").is(':animated')) return;

  if(e.originalEvent.deltaY > 0) {
    if(page == 4) return;

    page++;
  } else if(e.originalEvent.deltaY < 0) {
    if(page == 1) return;
    page--;
  }
  let pageTop = (page - 1) * window.height();
  $("html").animate({
    scrollTop : pageTop
  });
})


//main 주소와 이메일 텍스트 밑줄 이벤트
const span_doc = document.querySelectorAll('main > span');

span_doc.addEventListener('click', () => {
  span_doc.style.textDecoration = ''
});

