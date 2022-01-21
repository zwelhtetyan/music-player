const desktopNoti = document.querySelector(".desktop-noti");
const mobileNoti = document.querySelector(".mobile-noti");
const notiAlertContainer = document.querySelector(".noti-alert-container");
const noti = document.querySelectorAll(".noti");
const closeNoti = document.querySelector(".close-btn-noti")

// let isShow = false;
function showNoti() {
    if (window.innerWidth >= 1100) {
        noti[0].style.display = "none";
    } else {
        noti[1].style.display = "none";
    }
    notiAlertContainer.style.top = "0";
}

desktopNoti.addEventListener("click", showNoti);
mobileNoti.addEventListener("click", showNoti);

closeNoti.addEventListener("click", () => {
    notiAlertContainer.style.top = "-100%"
})

