// Declaring variables
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const nav = document.querySelector(".nav");
const toggleMode = document.getElementById("toggle-btn");
let lightTheme = localStorage.getItem("light-theme");


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

// LIGHT MODE
// Enabling light theme
const enableLightTheme = () => {
    // Add light theme to the body
    document.body.classList.add("light-theme");

    // Update light theme in the local storage
    localStorage.setItem("light-theme", "enabled");
}

// Disabling light theme
const disableLightTheme = () => {
    // Remove light theme from the body
    document.body.classList.remove("light-theme");

    // Update light theme in the local storage
    localStorage.setItem("light-theme", null);
}

// Enable current them even when page is refreshed
if (lightTheme === "enabled") {
    enableLightTheme();
}

// Toggle light theme on click
toggleMode.addEventListener("click", () =>  {
    lightTheme = localStorage.getItem("light-theme");

    if (lightTheme !== "enabled") {
        enableLightTheme();
    } else {
        disableLightTheme();
    }
});
