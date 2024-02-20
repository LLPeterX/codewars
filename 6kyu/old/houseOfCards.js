/* 
6kyu - House of cards
https://www.codewars.com/kata/543abbc35f0461d28f000c11/train/javascript
*/

function houseOfCards(floors) {
  if (!Number.isInteger(floors) || floors < 1) throw new Error();
  return floors * (floors + 1) / 2 + (floors + 1) * ((floors + 2));
  //  return (1.5 * floors + 2) * (floors + 1)
}

console.log(houseOfCards(1), 7);
console.log(houseOfCards(2), 15);
console.log(houseOfCards(3), 26);
console.log(houseOfCards(6), 77);
console.log(houseOfCards(15), 392);