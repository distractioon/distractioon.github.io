window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const carousel = document.querySelector(".carousel");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar-solid");
  } else {
    navbar.classList.remove("navbar-solid");
  }
});

  