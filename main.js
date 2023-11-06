// set date
var currentDate = new Date();
var day = currentDate.getDate();
var month = (currentDate.getMonth() + 1);
var year = currentDate.getFullYear();
var formattedDate = day + "/" + month + "/" + year
document.getElementById("currentDate").innerText = formattedDate

// get random int
var seed = currentDate.getFullYear() * 10000 + (currentDate.getMonth() + 1) * 100 + currentDate.getDate();
function getRandomInt(min, max) {
    var x = Math.sin(seed++) * 10000;
    return Math.floor((x - Math.floor(x)) * (max - min + 1)) + min;
}

// Replace Response
var confirmOutput = [
    "Success!",
    "Perfect!",
    "Bullseye!",
    "On target!",
    "Achieved!",
    "Excellent!",
    "Bravo!",
    "Superb!",
    "Impressive!",
    "Magnificent!",
    "Aces!"
  ];

var denyOutput = [
    "No!",
    "Oops!",
    "Missed it!",
    "Not quite!",
    "Close, but no cigar!",
    "Not this time!",
    "Next time for sure!",
    "Fate intervened!",
    "Just shy of it!",
    "Almost nailed it!"
  ];

// Check if variable is active & replace
function isVarActive(variable, percentInt) {
    var roofNumber = 100 / percentInt
    if (getRandomInt(1, roofNumber) === 1) {
        let confirmation = confirmOutput[getRandomInt(0, confirmOutput.length - 1)]

        let targetElement = document.getElementById(variable)
        targetElement.textContent = confirmation
        targetElement.style.color = "#27E312"
    }
    else {
    let deny = denyOutput[getRandomInt(0, denyOutput.length - 1)]
    let targetElement = document.getElementById(variable)
    targetElement.textContent = deny
    }
}

var usedIndices = [];


isVarActive("music", 50);
isVarActive("drink", 15);
isVarActive("share", 20);