// Define a hands array with the values 'rock', 'paper', and 'scissors';
const hands = ['rock', 'paper', 'scissors'];

// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
function getHand(a, b, c){
    variable = parseInt((Math.random((a, b, c))*10)%3)
    if (variable === 0) {
        return hands[0]
    } else if (variable === 1) {
        return hands[1]
    } else {
        return hands[2]   
    }
};

// Define two objects for two players. Each player has name and getHand() properties.
let player1 = {
    name: 'Bob',
    getHand: getHand
};

let player2 = {
    name: 'Bill',
    getHand: getHand
};

// Define a function called playRound()
function playRound(player1, player2){
    // Takes two player objects as arguments
    // Gets hands from each
    const bobHand = player1.getHand();
    const billHand = player2.getHand();

    //Determines the winner
   
    if (bobHand === billHand) {
        console.log(`Bob played ${bobHand} and Bill played ${billHand}; It's a tie!`); //If its a tie, log the hands played and "it's a tie".
        return null; //Returns the winner object (null if no winner)
    } else if (
        (bobHand === 'rock' && billHand === 'scissors') ||
        (bobHand === 'paper' && billHand === 'rock') ||
        (bobHand === 'scissors' && billHand === 'paper')
    ) {
        console.log(`Bob played ${bobHand} and Bill played ${billHand}; ${player1.name} wins!`);  // Logs the hands played and name of the winner.
        return player1; //Returns the winner object (null if no winner)
    } else {
        console.log(`Bob played ${bobHand} and Bill played ${billHand}; ${player2.name} wins!`);  // Logs the hands played and name of the winner.
        return player2; //Returns the winner object (null if no winner)
    }
};

winner = playRound(player1, player2);



