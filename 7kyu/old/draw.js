/* 
7kyu - Playing Cards Draw Order – Part 1
https://www.codewars.com/kata/630647be37f67000363dff04/train/javascript
*/

const draw = (deck) => {
  const drawnCards = [], L = deck.length;
  while (drawnCards.length < L) {
    drawnCards.push(deck.shift());
    deck.push(deck.shift());
  }
  return drawnCards;
};


const deck = ["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"];
console.log(draw(deck));
