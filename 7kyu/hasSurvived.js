/* 
7kyu - Survive the attack
https://www.codewars.com/kata/634d0f7c562caa0016debac5/train/javascript

Даны 2 массива с силой солдат. Вернуть true, если можно выдержать атаку, иначе = false

Условия
* Каждый солдат атакует такого же по тому же индексу массива. Выживает тот, у кого больше сил
* Если силы одинаковы, оба погибают
* Если массивы разной длины, непустой выжывает
* Чтобы выжить, обороняющая сторона должна иметь больше выживших, чем атакующая
* Если выжило равное число солдат, посчитать суммарную силу. Если и они равны, => true
*/

function hasSurvived(attackers, defenders) {
  let maxLen = Math.max(attackers.length, defenders.length),
    numAttackers = pwAttackers = numDefenders = pwDefenders = 0;
  for (let i = 0; i < maxLen; i++) {
    let points = (defenders[i] || 0) - (attackers[i] || 0);
    if (points < 0) {
      numAttackers++;
      pwAttackers += -points;
    } else if (points > 0) {
      numDefenders++;
      pwDefenders += points;
    }
  }
  return numAttackers === numDefenders ? (pwDefenders == pwAttackers ? true : pwDefenders > pwAttackers) : numDefenders > numAttackers;
}


console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), false);
console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]), true);
console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]), true);
console.log(hasSurvived([], [1, 2, 3]), true);
console.log(hasSurvived([1, 2, 3], []), false);
console.log(hasSurvived([32, 65, 21, 83, 85, 7, 71, 45, 20, 63], [83, 44, 38, 55, 84, 80, 58, 20, 4, 74]), false);

// my best!
