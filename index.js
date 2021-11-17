const URL = "http://cs.pugetsound.edu/~dchiu/cs240/api/simone/"
const BTN_DURATION = 150;
//request solution
//http://cs.pugetsound.edu/~dchiu/cs240/api/simone/?cmd=getSolution&rounds=4

//request start
//http://cs.pugetsound.edu/~dchiu/cs240/api/simone/?cmd=start


// EVENT LISTENERS
// Red
var redSq = document.getElementById("redSq");
redSq.addEventListener("click", function() {
    console.log("Clicked Red");
});
redSq.addEventListener("mousedown", function() {
    redSq.classList.add('lightred');
});
redSq.addEventListener("mouseup", function() {
    redSq.classList.remove('lightred');
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
    console.log("Clicked Blue");
});
blueSq.addEventListener("mousedown", function() {
    blueSq.classList.add('lightblue');
});
blueSq.addEventListener("mouseup", function() {
    blueSq.classList.remove('lightblue');
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
    console.log("Clicked Green");
});
greenSq.addEventListener("mousedown", function() {
    greenSq.classList.add('lightgreen');
});
greenSq.addEventListener("mouseup", function() {
    greenSq.classList.remove('lightgreen');
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
    console.log("Clicked Yellow");
});
yellowSq.addEventListener("mousedown", function() {
    yellowSq.classList.add('lightyellow');
});
yellowSq.addEventListener("mouseup", function() {
    yellowSq.classList.remove('lightyellow');
});
yellowSq.addEventListener("mouseover", function() {
    yellowSq.classList.add('hover');
})
yellowSq.addEventListener("mouseleave", function() {
    yellowSq.classList.remove('hover');
})

// Play Button
var playBtn = document.getElementById("play");
playBtn.addEventListener("click", function() {
    var numRounds = document.getElementById("rounds").value
    GameLoop();
})


function GameLoop(){
    console.log("Playing");
    PlayStartSequence();


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

        // Play each button BTN_DURATION ms apart
        let i = sequence.length;
        let j = 0;
        function delayLoop() {
            setTimeout(function() {
                play(sequence[j]);
                j++
                if (j < i) {
                    delayLoop();
                }
            }, BTN_DURATION)
        }

        delayLoop();

    } catch (error) {
        console.log(error);
    }
}

/**
 * Makes the specified button light up for BTN_DURATION seconds. 
 * @param {*} button A
 */
function play(button) {
    switch(button) {
        case "R":
            redSq.classList.add('lightred');
            //playsound
            setTimeout(function() {
                redSq.classList.remove('lightred');
            }, BTN_DURATION);
            break;
        case "G":
            greenSq.classList.add('lightgreen');
            setTimeout(function() {
                greenSq.classList.remove('lightgreen');
            }, BTN_DURATION);
            break;
        case "B":
            blueSq.classList.add('lightblue');
            setTimeout(function() {
                blueSq.classList.remove('lightblue');
            }, BTN_DURATION);
            break;
        case "Y":
            yellowSq.classList.add('lightyellow');
            setTimeout(function() {
                yellowSq.classList.remove('lightyellow');
            }, BTN_DURATION);
            break;
    }
}