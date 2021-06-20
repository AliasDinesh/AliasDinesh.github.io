let darkMode = localStorage.getItem("dark-mode");
const themeButton = document.querySelector(".theme-button");

function enableDarkMode() {
    document.body.classList.add("dark");
    const cardTheme = document.querySelectorAll(".card-theme");

    for (let i = 0; i < cardTheme.length; i++) {
        const cardEelemnt = cardTheme[i];
        cardEelemnt.classList.add("light-grey");
    }

    localStorage.setItem("dark-mode", "enabled");
};

function disableDarkMode() {
    document.body.classList.remove("dark");
    const cardTheme = document.querySelectorAll(".card-theme");

    for (let i = 0; i < cardTheme.length; i++) {
        const cardEelemnt = cardTheme[i];
        cardEelemnt.classList.remove("light-grey");
    }

    localStorage.setItem("dark-mode", null);
};

if (darkMode === "enabled") {
    enableDarkMode();
}

themeButton.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");

    if (darkMode !== "enabled"){
        enableDarkMode();
        themeButton.innerHTML = "Theme: Light"
    }
    else {
        disableDarkMode();
        themeButton.innerHTML = "Theme: Dark";
    }
});

setInterval(() => {
    const current = new Date().getHours();
    if (current >= 17) {
        enableDarkMode();
    }   

},0000);

