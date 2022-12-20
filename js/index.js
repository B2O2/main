// 메뉴 toggle기능 생성
(function turnMenu (){
const menuOpen =document.querySelector('header .menu_open');
const menuPage =document.querySelector('.menu_page');
const menuClose =document.querySelector('.menu_page .menu_close')
menuOpen.addEventListener('click',()=>{
 menuPage.classList.add('active');
 menuPage.classList.remove('none');
})
menuClose.addEventListener('click',()=>{
 menuPage.classList.remove('active');
 menuPage.classList.add('none');
})
})();

// 마우스 커서(흰색 원)
document.addEventListener("mousemove", (e) => { 
    const circle = document.querySelector(".circle")
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    circle.style.left = mouseX + 'px';
    circle.style.top = mouseY + 'px';
});

// 마우스커서 안 보이게 (수정해야 함...) window.document.body.style.cursor = 'none';
