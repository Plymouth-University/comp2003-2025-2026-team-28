console.log("External JS loaded!");

// disabled button 
document.getElementById("roll_Draw2").disabled = true;
document.getElementById("roll_Draw1").disabled = true;

// count down
var counter = 4;
var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= -1) {
     		clearInterval(interval);
        document.getElementById("time").innerHTML = "Go!";
        document.getElementById("roll_Draw2").disabled = false;
        document.getElementById("roll_Draw1").disabled = false;
        return;
    }else{
      console.log("Timer --> " + counter);
      document.getElementById("time").innerHTML = counter + " Seconds";
    }
}, 1000);

// player 1
document.getElementById("roll_Draw1").onclick = function () {

    document.getElementById("lls").innerHTML = "Player 1 wins!";

        // Disable the button completely
    document.getElementById("time").innerHTML = "";
    document.getElementById("roll_Draw1").disabled = true;
    document.getElementById("roll_Draw2").disabled = true;
};

// player 2
document.getElementById("roll_Draw2").onclick = function () {

    document.getElementById("lls").innerHTML = "Player 2 wins!";

    document.getElementById("time").innerHTML = "";
    document.getElementById("roll_Draw2").disabled = true;
    document.getElementById("roll_Draw1").disabled = true;
};

document.getElementById("reset_button").onclick = function () {
    location.reload();
};