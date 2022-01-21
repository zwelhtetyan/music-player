const registerBtn = document.querySelector(".register-button");
const userNameInput = document.querySelector(".user-name-input");
const registerContainer = document.querySelector(".registration-container");
const form = document.querySelector(".form");
const notiMessage = document.querySelector(".noti-message");
const userAccountNameDesktop = document.querySelector(".user-name-desktop");
const userAccountNameMobile = document.querySelector(".user-name-mobile");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    registerContainer.style.display = "none";
    const userName = userNameInput.value

    //for noti message
    notiMessage.innerHTML = `Hello, <span class="fw-bold">${userName}</span>  .  .  . <br />
    Thanks for using Music Box and hope you enjoy this.
    <br />
    Have a nice day.`

    //for desktop user account name
    userAccountNameDesktop.innerHTML = `${userName}`;


    //for mobile user account name
    userAccountNameMobile.innerHTML = `${userName}`;

});
