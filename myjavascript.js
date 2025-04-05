function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33) {
        return shape = "Rock";
    } else if ((choice > 0.33) && (choice <= 0.66)) {
        return shape = "Paper";
    } else {
        return shape = "Scissors";
    }
}

console.log(getComputerChoice());