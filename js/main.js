const menu_BTN = document.querySelector(".hamburger-menu"),
    navigation = document.querySelector(".main-navigation"),
    headerLinks = document.querySelectorAll("header .main-navigation a");
clock_box = document.querySelector(".clock");

menu_BTN.addEventListener("click", () => {
    menu_BTN.classList.toggle("active");
    navigation.classList.toggle("active");
});

headerLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu_BTN.classList.remove("active");
        navigation.classList.remove("active");
    });
});

setInterval(() => {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    minute = minute > 9 ? minute : "0" + minute;
    clock_box.innerHTML = `${hour}:${minute}`;
}, 1000);
