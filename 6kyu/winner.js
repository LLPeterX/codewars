/* 
6kyu - Simple card game
https://www.codewars.com/kata/53417de006654f4171000587/train/javascript
*/
//const cardValue = card => /\d/.test(card) ? +card : { T: 10, J: 11, Q: 12, K: 13, A: 14 }[card];

// function winner(deckSteve, deckJosh) {
//   const players = [0, 0];
//   const steveCards = deckSteve.map(cardValue);
//   const joshCards = deckJosh.map(cardValue);
//   for (let i = 0; i < steveCards.length; i++) {
//     if (steveCards[i] > joshCards[i]) players[0]++;
//     else if (steveCards[i] < joshCards[i]) players[1]++;
//   }
//   if (players[0] === players[1]) return "Tie";
//   return `${players[0] > players[1] ? 'Steve' : 'Josh'} wins ${Math.max(...players)} to ${Math.min(...players)}`;
// }

// second attemt
function winner(deckSteve, deckJosh) {
  const cards = '23456789TJQKA';
  const players = [0, 0];
  for (let i = 0; i < deckSteve.length; i++) {
    if (cards.indexOf(deckSteve[i]) > cards.indexOf(deckJosh[i])) players[0]++;
    else if (cards.indexOf(deckSteve[i]) < cards.indexOf(deckJosh[i])) players[1]++;
  }
  if (players[0] === players[1]) return "Tie";
  return `${players[0] > players[1] ? 'Steve' : 'Josh'} wins ${Math.max(...players)} to ${Math.min(...players)}`;
}

console.log(winner(['A', '7', '8'], ['K', '5', '9']), 'Steve wins 2 to 1');
console.log(winner(['T', '9'], ['T', '8']), 'Steve wins 1 to 0');