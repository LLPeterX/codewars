/* 
5kyu - Beeramid
https://www.codewars.com/kata/51e04f6b544cf3f6550000c1

Компания выплатила бонус. Вы идете в бар, покупаете банки пива и пытаетесь построить из них 3D- пирамиду.
Пирамида состоит из квадратных уровней: на верху 1, ниже 4, потом 9, 25 и т.д.
Сколько _полных_ уровней можно построить из купленных банок? 
price = цена одной банки
binus = склько денег в кармане
*/

// Returns number of complete beeramid levels
var beeramid = function (bonus, price) {
  if (bonus < price) return 0;
  let level = 0;
  while (true) {
    bonus -= (level ** 2) * price;
    if (bonus < 0) break;
    level++;
  }
  return level - 1;
}

console.log(beeramid(9, 2), 1);
console.log(beeramid(10, 2), 2);
console.log(beeramid(11, 2), 2);
console.log(beeramid(21, 1.5), 3);
console.log(beeramid(454, 5), 5);
console.log(beeramid(455, 5), 6);
console.log(beeramid(4, 4), 1);
console.log(beeramid(3, 4), 0);
console.log(beeramid(0, 4), 0);
console.log(beeramid(-1, 4), 0);

// best
/* 
var beeramid = function(bonus, price) {
  var beers = Math.floor(bonus / price), levels = 0;
  while(beers >= ++levels * levels) {
    beers -= levels * levels;
  }
  return levels - 1;
}
*/

/* 
const beeramid = (bonus, price, lvl = 1) =>
  bonus - lvl ** 2 * price < 0 ? --lvl : beeramid(bonus - lvl ** 2 * price, price, ++lvl);
*/