/* 
8kyu - Finish Guess the Number Game
https://www.codewars.com/kata/568018a64f35f0c613000054/train/javascript

If the user tries to guess more than the limit, the function should throw an error.
If the user guess is right it should return true.
If the user guess is wrong it should return false and lose a life.
*/

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (!this.lives) throw 'No guesses left';
    if (n === this.number) return true;
    this.lives--;
    return false;
  }
}
