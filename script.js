document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       SMOOTH NAVIGATION
    ================================= */

    document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
/* ================================
   MOBILE MENU
================================= */

const menuButton = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("mobile-open");

        if (isOpen) {
            menuButton.textContent = "✕";
            menuButton.setAttribute("aria-label", "Close menu");
        } else {
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Open menu");
        }

    });

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("mobile-open");

            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Open menu");

        });

    });
}
    /* ================================
       CONTACT MODAL
    ================================= */

    const contactOpen = document.getElementById("contact-open");
    const contactModal = document.getElementById("contact-modal");
    const contactClose = document.getElementById("contact-close");
    const contactOverlay = document.getElementById("contact-overlay");

    function openContactModal() {
        if (contactModal) {
            contactModal.classList.add("active");
            document.body.style.overflow = "hidden";
        }
    }

    function closeContactModal() {
        if (contactModal) {
            contactModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    }

    if (contactOpen) {
        contactOpen.addEventListener("click", function (event) {
            event.preventDefault();
            openContactModal();
        });
    }

    if (contactClose) {
        contactClose.addEventListener("click", function () {
            closeContactModal();
        });
    }

    if (contactOverlay) {
        contactOverlay.addEventListener("click", function () {
            closeContactModal();
        });
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeContactModal();
        }
    });


    /* ================================
       SCROLL REVEAL ANIMATION
    ================================= */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });


    /* ================================
       CURRENT YEAR
    ================================= */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
// ===== BACK TO TOP =====

const backToTop = document.getElementById("back-to-top");

if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
/* ================================
   CONTACT FORM
================================ */
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const submitButton = contactForm.querySelector(".contact-submit");
        const status = document.getElementById("form-status");

        const formData = new FormData(contactForm);

        submitButton.disabled = true;
        submitButton.innerHTML = "SENDING...";

        try {
            const response = await fetch(
                "https://formspree.io/f/mzezzqnq",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json"
                    }
                }
            );

            if (response.ok) {
                status.textContent = "Your message has been sent successfully.";
                status.style.display = "block";

                contactForm.reset();

                submitButton.disabled = false;
                submitButton.innerHTML = 'SEND MESSAGE <span>↗</span>';
            } else {
                throw new Error("Form submission failed");
            }

        } catch (error) {
            status.textContent =
                "Something went wrong. Please try again.";
            status.style.display = "block";

            submitButton.disabled = false;
            submitButton.innerHTML = 'SEND MESSAGE <span>↗</span>';
        }
    });
}
/* =========================================
   PREMIUM SCROLL REVEAL
   ========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================
   ACTIVITY LIST ANIMATION
   ========================================= */

const activityItems = document.querySelectorAll(".activity-item");

const activityObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                activityObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2
    }
);

activityItems.forEach((item) => {
    activityObserver.observe(item);
});
/* =========================================
   ACTIVE NAVIGATION
   ========================================= */

const pageSections = document.querySelectorAll("main section[id]");
const pageNavLinks = document.querySelectorAll(".nav-links a");

function updateActiveNav() {

    let currentSection = "home";

    pageSections.forEach((section) => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= 180) {
            currentSection = section.id;
        }

    });

    pageNavLinks.forEach((link) => {

        link.classList.remove("active");

        const linkTarget = link.getAttribute("href");

        if (linkTarget === "#" + currentSection) {
            link.classList.add("active");
        }

    });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);

updateActiveNav();
/* =========================================
   CERTIFICATION SCROLL REVEAL
   ========================================= */

const certificateLinks =
    document.querySelectorAll(".certificate-link");

const certificateObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("certificate-visible");
                certificateObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

certificateLinks.forEach((certificate) => {
    certificateObserver.observe(certificate);
});