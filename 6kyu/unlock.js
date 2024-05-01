/* 
6kyu - Mr. Safety's treasures
https://www.codewars.com/kata/592c1dfb912f22055b000099/train/javascript

ntroduction
Mr. Safety loves numeric locks and his Nokia 3310. 
He locked almost everything in his house. 
He is so smart and he doesn't need to remember the combinations. 
He has an algorithm to generate new passcodes on his Nokia cell phone.

Task
Can you crack his numeric locks? Mr. Safety's treasures wait for you. 
Write an algorithm to open his numeric locks. 
Can you do it without his Nokia 3310?

Output
Return a string that only consists of digits.
Example
unlock("Nokia") // => 66542 
unlock("Valut") // => 82588 
unlock("toilet") // => 864538
*/

//           0    1    2      3      4      5      6      7       8      9
const d2l = [" ", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

function unlock(str) {
  return [...str.toLowerCase()].map(
    (c) => "2223334445556667777888999"[c.charCodeAt() - 97],
  ).join``;
}

console.log(unlock("Nokia"), "66542");
console.log(unlock("Valut"), "82588");
console.log(unlock("toilet"), "864538");

console.log(unlock("izoWOiO"), "4969646");
