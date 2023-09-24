let n = +prompt("Input a total number of matches");
let matches = 0;
let max = 0;
let min = 0;
while (n > 0) {
    //player
    checkN();
    matches = +prompt(`You turn. Take ${min}-${max} matches`);
    calculateMatches();
    if (n <= 0) {
        alert("You won!");
        break;
    }

    //computer
    checkN();
    matches = 0;
    if (n >= 4) {
        while (matches < 3) {
            matches++;
            if ((n - matches) % 4 === 0) break;
        }
    } else {
        matches = Math.floor(Math.random() * max) + min;
    }
    alert(`My turn! I'm taking ${matches}`);
    calculateMatches();
    if (n <= 0) {
        alert("I won!");
        break;
    }
}


function calculateMatches() {
    n -= matches;
    alert(`${n} matches left`);
}

function checkN() {
    if (n === 2) {
        max = 2;
    }
    if (n === 1) {
        max = 1;
    } else {
        max = 3;
        min = 1;
    }
}