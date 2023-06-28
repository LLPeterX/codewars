/* 
4kyu - Ranking Poker Hands
https://www.codewars.com/kata/5739174624fc28e188000465/train/javascript

Create a poker hand that has a method to compare itself to another poker hand:
  PokerHand.prototype.compareWith = function(hand){...};

A poker hand has a constructor that accepts a string containing 5 cards:
  var hand = new PokerHand("KS 2H 5C JD TD");

The characteristics of the string of cards are:

* Each card consists of two characters, where
* The first character is the value of the card: 
  2, 3, 4, 5, 6, 7, 8, 9, T(en), J(ack), Q(ueen), K(ing), A(ce)
* The second character represents the suit: S(pades), H(earts), D(iamonds), C(lubs)
* A space is used as card separator between cards

* Apply the Texas Hold'em rules for ranking the cards.
* Low aces are valid in this kata.
* There is no ranking for the suits.

Scores:
1) Hight Card: 2...Ace => 2...14
2) Pair => 20
3) 2 pairs => 30
4) Three => 40
5) Straight: Sequence of 5 cards in increasing value 
   (Ace can precede 2 and follow up King), not of the same suit => 50
6) Flush: 5 cards of the same suit, not in sequential order
7) Full house: Combination of three of a kind and a pair
8) Four of a kind: Four cards of the same value
9) Straight flush: Sequence of 5 cards in increasing value 
   (Ace can precede 2 and follow up King), of the same suit
*/

/* 
НЕВЕРНО!!!!
В двойках, тройках мы считаем только количество.
Если у нас 2x2, а у оппоннета 2x3 то выигрывает оппонент, а по факту ничья.

Нужно в кажой функции складывать значения карт.
*/

const Result = { "win": 1, "loss": 2, "tie": 3 }

class PokerHand {
  constructor(hand) {
    this.cards = this.parse(hand);
    console.log('hand=', hand);
    console.log('counter=', this.getMaxValueCount(this.cards));
    // console.log('2. is 2=', this.isPair(this.cards));
    // console.log('3. is 2x2=', this.is2Pairs(this.cards));
    // console.log('4. is 3=', this.isThree(this.cards));
    // console.log('5. is Stright=', this.isStraight(this.cards));
    // console.log('6. is Flush=', this.isFlush(this.cards));
    // console.log('7. is FH=', this.isFullHouse(this.cards));
    // console.log('8. is 4=', this.isFour(this.cards));
    // console.log('9. is SFlush', this.isSFlush(this.cards));
    console.log('cards =', this.cards);
    console.log('score =', this.getScore(this.cards));
    console.log('-----------');
  }

  parse(hand) {
    const cardLetters = 'TJQKA';
    return hand.split(' ').map(([value, suit]) => {
      let k = cardLetters.indexOf(value);
      return k >= 0 ? [k + 10, suit] : [+value, suit];
    }).sort((a, b) => a[0] - b[0]);
  }

  getCounter() {
    let counter = Array(15).fill(0);
    for (let c of this.cards) {
      counter[c[0]]++;
    }
    return counter;
  }

  getMaxValueCount() {
    return Math.max(...this.getCounter(this.cards));
  }

  isPair() {
    // 2. 1x2
    return this.getMaxValueCount(this.cards) === 2;
  }

  is2Pairs() {
    // 3. 2x2
    return this.getCounter(this.cards).filter(v => v === 2).length === 2;
  }


  isThree() {
    // 4. three
    return this.getMaxValueCount(this.cards) === 3;
  }


  isStraight() {
    // 5. 5 cards in increasing order
    if (this.cards.every((c, i, a) => !i || c[0] === a[i - 1][0] + 1)) {
      return true;
    }
    // try move ace to 0 and check again
    let [end] = this.cards.slice(-1);
    if (end[0] === 14 && this.cards[0][0] === 2) {
      let newCards = [[1, end[1]]].concat(this.cards.slice(0, -1));
      return newCards.every((c, i, a) => !i || c[0] === a[i - 1][0] + 1);
    }
    return false;
  }

