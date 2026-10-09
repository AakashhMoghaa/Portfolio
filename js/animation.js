/* AAKASH MOGHAA — PORTFOLIO
   Animation JavaScript */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    initializePageLoad();
    initializeScrollReveal();
    initializeStaggerAnimations();
    initializeImageAnimations();
    initializeHoverAnimations();
    initializeReducedMotion();
});

function initializePageLoad() {
    document.body.classList.add("page-loaded");
}

function initializeScrollReveal() {
    const revealElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );
    if (!revealElements.length) {
        return;
    }

    if (!("IntersectionObserver" in window)) {
        revealElements.forEach((element) => {
            element.classList.add("revealed");
        });
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("revealed");
            currentObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach((element) => {
        observer.observe(element);
    });
}

function initializeStaggerAnimations() {
    const staggerContainers = document.querySelectorAll(".stagger");
    if (!staggerContainers.length) {
        return;
    }

    staggerContainers.forEach((container) => {
        Array.from(container.children).forEach((child, index) => {
            child.style.setProperty("--animation-delay", `${index * 100}ms`);
            child.classList.add("stagger-item");
        });
    });
}

function initializeImageAnimations() {
    const images = document.querySelectorAll("img");
    if (!images.length) {
        return;
    }

    images.forEach((image) => {
        if (image.complete) {
            image.classList.add("image-loaded");
        }

        image.addEventListener("load", () => {
            image.classList.add("image-loaded");
        });

        image.addEventListener("error", () => {
            image.classList.add("image-error");
        });
    });
}

function initializeHoverAnimations() {
    const cards = document.querySelectorAll(
        ".project-card, .skill-card, .service-card, .education-card"
    );
    if (!cards.length) {
        return;
    }

    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("is-hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("is-hovered");
        });
    });
}

function initializeReducedMotion() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!prefersReducedMotion.matches) {
        return;
    }

    document.body.classList.add("reduced-motion");

    const hiddenElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );
    hiddenElements.forEach((element) => {
        element.classList.add("revealed");
    });
}