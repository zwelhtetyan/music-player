const mobileHome = document.querySelector(".mobile-home");
const mobileSearch = document.querySelector(".mobile-search");
const mobileMusic = document.querySelector(".mobile-music");
const mobileUser = document.querySelector(".mobile-user");
const mobileMenuItem = document.querySelectorAll(".mobile-menu-item");
const notiAlertContainerToHide = document.querySelector('.noti-alert-container');
const mobileUserAccountToHide = document.querySelector(".mobile-user-account");
const settingContainerToHide = document.querySelector(".setting-container");
const settingIconMobileToHide = document.querySelector(".setting-icon-mobile");

for (let i = 0; i < mobileMenuItem.length; i++) {
    const allMobileMenu = mobileMenuItem[i];

    allMobileMenu.addEventListener("click", () => {
        for (let i = 0; i < mobileMenuItem.length; i++) {
            mobileMenuItem[i].classList.remove("active-icon")
        }
        allMobileMenu.classList.add("active-icon");

        notiAlertContainerToHide.style.top = "-100%"
        mobileUserAccountToHide.style.left = "-100%";
        settingContainerToHide.style.left = "-100%";
        settingIconMobileToHide.classList.remove("fa-spin")
        settingIconMobileToHide.classList.remove("setting-icon-mobile-active");
    })
}


mobileHome.addEventListener("click", () => {
    document.querySelector(".songs-and-artists").style.display = "block";
    document.querySelector(".search-box-mobile").style.display = "none";
});

mobileSearch.addEventListener("click", () => {
    document.querySelector(".songs-and-artists").style.display = "none";
    document.querySelector(".search-box-mobile").style.display = "block";
});

