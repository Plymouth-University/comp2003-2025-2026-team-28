console.log("External JS loaded!");

// Global variables to store the dice rolls
let num1 = null;
let num2 = null;

// player 1
document.getElementById("roll_button1").onclick = function () {
    // Roll dice for player 1
    num1 = Math.floor(Math.random() * 6) + 1;
    // Display results
    document.getElementById("Number_output1").innerHTML = num1;
        // Disable the button completely
    document.getElementById("roll_button1").disabled = true;

    checkWinner();
};

// player 2
document.getElementById("roll_button2").onclick = function () {
    num2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("Number_output2").innerHTML = num2;
    document.getElementById("roll_button2").disabled = true;

    checkWinner();
};

// Function to check the winner
function checkWinner() {
    if (num1 !== null && num2 !== null) { // Only run when both players have rolled
        if (num1 > num2) {
            document.getElementById("lls").innerHTML = "Player 1 wins!";
        } else if (num2 > num1) {
            document.getElementById("lls").innerHTML = "Player 2 wins!";
        } else {
            document.getElementById("lls").innerHTML = "It's a draw! Try again.";
        }
    }
}


document.getElementById("reset_button").onclick = function () {
    location.reload();

};

