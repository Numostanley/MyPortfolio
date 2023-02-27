// Declaring variables
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const nav = document.querySelector(".nav");
const toggleMode = document.getElementById("toggle-btn");
const body = document.querySelector("body");


// Toggle nav menu on click
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        navLinks.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        navLinks.classList.remove("open");
        menuOpen = false;
    }
});

// Close the navbar on click of any nav link
document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    navLinks.classList.remove("open");
}))

// Adding a sticky navigation to the nav on scroll
window.addEventListener("scroll", () => {
    nav.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle light mode
toggleMode.addEventListener("click", () =>  {

    body.classList.toggle("light-theme")
    toggle.classList.toggle("light-theme");

});
