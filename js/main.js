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

const buttonTime = document.querySelector(".calculate-time");

function Time () {
    const disValue = document.querySelector(".distance-time").value;
    const spdValue = document.querySelector(".speed-time").value;
    const timValue = document.querySelector(".time-time");
    const disElement = document.querySelector(".dis-tim").value;
    const spdElement = document.querySelector(".spd-tim").value;
    const timElement = document.querySelector(".tim-tim").value;
    let som = "";

    if (disElement === "m" && spdElement === "m/min" && timElement === "min") {
        som = disValue / spdValue;
        timValue.value = som; 
    }
    else if (disElement === "m" && spdElement === "m/hr" && timElement === "min") {
        som = (disValue / spdValue) * 60;
        timValue.value = som;
    }
    else if (disElement === "m" && spdElement === "km/min" && timElement === "min") {
        som = (disValue / spdValue) * 0.001;
        timValue.value = som;
    }
    else if (disElement === "m" && spdElement === "km/h" && timElement === "min") {
        som = (disValue / spdValue) * 0.06;
        timValue.value = som;
    }
    else if (disElement === "m" && spdElement === "m/min" && timElement === "hr") {
        som = (disValue / spdValue) * 0.01666333;
        timValue.value = som; 
    }
    else if (disElement === "m" && spdElement === "m/hr" && timElement === "hr") {
        som = disValue / spdValue;
        timValue.value = som;
    }
    else if (disElement === "m" && spdElement === "km/min" && timElement === "hr") {
        som = (disValue / spdValue) * 0.00016667;
        timValue.value = som;
    }
    else if (disElement === "m" && spdElement === "km/h" && timElement === "hr") {
        som = (disValue / spdValue) * 0.001;
        timValue.value = som;
    }
    else if (disElement === "km" && spdElement === "m/min" && timElement === "min") {
        som = (disValue / spdValue) * 999.8;
        timValue.value = som;
    }
    else if (disElement === "km" && spdElement === "m/hr" && timElement === "min") {
        som = (disValue / spdValue) * 60000
        timValue.value = som;
    }
    else if (disElement === "km" && spdElement === "km/min" && timElement === "min") {
        som = disValue / spdValue;
        timValue.value = som;
    }
    else if (disElement === "km" && spdElement === "km/h" && timElement === "min") {
        som = (disValue / spdValue) * 60;
        timValue.value = som;
    }
    else if (disElement === "km" && spdElement === "m/min" && timElement === "hr") {
        som = (disValue / spdValue) * 16.663334;
        timValue.value = som;
    }
    else if (disElement === "km" && spdElement === "m/hr" && timElement === "hr") {
        som = (disValue / spdValue) * 1000;
        timValue.value = som;
    }
    else if (disElement === "km" && spdElement === "km/min" && timElement === "hr") {
        som = (disValue / spdValue) * 0.01666667;
        timValue.value = som;
    }
    else if (disElement === "km" && spdElement === "km/h" && timElement === "hr") {
        som = disValue / spdValue;
        timValue.value = som;
    }


}

buttonTime.addEventListener("click", Time);

const buttonSpeed = document.querySelector(".calculate-speed");

