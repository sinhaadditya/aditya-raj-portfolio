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