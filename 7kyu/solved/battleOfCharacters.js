/* 
7kyu - Battle of the characters (Medium)
https://www.codewars.com/kata/595e9f258b763bc2d2000032/train/javascript

Groups of characters decided to make a battle. Help them to figure out what group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

Rules:
*Each character has its own power:
  A = 1, B = 2, ... Y = 25, Z = 26
  a = 0.5, b = 1, ... y = 12.5, z = 13


*/

function battle(x, y) {
  const power = (str) => {
    return [...str].reduce((p, ch) => {
      let code = ch.charCodeAt();
      if (ch >= 'A' && ch <= 'Z') p += (code - 64);
      else if (ch >= 'a' && ch <= 'z') p += (code - 96) / 2;
      return p;
    }, 0);
  }
  let pwX = power(x), pwY = power(y);
  if (pwX === pwY) return "Tie!";
  return pwX > pwY ? x : y;
}

console.log(battle("One", "Two"), "Two");
console.log(battle("One", "Neo"), "One");
console.log(battle("One", "neO"), "Tie!");
console.log(battle("Foo", "BAR"), "Tie!");
console.log(battle("Four", "Five"), "Four");

// console.log('a'.charCodeAt());