function Speed () {
    const disValue = document.querySelector(".distance-speed").value;
    const spdValue = document.querySelector(".speed-speed");
    const timValue = document.querySelector(".time-speed").value;
    const disElement = document.querySelector(".dis-spd").value;
    const spdElement = document.querySelector(".spd-spd").value;
    const timElement = document.querySelector(".tim-spd").value;
    let som = "";

    if (disElement === "m" && spdElement === "m/min" && timElement === "min") {
        som = (disValue / timValue) * 0.9998;
        spdValue.value = som; 
    }
    else if (disElement === "m" && spdElement === "m/hr" && timElement === "min") {
        som = (disValue / tmValue) * 60;
        spdValue.value = som;
    }
    else if (disElement === "m" && spdElement === "km/min" && timElement === "min") {
        som = (disValue / timValue) * 0.001;
        spdValue.value = som;
    }
    else if (disElement === "m" && spdElement === "km/h" && timElement === "min") {
        som = (disValue / timValue) * 0.06;
        spdValue.value = som;
    }
    else if (disElement === "m" && spdElement === "m/min" && timElement === "hr") {
        som = (disValue / timValue) * 0.01666333;
        spdValue.value = som; 
    }
    else if (disElement === "m" && spdElement === "m/hr" && timElement === "hr") {
        som = disValue / timValue;
        spdValue.value = som;
    }
    else if (disElement === "m" && spdElement === "km/min" && timElement === "hr") {
        som = (disValue / timValue) * 1.66666;
        spdValue.value = som;
    }
    else if (disElement === "m" && spdElement === "km/h" && timElement === "hr") {
        som = (disValue / timValue) * 0.001;
        spdValue.value = som;
    }
    else if (disElement === "km" && spdElement === "m/min" && timElement === "min") {
        som = (disValue / timValue) * 999.8;
        spdValue.value = som;
    }
    else if (disElement === "km" && spdElement === "m/hr" && timElement === "min") {
        som = (disValue / timValue) * 6000;
        spdValue.value = som;
    }
    else if (disElement === "km" && spdElement === "km/min" && timElement === "min") {
        som = disValue / timValue;
        spdValue.value = som;
    }
    else if (disElement === "km" && spdElement === "km/h" && timElement === "min") {
        som = (disValue / timValue) * 60;
        spdValue.value = som;
    }
    else if (disElement === "km" && spdElement === "m/min" && timElement === "hr") {
        som = (disValue / timValue) * 16.663334;
        spdValue.value = som;
    }
    else if (disElement === "km" && spdElement === "m/hr" && timElement === "hr") {
        som = (disValue / timValue) * 1000;
        spdValue.value = som;
    }
    else if (disElement === "km" && spdElement === "km/min" && timElement === "hr") {
        som = (disValue / timValue) * 0.01666667;
        spdValue.value = som;
    }
    else if (disElement === "km" && spdElement === "km/h" && timElement === "hr") {
        som = disValue / timValue;
        spdValue.value = som;
    }
}

buttonSpeed.addEventListener("click", Speed);

const buttonDistance = document.querySelector(".calculate-distance");

function Distance () {
    const disValue = document.querySelector(".distance-distance");
    const spdValue = document.querySelector(".speed-distance").value;
    const timValue = document.querySelector(".time-distance").value;
    const disElement = document.querySelector(".dis-dis").value;
    const spdElement = document.querySelector(".spd-dis").value;
    const timElement = document.querySelector(".tim-dis").value;
    let som = "";

    if (disElement === "m" && spdElement === "m/min" && timElement === "min") {
        som = timValue * spdValue;
        disValue.value = som; 
    }
    else if (disElement === "m" && spdElement === "m/hr" && timElement === "min") {
        som = (timValue * spdValue) * 60;
        disValue.value = som;
    }
    else if (disElement === "m" && spdElement === "km/min" && timElement === "min") {
        som = (timValue * spdValue) * 0.001;
        disValue.value = som;
    }
    else if (disElement === "m" && spdElement === "km/h" && timElement === "min") {
        som = (timValue * spdValue) * 0.06;
        disValue.value = som;
    }
    else if (disElement === "m" && spdElement === "m/min" && timElement === "hr") {
        som = (timValue * spdValue) * 0.01666333;
        disValue.value = som; 
    }
    else if (timElement === "m" && spdElement === "m/hr" && timElement === "hr") {
        som = disValue * spdValue;
        disValue.value = som;
    }
    else if (timElement === "m" && spdElement === "km/min" && timElement === "hr") {
        som = (disValue * spdValue) * 0.00016667;
        disValue.value = som;
    }
    else if (timElement === "m" && spdElement === "km/h" && timElement === "hr") {
        som = (disValue * spdValue) * 0.001;
        disValue.value = som;
    }
    else if (disElement === "km" && spdElement === "m/min" && timElement === "min") {
        som = (timValue * spdValue) * 999.8;
        disValue.value = som;
    }
    else if (disElement === "km" && spdElement === "m/hr" && timElement === "min") {
        som = (timValue * spdValue) * 60000
        disValue.value = som;
    }
    else if (disElement === "km" && spdElement === "km/min" && timElement === "min") {
        som = timValue * spdValue;
        disValue.value = som;
    }
    else if (disElement === "km" && spdElement === "km/h" && timElement === "min") {
        som = (timValue * spdValue) * 60;
        disValue.value = som;
    }
    else if (disElement === "km" && spdElement === "m/min" && timElement === "hr") {
        som = (timValue * spdValue) * 16.663334;
        disValue.value = som;
    }
    else if (disElement === "km" && spdElement === "m/hr" && timElement === "hr") {
        som = (timValue * spdValue) * 1000;
        disValue.value = som;
    }
    else if (disElement === "km" && spdElement === "km/min" && timElement === "hr") {
        som = (timValue * spdValue) * 0.01666667;
        disValue.value = som;
    }
    else if (disElement === "km" && spdElement === "km/h" && timElement === "hr") {
        som = timValue * spdValue;
        disValue.value = som;
    }
}

buttonDistance.addEventListener("click", Distance);

