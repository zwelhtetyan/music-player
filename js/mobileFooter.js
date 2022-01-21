const mobileHome = document.querySelector(".mobile-home");
const mobileSearch = document.querySelector(".mobile-search");
const mobileMusic = document.querySelector(".mobile-music");
const mobileUser = document.querySelector(".mobile-user");
const mobileMenuItem = document.querySelectorAll(".mobile-menu-item");

mobileMenuItem.forEach((menus) => {
    menus.addEventListener("click", () => {
        for (let i = 0; i < mobileMenuItem.length; i++) {
            const allMobileMenu = mobileMenuItem[i];
            allMobileMenu.style.color = "black";
        }
        menus.style.color = "#2196f3";
    });
}); // change blue when click and black to other;

mobileHome.addEventListener("click", () => {
    document.querySelector(".songs-and-artists").style.display = "block";
    document.querySelector(".search-box-mobile").style.display = "none";
});
mobileSearch.addEventListener("click", () => {
    document.querySelector(".songs-and-artists").style.display = "none";
    document.querySelector(".search-box-mobile").style.display = "block";
});

