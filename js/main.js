const menuButton = document.querySelector(".menu-button");
const menuCloseButton = document.querySelector(".menu-close");
const menu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {
    menu.classList.add("is-active");
    menuCloseButton.classList.add("is-active");
});

menuCloseButton.addEventListener("click", () => {
    menu.classList.remove("is-active");
    menuCloseButton.classList.remove("is-active");
});