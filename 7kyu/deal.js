/* 
7kyu - FreeCell Deal Generator
https://www.codewars.com/kata/64eca9a7bc3127082b0bc7dc/train/javascript


*/

const DECK = ['AC', 'AD', 'AH', 'AS', '2C', '2D', '2H', '2S', '3C', '3D', '3H', '3S', '4C', '4D', '4H', '4S', '5C', '5D', '5H', '5S', '6C', '6D', '6H', '6S', '7C', '7D', '7H', '7S', '8C', '8D', '8H', '8S', '9C', '9D', '9H', '9S', 'TC', 'TD', 'TH', 'TS', 'JC', 'JD', 'JH', 'JS', 'QC', 'QD', 'QH', 'QS', 'KC', 'KD', 'KH', 'KS'];

/*
function deal(n) {
  let deck = [...DECK], result = [];
  while (deck.length) {
    n = (n * 214013 + 2531011) % (2 ** 31);
    let random = Math.floor(n / (2 ** 16));
    let cardIndex = random % deck.length;
    if (cardIndex !== deck.length - 1) {
      [deck[cardIndex], deck[deck.length - 1]] = [deck[deck.length - 1], deck[cardIndex]];
    }
    result.push(deck.pop());
  }
  return result;
}
*/

// simplified:
function deal(n) {
  let deck = [...DECK], result = [];
  while (deck.length) {
    n = (n * 214013 + 2531011) % (2 ** 31);
    let cardIndex = Math.floor(n / (2 ** 16)) % deck.length;
    if (cardIndex !== deck.length - 1) {
      [deck[cardIndex], deck[deck.length - 1]] = [deck[deck.length - 1], deck[cardIndex]];
    }
    result.push(deck.pop());
  }
  return result;
}

console.log(deal(1));
