const logo = document.querySelector("header h1 .logo");
const path1 = document.querySelector("header .menu_open svg #path1");
const path2 = document.querySelector("header .menu_open svg #path2");
const imgBg = document.querySelector(".img_bg");
const on1 = document.querySelector(".text_container > .on1");
const on2 = document.querySelector(".text_container > .on2");
const on3 = document.querySelector(".text_container > .on3");
const on4 = document.querySelector(".text_container > .on4");
const on5 = document.querySelector(".text_container > .on5");
const arrow = document.querySelector(".text_container > .arrow");
const span = document.querySelector(".specialities_wrap span");
const active1 = document.querySelector(
  ".container2 .specialities_wrap ul > #active1"
);
const active2 = document.querySelector(
  ".container2 .specialities_wrap ul > #active2"
);
const active3 = document.querySelector(
  ".container2 .specialities_wrap ul > #active3"
);
const clients = document.querySelector("#clients_wrap > ul");
const container3P = document.querySelector(".container3 p");
const container3Img = document.querySelector(".container3 img");
const line1 = document.querySelector(".container4 .contact .line01");
const line2 = document.querySelector(".container4 .contact .line02");
const line3 = document.querySelector(".container4 .contact .line03");
const line4 = document.querySelector(".container4 .contact .line04");
const eng = document.querySelector(".container4 p");
const mousewheelWrap = document.querySelector(".mousewheel_wrap");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");

window.addEventListener("scroll", function (e) {
  e.preventDefault();
  scrollTo({
    top: getBox,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (value > 300) {
    imgBg.style.animation = "movRight 0.5s 0.15s ease-out";
    on1.style.animation = "movLeft 0.5s 0.15s forwards";
    on2.style.animation = "movLeft 0.5s 0.3s forwards";
    on3.style.animation = "movLeft 0.5s 0.45s forwards";
    on4.style.animation = "movLeft 0.5s 0.6s forwards";
    on5.style.animation = "movLeft 0.5s 0.75s forwards";
    arrow.style.animation = "fadeIn 0.7s 0.6s forwards";
    mousewheelWrap.style.opacity = 0;
  } else {
    mousewheelWrap.style.opacity = 1;
  }

  if (value > 1680) {
    span.style.animation = "move 1.5s forwards";
    active1.style.animation = "active 1.5s forwards";
    active2.style.animation = "active 1.9s forwards";
    active3.style.animation = "active 2.3s forwards";
  }

  if (value > 3900) {
    container3Img.style.animation = "fadeIn 0.7s 0.4s forwards";
    container3P.style.animation = "fadeIn 0.7s 0.8s forwards";
  }

  // if (value > 5000) {
  //   eng.style.animation = "fadeIn 2.5s 2.5s forwards";
  // }
});
window.addEventListener("scroll", function () {
  let value = window.scrollY;

  if (value > 2500) {
    clients.style.transition = "opacity 0.8s, transform 0.8s";
    clients.style.transform = "translate(0)";
    clients.style.opacity = 1;
  }

  if (value > 5000) {
    line1.style.animation = "fadeIn 0.1s ease-in";
    line1.style.opacity = 1;
    line2.style.animation = "fadeIn 0.2s ease-in";
    line2.style.opacity = 1;
    line3.style.animation = "fadeIn 0.3s ease-in";
    line3.style.opacity = 1;
    line4.style.animation = "fadeIn 0.4s ease-in";
    line4.style.opacity = 1;
    eng.style.animation = "fadeIn 6s forwards";
  }

  if (value >= 900) {
    logo.classList.add("color");
    path1.classList.add("color");
    path2.classList.add("color");
  } else if (value <= 4270) {
    logo.classList.remove("color");
    path1.classList.remove("color");
    path2.classList.remove("color");
  }
});

//마우스 커서
const circle = document.querySelector(".circle");
var pointSize = $(".circle").width() / 2;
$("body").mousemove(function (e) {
  $(".circle").css("top", e.pageY - pointSize);
  $(".circle").css("left", e.pageX - pointSize);
});
document.body.style.cursor = "none";

// toggle menu
(function turnMenu() {
  const menuOpen = document.querySelector("header .menu_open");
  const menuPage = document.querySelector(".menu_wrap");
  const menuClose = document.querySelector(".menu_wrap .menu_close");

  menuOpen.addEventListener("click", () => {
    menuPage.classList.add("on");
    menuPage.classList.remove("none");
  });
  menuClose.addEventListener("click", () => {
    menuPage.classList.remove("on");
    menuPage.classList.add("none");
  });
})();
