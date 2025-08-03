var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png"; // e.g., dice3.png
var randomImageSource = "images/" + randomDiceImage; // e.g., images/dice3.png
document.querySelector(".img1").setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber2 + ".png"; // e.g., dice3.png
var randomImageSource = "images/" + randomDiceImage; // e.g., images/dice3.png
document.querySelector(".img2").setAttribute("src", randomImageSource);

document.querySelector("h1").innerHTML = (randomNumber1 > randomNumber2) ? "🚩 Player 1 Wins!" : (randomNumber2 > randomNumber1) ? "Player 2 Wins! 🚩" : "Draw!";