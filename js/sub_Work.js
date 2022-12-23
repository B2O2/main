// toggle menu
(function turnMenu() {
  const menuOpen = document.querySelector(".menu_open");
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
document.body.style.cursor = "none";
