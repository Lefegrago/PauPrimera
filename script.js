// Pequeñas mejoras de experiencia, sin dependencias externas.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href^='https://maps.app.goo.gl'], a[href^='https://wa.me/']")
    .forEach(link => {
      link.addEventListener("click", () => {
        link.style.opacity = "0.75";
      });
    });
});
