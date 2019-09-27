// The specific letters that the user typed.
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var selectedLetter = [];
var losses = 0;
var chancesLeft = 9;
var wins = 0;


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function guesscounter() {
	document.querySelector("#chancesLeft").innerHTML = "Guesses Left: " + chancesLeft;
}

function usedLetters() {
	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + selectedLetter.join(' ');
}

guesscounter();

var restart = function() {
	chancesLeft = 9;
	selectedLetter = [];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

document.onkeyup = function(event) {
	chancesLeft--;

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	selectedLetter.push(userGuess);
	guesscounter();
	usedLetters();

	if (userGuess === computerGuess){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		restart();
	} 
	else if (chancesLeft === 0) {
		losses++;
		document.querySelector("#lose").innerHTML = "Loses: " + losses;
		restart();
	}
  };
