const desktopSetting = document.querySelector(".setting-icon-desktop");
const mobileSetting = document.querySelector(".setting-icon-mobile");
const settingContainer = document.querySelector(".setting-container");
const backwardButton = document.querySelector(".backward-button-container");
const bodyTag = document.querySelector(".main-body")

desktopSetting.addEventListener("click", () => {
    desktopSetting.classList.add("rotate-setting");
    settingContainer.style.left = "0";
});

mobileSetting.addEventListener("click", () => {
    mobileSetting.classList.add("fa-spin");
    mobileSetting.style.color = "#2196f3";
    settingContainer.style.left = "0";
});

backwardButton.addEventListener("click", () => {
    desktopSetting.classList.remove("rotate-setting");
    mobileSetting.classList.remove("fa-spin");
    if (bodyTag.classList.contains("dark-mode")) {
        mobileSetting.style.color = 'white';
    } else {
        mobileSetting.style.color = "black";
    }
    settingContainer.style.left = "-100%";
});
