const root = document.documentElement;
const brightnessToggle = document.querySelector("#dark-light-toggle");
const headerLogoBlack = document.querySelector(".body-content .black-logo");
const headerLogoWhite = document.querySelector(".body-content .white-logo");

brightnessToggle.addEventListener("input", (event) => {
    let isDark = brightnessToggle.checked;
    if (isDark) {

        root.classList.add("dark");
        root.classList.remove("light");

        headerLogoBlack.style.visibility = "hidden";
        headerLogoWhite.style.visibility = "visible";

        
    } else {
        root.classList.add("light");
        root.classList.remove("dark");

        headerLogoBlack.style.visibility = "visible";
        headerLogoWhite.style.visibility = "hidden";
    }
})