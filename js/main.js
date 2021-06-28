let darkMode = localStorage.getItem("dark-mode");
const themeButton = document.querySelector(".theme-button");
const cardTheme = document.querySelectorAll(".card-theme");
const prjLinks = document.querySelectorAll(".projects-links");

//Enable dark mode function
function enableDarkMode() {
    document.body.classList.add("dark");

    for (let i = 0; i < cardTheme.length; i++) {
        const cardEelemnt = cardTheme[i];
        cardEelemnt.classList.add("light-grey");
    }

    localStorage.setItem("dark-mode", "enabled");
};

//Disable dark mode function
function disableDarkMode() {
    document.body.classList.remove("dark");

    for (let i = 0; i < cardTheme.length; i++) {
        const cardEelemnt = cardTheme[i];
        cardEelemnt.classList.remove("light-grey");
    }

    localStorage.setItem("dark-mode", null);
};

//This if-statement checks if darkmode is already enabled so when you change from pages or if you closed the webpage and opened it again, dark mode stays on
if (darkMode === "enabled") {
    enableDarkMode();
}

//This addEventListener enables dark mode or disables it
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

//This setTimeout checks if it's 6oclock or higher in the afternoon, then dark mode would be enabled
setTimeout(() => {
    const current = new Date().getHours();
    if (current >= 6) {
        enableDarkMode();
    } 
},1000);

console.log('File loaded');

