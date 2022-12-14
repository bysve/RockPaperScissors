function rockPaperScissors(playerTurn) {
    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';
    let computerRandomNumber = Math.round(Math.random() * 3) + 1;
    let computerMove;

    if (playerTurn == 'r' || playerTurn == 'Rock') {
        playerTurn = rock;
    } else if (playerTurn == 'p' || playerTurn == 'Paper') {
        playerTurn = paper;
    } else if (playerTurn == 's' || playerTurn == 'Scissors') {
        playerTurn = scissors;
    } else {
        console.log('Invalid output. Try again...');
    }
    console.log(`You choose ${playerTurn}`);

    switch (computerRandomNumber) {
        case 1: computerMove = rock; break;
        case 2: computerMove = paper; break;
        case 3: computerMove = scissors; break;
    }
    console.log(`The computer chooses ${computerMove}`);

    if ((playerTurn == rock && computerMove == rock) || (playerTurn == paper && computerMove == paper) ||
        (playerTurn == scissors && computerMove == scissors)) {
        console.log('\x1b[33mThis game was a draw!\x1b[0m');
    } else if ((playerTurn == rock && computerMove == scissors) || (playerTurn == paper && computerMove == rock) ||
        (playerTurn == scissors && computerMove == paper)) {
        console.log('\x1b[32mYou win!\x1b[0m'); // \x1b[32m''\x1b[0m - changes the color of the string.
    } else if ((playerTurn == rock && computerMove == paper) || (playerTurn == paper && computerMove == scissors) ||
        (playerTurn == scissors && computerMove == rock)) {
        console.log('\x1b[31mYou lose!\x1b[0m');
    }

}
rockPaperScissors(['r']);