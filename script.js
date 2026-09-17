const progress = document.querySelector(".progress");
const glow = document.querySelector(".cursor-glow");
const reveals = document.querySelectorAll(".reveal");
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(window.scrollY / max) * 100}%`;
});

document.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

reveals.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 5) * 80}ms`;
  observer.observe(el);
});

menu?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();
