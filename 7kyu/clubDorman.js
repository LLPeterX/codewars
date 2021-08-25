/* 
7kyu - Club Doorman
https://www.codewars.com/kata/5c563cb78dac1951c2d60f01/train/javascript
*/

function passTheDoorMan(word) {
  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) {
      return (word.toUpperCase().charCodeAt(i) - 64) * 3;
    }
  }
}

console.log(passTheDoorMan("lettuce"), 60);
console.log(passTheDoorMan("hill"), 36);
console.log(passTheDoorMan("apple"), 48);

// best
/*
const passTheDoorMan = w => ((w.match(/(.)\1/)[1]).charCodeAt(0) - 96) * 3
*/

/*
var passTheDoorMan = word => 3*(word.match(/(.)\1/)[1].charCodeAt()&31);
*/

/*
const passTheDoorMan = word =>
  (word.toLowerCase().match(/(\w)\1/)[1].charCodeAt() - 96) * 3;
*/