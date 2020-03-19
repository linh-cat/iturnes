const nav = document.querySelector(".nav");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
  if (!nav.classList.contains("active")) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
