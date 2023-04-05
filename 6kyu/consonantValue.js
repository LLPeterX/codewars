/* 
6kyu - Consonant value
https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript

Given a lowercase string that has alphabetic characters only and no spaces, 
return the highest value of consonant substrings. 
Consonants are any letters of the alphabet except "aeiou".
*/

function solve(s) {
  return Math.max(...s.replace(/[aeiou]+/g, ',').split(',').map(x => [...x].reduce((sum, v) => sum + v.charCodeAt() - 96, 0)));
};

console.log(solve("zodiac"), 26);
console.log(solve("chruschtschov"), 80);
console.log(solve("khrushchev"), 38);
console.log(solve("strength"), 57);
console.log(solve("catchphrase"), 73);
console.log(solve("twelfthstreet"), 103);
console.log(solve("mischtschenkoana"), 80);

// best
/* 
// не надо создвать новый массив; просто использовать match()
function solve(s) {
  return Math.max(...s.match(/[^aeiou]+/g).map(x => [...x].reduce((s, v) => s + v.charCodeAt() - 96, 0)))
}
*/