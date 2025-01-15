const root = document.documentElement;
const brightnessToggle = document.querySelector("#dark-light-toggle");
const headerLogoBlack = document.querySelector("#login-ui .black-logo");
const headerLogoWhite = document.querySelector("#login-ui .white-logo");

brightnessToggle.addEventListener("input", (event) => {
    let isLight = brightnessToggle.checked;
    if (isLight) {
        root.classList.add("light");
        root.classList.remove("dark");

        headerLogoBlack.style.visibility = "visible";
        headerLogoWhite.style.visibility = "hidden";
    } else {
        root.classList.add("dark");
        root.classList.remove("light");

        headerLogoBlack.style.visibility = "hidden";
        headerLogoWhite.style.visibility = "visible";
    }
})