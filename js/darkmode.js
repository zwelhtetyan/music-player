const darkModeButton = document.querySelector(".dark-mode-button");
const lightModeButton = document.querySelector(".light-mode-button");
const body = document.getElementsByTagName("body")[0];
const settingIconDesktop = document.querySelector(".setting-icon-desktop");
const settingIconMobile = document.querySelector(".setting-icon-mobile");

const darkModeFunc = () => {
    settingIconDesktop.classList.remove("rotate-setting");
    settingIconMobile.classList.remove("fa-spin");
    settingIconMobile.classList.remove("setting-icon-mobile-active");
    settingContainer.style.left = "-100%";
    darkModeButton.style.display = "none";
    lightModeButton.style.display = "flex";
    body.classList.add("dark-mode");
    localStorage.setItem("dark", "dark-mode");

    if (body.classList.contains("dark-mode")) {
        settingIconMobile.style.color = 'white';
    } else {
        settingIconMobile.style.color = "black";
    }
};

const lightModeFunc = () => {
    settingIconDesktop.classList.remove("rotate-setting");
    settingIconMobile.classList.remove("fa-spin");
    settingIconMobile.classList.remove("setting-icon-mobile-active");
    settingContainer.style.left = "-100%";
    darkModeButton.style.display = "flex";
    lightModeButton.style.display = "none";
    body.classList.remove("dark-mode");
    localStorage.removeItem("dark");

    if (body.classList.contains("dark-mode")) {
        settingIconMobile.style.color = 'white';
    } else {
        settingIconMobile.style.color = "black";
    }
};

darkModeButton.addEventListener("click", darkModeFunc);
lightModeButton.addEventListener("click", lightModeFunc);

(function () {
    if (localStorage.getItem("dark")) {
        body.classList.add("dark-mode");
        darkModeButton.style.display = "none";
        lightModeButton.style.display = "flex";
    }
})();
