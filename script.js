document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      navbar.classList.remove("navbar-dark");
      navbar.classList.add("navbar-light");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
