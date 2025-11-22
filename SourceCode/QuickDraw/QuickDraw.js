console.log("External JS loaded!");

// player 1
document.getElementById("roll_Draw1").onclick = function () {

    document.getElementById("lls").innerHTML = "Player 1 wins!";

        // Disable the button completely
    document.getElementById("roll_Draw1").disabled = true;
    document.getElementById("roll_Draw2").disabled = true;


    checkWinner();
};

// player 2
document.getElementById("roll_Draw2").onclick = function () {

    document.getElementById("lls").innerHTML = "Player 2 wins!";


    document.getElementById("roll_Draw2").disabled = true;
    document.getElementById("roll_Draw1").disabled = true;


    checkWinner();
};

// // Function to check the winner
// function checkWinner() {
//     if (num1 !== null && num2 !== null) { // Only run when both players have rolled
//         if (num1 > num2) {
//             document.getElementById("lls").innerHTML = "Player 1 wins!";
//         } else if (num2 > num1) {
//             document.getElementById("lls").innerHTML = "Player 2 wins!";
//         } else {
//             document.getElementById("lls").innerHTML = "It's a draw! Try again.";
//         }
//     }
// }


document.getElementById("reset_button").onclick = function () {
    location.reload();

};

