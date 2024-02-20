/* 
7kyu - PokerHelper lvl. 1
https://www.codewars.com/kata/5a5b6e0898e1379df700102c/train/javascript

*/

const cardValues = (h, f) => Object.values([...h, ...f].map(e => e.val).reduce((o, v) => { o[v] = (o[v] || 0) + 1; return o; }, {}));

const isPair = (hole, flop) => cardValues(hole, flop).some(n => n >= 2);
const isTwoPair = (hole, flop) => cardValues(hole, flop).filter(n => n == 2).length == 2;
const isSet = (hole, flop) => cardValues(hole, flop).some(n => n == 3);


// ----------- tests --------------

const hole = [
  { val: 'Ace', suit: 'Hearts' },
  { val: 'King', suit: 'Spades' }
];
const flop = [
  { val: 'Ace', suit: 'Spades' },
  { val: '10', suit: 'Hearts' },
  { val: 'Ace', suit: 'Clubs' },
];

console.log(isPair(hole, flop), true);
console.log(isTwoPair(hole, flop), false);
console.log(isSet(hole, flop), true);