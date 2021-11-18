/**
 * Simone memory game.
 * by Tyler Weir
 */

const axios = require('axios');

// Global State variables
var round = -1;
var guess = 0;
var sequence = [];
var playNextRound = 0;


// EVENT LISTENERS
function initButtons () {
	// Red
	var redSq = document.getElementById("redSq");
	redSq.addEventListener("click", function() {
	});
	redSq.addEventListener("mousedown", function() {
		redSq.classList.add('lightred');
	});
	redSq.addEventListener("mouseup", function() {
		redSq.classList.remove('lightred');
		game("R");
		(new Audio("sounds/red.wav")).play();
	});
	redSq.addEventListener("mouseover", function() {
		redSq.classList.add('hover');
	})
	redSq.addEventListener("mouseleave", function() {
		redSq.classList.remove('hover');
	})

	// Blue
	var blueSq = document.getElementById("blueSq");
	blueSq.addEventListener("click", function() {
	});
	blueSq.addEventListener("mousedown", function() {
		blueSq.classList.add('lightblue');
	});
	blueSq.addEventListener("mouseup", function() {
		blueSq.classList.remove('lightblue');
		game("B");
		(new Audio("sounds/blue.wav")).play();
	});
	blueSq.addEventListener("mouseover", function() {
		blueSq.classList.add('hover');
	})
	blueSq.addEventListener("mouseleave", function() {
		blueSq.classList.remove('hover');
	})

	// Green
	var greenSq = document.getElementById("greenSq");
	greenSq.addEventListener("click", function() {
	});
	greenSq.addEventListener("mousedown", function() {
		greenSq.classList.add('lightgreen');
	});
	greenSq.addEventListener("mouseup", function() {
		game("G");
		greenSq.classList.remove('lightgreen');
		(new Audio("sounds/green.wav")).play();
	});
	greenSq.addEventListener("mouseover", function() {
		greenSq.classList.add('hover');
	})
	greenSq.addEventListener("mouseleave", function() {
		greenSq.classList.remove('hover');
	})

	// Yellow
	var yellowSq = document.getElementById("yellowSq");
	yellowSq.addEventListener("click", function() {
	});
	yellowSq.addEventListener("mousedown", function() {
		yellowSq.classList.add('lightyellow');
	});
	yellowSq.addEventListener("mouseup", function() {
		yellowSq.classList.remove('lightyellow');
		game("Y");
		(new Audio("sounds/yellow.wav")).play();
	});
	yellowSq.addEventListener("mouseover", function() {
		yellowSq.classList.add('hover');
	})
	yellowSq.addEventListener("mouseleave", function() {
		yellowSq.classList.remove('hover');
	})
}

// Play Button
var playBtn = document.getElementById("play");
playBtn.addEventListener("click", function() {
    var numRounds = document.getElementById("rounds").value
    startGame(numRounds);
})


/**
 * Plays the start sequence then starts up the game loop.
 */
async function startGame(numRounds){
	// Setup the game
    PlayStartSequence();
	initButtons();
	
	// Fetch the sequnce from the API
	try {
		let request = await axios.get("http://cs.pugetsound.edu/~dchiu/cs240/api/simone/?cmd=getSolution&rounds=" + numRounds);
		let solution = request.data['key'];
		sequence = solution;

		// Wait gap before starting the game.
		setTimeout(function() {
			playNextRound = 1;	
			game();
		}, 4000)

	} catch (error) {
		console.log(error);
	}
}

/**
 * State is kept in global variables.  This function is called by button presses.
 */
function game(button) {

	if(playNextRound == 1){
		// Play the next round sequence
		// Update State
		playNextRound = 0;
		round++;
		
		playSequence(sequence.slice(0, round+1), 400);

	}

	// Do nothing if the game hasn't started.
	if(round == -1 || button == null) { 
		return;
	}
	
	if(button == sequence[guess]){
		// Correct guess
		guess++;
		updateStatus();
	} else {
		// Incorrect guess

		(new Audio("sounds/wrong.wav")).play();
		message = document.getElementById("status");
		message.innerHTML = "Incorrect, you lose!";
		document.body.style.background = "hotpink";
		setTimeout(function() {
			(new Audio("sounds/lose.wav")).play();
		}, 300);
		round = -1;
		return;
	}

	if(guess > round) { 
		// Finished the round!
		guess = 0;
		playNextRound = 1;
		
		if (round+1 >= sequence.length) {
			// Dectects a win
			(new Audio("sounds/win.mp3")).play();
			document.body.style.background = "DeepSkyBlue";
			message = document.getElementById("status");
			message.innerHTML = "Yay you win!";
			round = -1;
			return;
		}
		
		(new Audio("sounds/nextRound.wav")).play();
		setTimeout(function() {
			message = document.getElementById("status");
			message.innerHTML = "Round " + (round+2) + " out of " + sequence.length ;
			game();
		}, 800)
	}
}

/**
 * Handles displaying the guesses left to the user.
 */
function updateStatus() {
	message = document.getElementById("status");
	x = round+1 - guess;
	if (x == 0) { 
		message.innerHTML = "Good job! Prepare for the next round.";
	} else {
		message.innerHTML = "So far so good! " + (round+1 - guess) + " more to go!"; 
	}
}

/**
 *  Calls the server to get the start sequence. Then plays the
 *  start sequence.  
 */
async function PlayStartSequence(){
    // Get the play sequence from the API
    try {
        let request = await axios.get("http://cs.pugetsound.edu/~dchiu/cs240/api/simone/?cmd=start");
        let sequence = request.data['sequence'];
		playSequence(sequence, 120);

    } catch (error) {
        console.log(error);
    }
}

/**
 * Plays a sequence of buttons duration apart
 */
async function playSequence(sequence, duration) {
	// Play each button duration ms apart
	let i = sequence.length;
	let j = 0;
	function delayLoop() {
		setTimeout(function() {
			play(sequence[j], duration);
			j++
			if (j < i) {
				delayLoop();
			}
		}, duration)
	}
	delayLoop();
}


/**
 * Makes the specified button light up for BTN_DURATION seconds. 
 * @param {*} button 
 * @param {*} duration
 */
function play(button, duration) {
    switch(button) {
        case "R":
            redSq.classList.add('lightred');
			(new Audio("sounds/red.wav")).play();
            //playsound
            setTimeout(function() {
                redSq.classList.remove('lightred');
            }, duration);
            break;
        case "G":
            greenSq.classList.add('lightgreen');
			(new Audio("sounds/green.wav")).play();
            setTimeout(function() {
                greenSq.classList.remove('lightgreen');
            }, duration);
            break;
        case "B":
            blueSq.classList.add('lightblue');
			(new Audio("sounds/blue.wav")).play();
            setTimeout(function() {
                blueSq.classList.remove('lightblue');
            }, duration);
            break;
        case "Y":
            yellowSq.classList.add('lightyellow');
			(new Audio("sounds/yellow.wav")).play();
            setTimeout(function() {
                yellowSq.classList.remove('lightyellow');
            }, duration);
            break;
    }
}
