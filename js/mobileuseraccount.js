const mobileUserIcon = document.querySelector(".mobile-user");
const mobileUserAccount = document.querySelector(".mobile-user-account");
const mobileBackwardButton = document.querySelector(
    ".backward-button-container-mobile"
);

mobileUserIcon.addEventListener("click", () => {
    mobileUserAccount.style.left = "0";
});

mobileBackwardButton.addEventListener("click", () => {
    mobileUserAccount.style.left = "-100%";
    mobileUserIcon.classList.remove("active-icon")
});
