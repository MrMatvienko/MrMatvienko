const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".header-menu");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});
