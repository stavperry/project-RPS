// psuedocode:
// I want to get a computer choice from rock/paper/or scissors.
// I want to input either rock/paper/or scissors.
// I want to compare it to what the computer choice is.
// if we have the same shape, we have a draw.
// if either of us has a shape that tramples the other, I want it to declare who won.

function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33) {
        return shape = "rock";
    } else if ((choice > 0.33) && (choice <= 0.66)) {
        return shape = "paper";
    } else {
        return shape = "scissors";
    }
}

// console.log(getComputerChoice()); /* test that the computer randomises a shape.

function getHumanChoice(myShape) {
    let userShape = prompt("Enter a shape").toLowerCase();
    return userShape
}

// console.log(getHumanChoice()); // checking function getHumanChoice works.

