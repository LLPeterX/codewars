/* 
7kyu - Rock Paper Scissors Lizard Spock
https://www.codewars.com/kata/57d29ccda56edb4187000052/train/javascript

According to Sheldon Cooper the following is true:

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
( and as it always has ) Rock crushes Scissors
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!" or "Draw!".
*/

function rpsls(pl1, pl2) {
  const game = {
    "scissors": ["paper", "lizard"],
    "paper": ["rock", "spock"],
    "lizard": ["spock", "paper"],
    "rock": ["scissors", "lizard"],
    "spock": ["scissors", "rock"]
  };
  if (pl1 === pl2) return "Draw!";
  return (game[pl1].includes(pl2)) ? "Player 1 Won!" : "Player 2 Won!";
}

console.log(rpsls('rock', 'lizard'), 'Player 1 Won!');
console.log(rpsls('paper', 'rock'), 'Player 1 Won!');
console.log(rpsls('scissors', 'lizard'), 'Player 1 Won!');
console.log(rpsls('lizard', 'paper'), 'Player 1 Won!');
console.log(rpsls('spock', 'rock'), 'Player 1 Won!');

console.log(rpsls('lizard', 'scissors'), 'Player 2 Won!');
console.log(rpsls('spock', 'lizard'), 'Player 2 Won!');
console.log(rpsls('paper', 'lizard'), 'Player 2 Won!');
console.log(rpsls('scissors', 'spock'), 'Player 2 Won!');
console.log(rpsls('rock', 'spock'), 'Player 2 Won!');

console.log(rpsls('rock', 'rock'), 'Draw!');
console.log(rpsls('spock', 'spock'), 'Draw!');
