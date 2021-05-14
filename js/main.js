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
    }
    else {
        disableDarkMode();
    }

    if (themeButton.innerHTML == "Theme: Light") {
        themeButton.innerHTML = "Theme: Dark";
    }
    else {
        themeButton.innerHTML = "Theme: Light";
    }

});

/*setTimeout(function() {
    const current = new Date().getHours();
    if (current >= 10) {
        enableDarkMode();
    }
    
},0000);
*/
