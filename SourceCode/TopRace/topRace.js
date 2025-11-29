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

document.getElementById("playerNameButton").onclick = function () {
    player_Name = document.getElementById("playerName").value;

    if (player_Name.trim() === "") {
        alert("Enter a name first!");
        return;
    }

    document.getElementById("playerNameInput").innerHTML = player_Name + ":";
    document.getElementById("playerName").remove();
    document.getElementById("playerNameButton").remove();

    // ⭐ Start the countdown AFTER the name is entered
    startFirstCountdown();
};

// Disable buttons at start
document.getElementById("tapButton").disabled = true;
document.getElementById("reset_button").disabled = true;

// FIRST COUNTDOWN (runs only after name is entered)
function startFirstCountdown() {
    var Timecounter = 4;

    var interval1 = setInterval(function() {
        Timecounter--;

        if (Timecounter <= -1) {
            clearInterval(interval1);

            document.getElementById("time").innerHTML = "Go!";
            document.getElementById("tapButton").disabled = false;
            document.getElementById("reset_button").disabled = false;

            startSecondCountdown();
        } else {
            document.getElementById("time").innerHTML = Timecounter + " Seconds";
        }
    }, 1000);
}

// SECOND COUNTDOWN
function startSecondCountdown() {
    var TimecounterUp = 11;

    var interval2 = setInterval(function() {
        TimecounterUp--;

        if (TimecounterUp <= -1) {
            clearInterval(interval2);

            document.getElementById("time").innerHTML = "";
            document.getElementById("tapButton").disabled = true;
            num1 = parseInt(document.getElementById("output").innerHTML);
            checkWinner();
        } else {
            document.getElementById("time").innerHTML = 
                "You have " + TimecounterUp + " Seconds";
        }
    }, 1000);
}
