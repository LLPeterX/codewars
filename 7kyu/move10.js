/* 
7kyu - Move 10
https://www.codewars.com/kata/57cf50a7eca2603de0000090/train/javascript

Переместить каждую букву строки на 10 позиций вперед по алфавиту.
*/

function moveTen(s) {
  return [...s].map(l => String.fromCharCode((l.charCodeAt() - 87) % 26 + 97)).join``;
}

console.log(moveTen("testcase"), "docdmkco");
console.log(moveTen("codewars"), "mynogkbc");
console.log(moveTen("exampletesthere"), "ohkwzvodocdrobo");

// best

/* 
const moveTen = s =>
  s.replace(/./g, val => String.fromCharCode(97 + (val.charCodeAt() - 87 ) % 26));
*/