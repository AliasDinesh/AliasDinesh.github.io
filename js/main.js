const theme = document.querySelector(".theme-button");

function changeHandler() {
    const elements = document.querySelectorAll(".themed");

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.classList.toggle("dark");

        if (theme.innerHTML == "Theme: Light") {
            theme.innerHTML = "Theme: Dark";
        }
        else theme.innerHTML = "Theme: Light";        
    }
}

theme.addEventListener("click", changeHandler);

setTimeout(function() {
    const current = new Date().getHours();
    if (current >= 2) {
        changeHandler();
    }
},0000);

