const URL = "http://cs.pugetsound.edu/~dchiu/cs240/api/simone/"


// EVENT LISTENERS
var redSq = document.getElementById("redSq");
redSq.addEventListener("click", function() {
    console.log("Clicked Red");
});

var blueSq = document.getElementById("blueSq");
blueSq.addEventListener("click", function() {
    console.log("Clicked Blue");
});

var greenSq = document.getElementById("greenSq");
greenSq.addEventListener("click", function() {
    console.log("Clicked Green");
});

var yellowSq = document.getElementById("yellowSq");
yellowSq.addEventListener("click", function() {
    console.log("Clicked Yellow");
});

var playBtn = document.getElementById("play");
playBtn.addEventListener("click", function() {
    var numRounds = document.getElementById("rounds").value
    console.log("Lets play " + numRounds + " rounds of Simone");
})