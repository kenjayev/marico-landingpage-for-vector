const menu_BTN = document.querySelector(".hamburger-menu"),
    navigation = document.querySelector(".main-navigation");

menu_BTN.addEventListener("click", () => {
    menu_BTN.classList.toggle("active");
    navigation.classList.toggle("active");
});
