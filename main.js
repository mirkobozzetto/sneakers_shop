const upButton = document.querySelector("#up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // Le bouton n'apparaît qu'après avoir scrollé de 200 pixels
    upButton.classList.remove("hidden");
  } else {
    upButton.classList.add("hidden");
  }
});

upButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Permet de faire remonter la page de manière douce
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    const targetElement = document.querySelector(href);
    const offsetTop = targetElement.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});
