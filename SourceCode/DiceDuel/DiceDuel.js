// Global variables to store the dice rolls
let rollNumber = null;
// let num2 = null;
let player_Name = "";
// player name variabl: player_Name
// player score variabl: rollNumber


document.getElementById("playerNameButton").onclick = function () {
    player_Name = document.getElementById("playerName").value;

    if (player_Name.trim() === "") {
        alert("Enter a name first!");
        return;
    }
    // console.log("Player 1:", player_Name);
    document.getElementById("playerNameInput").innerHTML = player_Name + ":";
    document.getElementById("playerName").remove();
    document.getElementById("playerNameButton").remove();
};

    // update so it looks like you're rolling dice 
let rolling1 = setInterval(() => {
    document.getElementById("Number_output1").innerHTML =
        Math.floor(Math.random() * 6) + 1;
}, 100); // s 0.1

// let rolling2 = setInterval(() => {
//     document.getElementById("Number_output2").innerHTML =
//         Math.floor(Math.random() * 6) + 1;
// }, 100); // s 0.1

    // to roll the dice's
// player 1
document.getElementById("roll_button1").onclick = function () {
    // Roll dice for player 1
    rollNumber = Math.floor(Math.random() * 6) + 1;
    // Display results
    document.getElementById("Number_output1").innerHTML = rollNumber;
    // Disable the button completely
    document.getElementById("roll_button1").disabled = true;
    clearInterval(rolling1);
    checkWinner();
};

// // player 2
// document.getElementById("roll_button2").onclick = function () {
//     num2 = Math.floor(Math.random() * 6) + 1;
//     document.getElementById("Number_output2").innerHTML = num2;
//     document.getElementById("roll_button2").disabled = true;
//     clearInterval(rolling2);
//     checkWinner();
// };

    // Function to check the winner
// function checkWinner() {
//     if (rollNumber !== null && num2 !== null) { // Only run when both players have rolled
//         if (rollNumber > num2) {
//             document.getElementById("results").innerHTML = "Player 1 wins!";
//         } else if (num2 > rollNumber) {
//             document.getElementById("results").innerHTML = "Player 2 wins!";
//         } else {
//             document.getElementById("results").innerHTML = "It's a draw! Try again.";
//         }
//     }
// }

document.getElementById("reset_button").onclick = function () {
    location.reload();
};

