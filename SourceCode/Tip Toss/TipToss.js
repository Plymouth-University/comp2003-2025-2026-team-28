let power = 0;
let increasing = true;
let interval = null;

const powerBar = document.getElementById("power-bar");
const starts = document.getElementById("starts");
const result = document.getElementById("result");
document.getElementById("power-container").style.display = "none";


document.getElementById("starts").onclick = function () {
    document.getElementById("starts").innerHTML = "toss";
    document.getElementById("power-container").style.display = "block";


    // Toss button stops the bar
    starts.onclick = () => {
    clearInterval(interval);

    if (power < 30) {
        result.innerHTML = "Weak Toss!";
    } else if (power < 70) {
        result.innerHTML = "Nice Toss!";
    } else {
        result.innerHTML = "perfect Toss!";
    }

    starts.disabled = true;
    };
};


// Start power bar animation
interval = setInterval(() => {
    if (increasing) {
        power += 2;
        if (power >= 100) increasing = false;
    } else {
        power -= 2;
        if (power <= 0) increasing = true;
    }

    powerBar.style.height = power + "%";
}, 30);


document.getElementById("reset_button").onclick = function () {
    location.reload();
};
