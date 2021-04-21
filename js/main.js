const theme = document.querySelector(".theme-button");

function changeHandler() {
    const elements = document.querySelectorAll(".themed");
    const cardTheme = document.querySelectorAll(".card-theme");

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.classList.toggle("dark");  
    }

    for (let j = 0; j < cardTheme.length; j++) {
        const cardEelemnt = cardTheme[j];
        cardEelemnt.classList.toggle("light-grey");
    }

    if (theme.innerHTML == "Theme: Light") {
        theme.innerHTML = "Theme: Dark";
    }
    else theme.innerHTML = "Theme: Light";
}

theme.addEventListener("click", changeHandler);

setTimeout(function() {
    const current = new Date().getHours();
    if (current >= 12) {
        changeHandler();
    }
},0000);

