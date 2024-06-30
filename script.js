const menuToggle = document.getElementById("mobile-menu");
const menuList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
  menuList.classList.toggle("active");
});
