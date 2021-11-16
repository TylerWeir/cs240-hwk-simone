const URL = "http://cs.pugetsound.edu/~dchiu/cs240/api/simone/"
var running = false;
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

var playBtn = document.getElementById("play");
playBtn.addEventListener("click", function() {
    var numRounds = document.getElementById("rounds").value
    console.log("Lets play " + numRounds + " rounds of Simone");
    getStartSequence();
})


function GameLoop(){
    
}

async function getStartSequence(){
    try {
        let request = await axios.get("http://cs.pugetsound.edu/~dchiu/cs240/api/simone/?cmd=start");
        console.log(request.data);
    } catch (error) {
        console.log(error);
    }
}

/*
 * Makes the game play the specified color sequence.
 */
function playStartSequence(sequence) {

}