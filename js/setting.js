const desktopSetting = document.querySelector(".setting-icon-desktop");
const mobileSetting = document.querySelector(".setting-icon-mobile");
const settingContainer = document.querySelector(".setting-container");
const backwardButton = document.querySelector(".backward-button-container");
const bodyTag = document.querySelector(".main-body")
const notiAlertContainerToHideFromSetting = document.querySelector(".noti-alert-container");

desktopSetting.addEventListener("click", () => {
    desktopSetting.classList.add("rotate-setting");
    settingContainer.style.left = "0";
    notiAlertContainerToHideFromSetting.style.top = "-100%";
});

mobileSetting.addEventListener("click", () => {
    mobileSetting.classList.add("fa-spin");
    mobileSetting.classList.add("setting-icon-mobile-active");
    settingContainer.style.left = "0";
    notiAlertContainerToHideFromSetting.style.top = "-100%";
});

backwardButton.addEventListener("click", () => {
    desktopSetting.classList.remove("rotate-setting");
    mobileSetting.classList.remove("fa-spin");
    mobileSetting.classList.remove("setting-icon-mobile-active");
    // if (bodyTag.classList.contains("dark-mode")) {
    //     mobileSetting.style.color = 'white';
    // } else {
    //     mobileSetting.style.color = "black";
    // }
    settingContainer.style.left = "-100%";
});
