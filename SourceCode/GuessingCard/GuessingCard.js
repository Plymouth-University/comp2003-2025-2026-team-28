    // update so it looks like you're rolling dice 
let rolling1 = setInterval(() => {
    document.getElementById("AIGuess").innerHTML =
        Math.floor(Math.random() * 6) + 1;
}, 100); // s 0.1

    // to roll the dice's
// player 1
document.getElementById("Player1Button").onclick = function () {
    // Roll dice for player 1
    rollNumber = Math.floor(Math.random() * 6) + 1;
    // Display results
    document.getElementById("AIGuess").innerHTML = rollNumber;
    // Disable the button completely
    document.getElementById("Player1Button").disabled = true;
    clearInterval(rolling1);
    checkWinner();
};