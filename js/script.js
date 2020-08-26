// preloader fuctionality
window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 2000);

  document.querySelector(".preloader").classList.add("opacity-0");
});

// opens and closes navbar
function navToggle() {
  document.querySelector(".nav").classList.toggle("open");
  document.querySelector(".ham-burger").classList.toggle("active");
}

// controls the bg-color of header
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 570);
});
