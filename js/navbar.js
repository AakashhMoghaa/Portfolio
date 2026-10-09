/* AAKASH MOGHAA — PORTFOLIO
   Navbar JavaScript */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    if (!header) {
        return;
    }

    const updateNavbar = () => {
        header.classList.toggle("scrolled", window.scrollY > 30);
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
    updateActiveNavigation();
    window.addEventListener("scroll", updateActiveNavigation, { passive: true });
});

function updateActiveNavigation() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    if (!sections.length || !navLinks.length) {
        return;
    }

    const header = document.querySelector(".header");
    const headerHeight = header ? header.offsetHeight : 0;
    const scrollPosition = window.scrollY + headerHeight + 100;
    let activeSectionId = sections[0].id;

    sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
            activeSectionId = section.id;
        }
    });

    navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeSectionId}`;
        link.classList.toggle("active", isActive);

        if (isActive) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}