var counter = 0;
var cUp = 0;

let num1 = null;
let num2 = null;

document.getElementById("tapButton").onclick = function () {
    document.getElementById("output").innerHTML = counter++;
};

document.getElementById("reset_button").onclick = function () {
    location.reload();
};

// Disable buttons at start
document.getElementById("tapButton").disabled = true;
document.getElementById("reset_button").disabled = true;

// FIRST COUNTDOWN
var Timecounter = 4;
var interval1 = setInterval(function() {
    Timecounter--;

    if (Timecounter <= -1) {
        clearInterval(interval1);

        document.getElementById("time").innerHTML = "Go!";
        document.getElementById("tapButton").disabled = false;
        document.getElementById("reset_button").disabled = false;

        startSecondCountdown(); // <-- start next timer here
        return;
    } else {
        document.getElementById("time").innerHTML = Timecounter + " Seconds";
    }
}, 1000);

// SECOND COUNTDOWN FUNCTION
function startSecondCountdown() {
    var TimecounterUp = 11;

    var interval2 = setInterval(function() {
        TimecounterUp--;

        if (TimecounterUp <= -1) {
            clearInterval(interval2);

            document.getElementById("time").innerHTML = "";
            document.getElementById("tapButton").disabled = true;
            num1 = parseInt(document.getElementById("output").innerHTML);
            num2 = parseInt(document.getElementById("output2").innerHTML);
            checkWinner()
            return;
        } else {
            document.getElementById("time").innerHTML = 
                "You have " + TimecounterUp + " Seconds";
            document.getElementById("output2").innerHTML = cUp++;

        }
    }, 1000);
}


function checkWinner() {
    if (num1 > num2) {
        document.getElementById("results").innerHTML = "Player 1 wins!";
    } else if (num2 > num1) {
        document.getElementById("results").innerHTML = "Player 2 wins!";
    } else {
        document.getElementById("results").innerHTML = "It's a draw! Try again.";
    }
}