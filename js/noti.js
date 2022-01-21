const desktopNoti = document.querySelector(".desktop-noti");
const mobileNoti = document.querySelector(".mobile-noti");
const notiAlertContainer = document.querySelector(".noti-alert-container");
const noti = document.querySelectorAll(".noti");
const closeNoti = document.querySelector(".close-btn-noti")
const settingContainerToHideFromNoti = document.querySelector('.setting-container');
const settingIconDesktopToStopRotate = document.querySelector(".setting-icon-desktop");
const settingIconMobileToStopRotate = document.querySelector(".setting-icon-mobile");

// let isShow = false;
function showNoti() {
    if (window.innerWidth >= 1100) {
        noti[0].style.display = "none";
    } else {
        noti[1].style.display = "none";
    }
    notiAlertContainer.style.top = "0";
    settingContainerToHideFromNoti.style.left = "-100%"
    settingIconDesktopToStopRotate.classList.remove("rotate-setting");
    settingIconMobileToStopRotate.classList.remove("fa-spin");
    settingIconMobileToStopRotate.classList.remove("setting-icon-mobile-active");
}

desktopNoti.addEventListener("click", showNoti);
mobileNoti.addEventListener("click", showNoti);

closeNoti.addEventListener("click", () => {
    notiAlertContainer.style.top = "-100%"
})

