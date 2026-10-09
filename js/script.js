/* AAKASH MOGHAA — PORTFOLIO
   Main JavaScript */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    setCurrentYear();
    initializeExternalLinks();
});

function setCurrentYear() {
    const yearElements = document.querySelectorAll("#currentYear, .current-year");
    if (!yearElements.length) {
        return;
    }

    const currentYear = new Date().getFullYear();
    yearElements.forEach((element) => {
        element.textContent = currentYear;
    });
}

function initializeExternalLinks() {
    const externalLinks = document.querySelectorAll('a[href^="http"]');

    externalLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (!href) {
            return;
        }

        try {
            const url = new URL(href);
            if (url.hostname !== window.location.hostname) {
                link.setAttribute("target", "_blank");
                link.setAttribute("rel", "noopener noreferrer");
            }
        } catch {
            // Ignore invalid external URLs.
        }
    });
}