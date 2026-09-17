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
/* =========================================
   CONTACT MODAL
   ========================================= */

const contactOpen = document.getElementById("contact-open");
const contactModal = document.getElementById("contact-modal");
const contactClose = document.getElementById("contact-close");
const contactOverlay = document.getElementById("contact-overlay");


function openContactModal() {
    contactModal.classList.add("active");
    document.body.style.overflow = "hidden";
}


function closeContactModal() {
    contactModal.classList.remove("active");
    document.body.style.overflow = "";
}


/* OPEN */

contactOpen.addEventListener("click", function(event) {

    event.preventDefault();

    openContactModal();

});


/* CLOSE BUTTON */

contactClose.addEventListener("click", function() {

    closeContactModal();

});


/* CLICK OUTSIDE */

contactOverlay.addEventListener("click", function() {

    closeContactModal();

});


/* ESCAPE KEY */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeContactModal();

    }

});