  isFlush() {
    // 6. 5 x same suit
    return new Set(this.cards.map(c => c[1])).size === 1;
  }

  isFullHouse() {
    // 7. 3 + 2
    return this.getMaxValueCount(this.cards) === 3 && new Set(this.cards.map(c => c[0])).size == 2;
  }

  isFour() {
    // 8. 4
    return this.getMaxValueCount(this.cards) === 4;
  }

  isSFlush() {
    // 9. Straight flush: Sequence of 5 cards in increasing value, same suit 
    return this.isStraight(this.cards) && new Set(this.cards.map(c => c[1])).size === 1;
  }

  //---------------
  getScore() {
    let score = this.cards.reduce((s, e) => s + e[0], 0);
    if (this.isSFlush()) score += 1000;
    else if (this.isFour()) score += 900;
    else if (this.isFullHouse()) score += 800;
    else if (this.isFlush()) score += 700;
    else if (this.isStraight()) score += 600;
    else if (this.isThree()) score += 500;
    else if (this.is2Pairs()) score += 400;
    else if (this.isPair()) score += 300;
    return score;
  }

  compareWith(hand) {
    let myScore = this.getScore();
    let opponentScore = hand.getScore();
    //console.log(`my=${myScore} other=${opponentScore}`);
    return myScore === opponentScore ? Result.tie : myScore > opponentScore ? Result.win : Result.loss;
  }
}

function assert(expected, player, opponent) {
  var p = new PokerHand(player);
  var o = new PokerHand(opponent);
  //Test.assertEquals(p.compareWith(o), expected);
  return p.compareWith(o) === expected;
}

// console.log("Highest straight flush wins", assert(Result.loss, "2H 3H 4H 5H 6H", "KS AS TS QS JS"));
// console.log("Straight flush wins of 4 of a kind", assert(Result.win, "2H 3H 4H 5H 6H", "AS AD AC AH JD"));
// console.log("Straight flush wins of 4 of a kind", assert(Result.win, "2H 3H 4H 5H 6H", "AS AD AC AH JD"));
// console.log("Highest 4 of a kind wins", assert(Result.win, "AS AH 2H AD AC", "JS JD JC JH 3D"));
// console.log("4 Of a kind wins of full house", assert(Result.loss, "2S AH 2H AS AC", "JS JD JC JH AD"));
// console.log("Full house wins of flush", assert(Result.win, "2S AH 2H AS AC", "2H 3H 5H 6H 7H"));
// console.log("Highest flush wins", assert(Result.win, "AS 3S 4S 8S 2S", "2H 3H 5H 6H 7H"));
// console.log("Flush wins of straight", assert(Result.win, "2H 3H 5H 6H 7H", "2S 3H 4H 5S 6C"));
// console.log("Equal straight is tie", assert(Result.tie, "2S 3H 4H 5S 6C", "3D 4C 5H 6H 2S"));
// console.log("Straight wins of three of a kind", assert(Result.win, "2S 3H 4H 5S 6C", "AH AC 5H 6H AS"));
// console.log("3 Of a kind wins of two pair", assert(Result.loss, "2S 2H 4H 5S 4C", "AH AC 5H 6H AS"));
// console.log("2 Pair wins of pair", assert(Result.win, "2S 2H 4H 5S 4C", "AH AC 5H 6H 7S"));
// console.log("Highest pair wins", assert(Result.loss, "6S AD 7H 4S AS", "AH AC 5H 6H 7S"));
// console.log("Pair wins of nothing", assert(Result.loss, "2S AH 4H 5S KC", "AH AC 5H 6H 7S"));
// console.log("Highest card loses", assert(Result.loss, "2S 3H 6H 7S 9C", "7H 3C TH 6H 9S"));
// console.log("Highest card wins", assert(Result.win, "4S 5H 6H TS AC", "3S 5H 6H TS AC"));
// console.log("Equal cards is tie", assert(Result.tie, "2S AH 4H 5S 6C", "AD 4C 5H 6H 2C"));

// FAIL:
console.log("random1", assert(Result.win, "TS KS 5S 9S AC", "JH 8S TH AH QH"));
