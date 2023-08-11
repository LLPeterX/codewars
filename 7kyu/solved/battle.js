/* 
7kyu - Battle of the characters (Easy)
https://www.codewars.com/kata/595519279be6c575b5000016/train/javascript
*/


function battle(x, y) {
  const score = (str) => str.replace(/[^A-Z]/g, '').split('').reduce((s, v) => s + (v.charCodeAt() - 64), 0);
  return score(x) > score(y) ? x : score(y) > score(x) ? y : "Tie!";
}

console.log(score('AbCd'));
console.log(battle("AAA", "Z"), "Z", "Unfair fight!");
console.log(battle("ONE", "TWO"), "TWO", "Unfair fight!");
console.log(battle("ONE", "NEO"), "Tie!", "Unfair fight!");
console.log(battle("FOUR", "FIVE"), "FOUR", "Unfair fight!")