// Define a hands array with the values 'rock', 'paper', and 'scissors';
const hands = ['rock', 'paper', 'scissors'];

// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
function getHand(){
    handVar = parseInt((Math.random()*10)%3)
    if (handVar === 0) {
        return hands[0]
    } else if (handVar === 1) {
        return hands[1]
    } else {
        return hands[2]   
    }
};

// Define two objects for two players. Each player has name and getHand() properties.
let player1 = {
    name: 'Bob',
    getHand
};

let player2 = {
    name: 'Bill',
    getHand
};

let player3 = {
    name: 'Itchy',
    getHand
}

let player4 = {
    name: 'Scratchy',
    getHand
}

// Define a function called playRound()
function playRound(player1, player2){
    // Takes two player objects as arguments
    // Gets hands from each
    let bobHand = player1.getHand();
    let billHand = player2.getHand();
    let itchyHand = player3.getHand;
    let scratchyHand = player4.getHand;

    

    //Determines the winner
   
    if (bobHand === billHand) {
        // console.log(`Bob played ${bobHand} and Bill played ${billHand}; It's a tie!`); //If its a tie, log the hands played and "it's a tie".
        roundWinner = null
        return roundWinner; //Returns the winner object (null if no winner)
    } else if (
        (bobHand === 'rock' && billHand === 'scissors') ||
        (bobHand === 'paper' && billHand === 'rock') ||
        (bobHand === 'scissors' && billHand === 'paper')
    ) {
        // console.log(`Bob played ${bobHand} and Bill played ${billHand}; ${player1.name} wins!`);  // Logs the hands played and name of the winner.
        roundWinner = player1
        return roundWinner; //Returns the winner object (null if no winner)
    } else {
        // console.log(`Bob played ${bobHand} and Bill played ${billHand}; ${player2.name} wins!`);  // Logs the hands played and name of the winner.
        roundWinner = player2
        return roundWinner; //Returns the winner object (null if no winner)
    }
};



function playGame(player1, player2, playUntil, player1WinCounter = 0, player2WinCounter = 0) {
    let gameWinner;
  
    const roundWinner = playRound(player1, player2);
  
    if (roundWinner == player1) {
      player1WinCounter++;
    } else if (roundWinner == player2) {
      player2WinCounter++;
    }
  
    if (player1WinCounter === playUntil) {
      console.log('Bob wins the game!');
      gameWinner = player1;
    } else if (player2WinCounter === playUntil) {
      console.log('Bill wins the game!');
      gameWinner = player2;
    } else {
      gameWinner = playGame(player1, player2, playUntil, player1WinCounter, player2WinCounter);
    }
  
    return gameWinner;
  }
gameWinner = playGame(player1, player2, 3);

function playtournament(player1, player2, player3, player4, playUntil) {
    let tournamentWinner;
  
    while (!tournamentWinner) {
      const roundWinner1 = playGame(player1, player2, playUntil);
      const roundWinner2 = playGame(player3, player4, playUntil);
  
      if (roundWinner1) {
        tournamentWinner = roundWinner1;
      } else {
        tournamentWinner = roundWinner2;
      }
    }
  
    return tournamentWinner;
  }
  
  const tournamentWinner = playtournament(player1, player2, player3, player4, 3);
  console.log(`${tournamentWinner.name} wins the tournament!`);



