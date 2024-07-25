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

document.addEventListener("DOMContentLoaded", function () {
  const navbarHeight = document.querySelector("#navbar").offsetHeight;
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".navbar-nav a");
  var navbarCollapse = document.getElementById("navbarSupportedContent");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: true,
        });
      }
    });
  });
});

//step 1: get DOM
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".carousels");
let SliderDom = carouselDom.querySelector(".carousels .list");
let thumbnailBorderDom = document.querySelector(".carousels .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousels .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousels .list .item");
  let thumbnailItemsDom = document.querySelectorAll(".carousels .thumbnail .item");

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}
