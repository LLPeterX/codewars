/* 
6kyu - Pokemon Damage Calculator
https://www.codewars.com/kata/536e9a7973130a06eb000e9f/train/javascript

damage = 50 * (attack / defense) * effectiveness

Effectiveness:
Attacks can be super effective, neutral, or not very effective 
depending on the matchup. 
For example, water would be super effective against fire, but not very effective against grass.

- Super effective: 2x damage
- Neutral: 1x damage
- Not very effective: 0.5x damage

To prevent this kata from being tedious, you'll only be dealing with four types: 
fire, water, grass, and electric. 
Here is the effectiveness of each matchup:
 - fire > grass
 - fire < water
 - fire = electric
 - water < grass
 - water < electric
 - grass = electric

For this kata, any type against itself is not very effective. 
Also, assume that the relationships between different types are symmetric 
(if A is super effective against B, then B is not very effective against A).
*/

/* 
Для расчета эффективности создадим 2 массива сочетаний типов (наш и оппонента)
и будем определять - попадает ли сочетание в один из массивов
*/
function calculateDamage(yourType, opponentType, attack, defense) {
  const eff2x = ["firegrass", "waterfire", "grasswater", "electricwater"];
  const eff1x = ["fireelectric", "grasselectric"];
  // let eff;
  // if (eff2x.includes(yourType + opponentType)) eff = 2;
  // else if (eff1x.includes(yourType + opponentType) || eff1x.includes(opponentType + yourType)) {
  //   eff = 1;
  // } else eff = 0.5;

  const eff = eff2x.includes(yourType + opponentType) ? 2 : (eff1x.includes(yourType + opponentType) || eff1x.includes(opponentType + yourType)) ? 1 : 0.5;
  return 50 * attack / defense * eff;
}


console.log(calculateDamage("fire", "water", 100, 100), 25);
console.log(calculateDamage("grass", "water", 100, 100), 100);
console.log(calculateDamage("electric", "fire", 100, 100), 50);
console.log(calculateDamage("grass", "electric", 57, 19), 150);// fail
console.log(calculateDamage("grass", "water", 40, 40), 100);
console.log(calculateDamage("grass", "fire", 35, 5), 175);
console.log(calculateDamage("fire", "electric", 10, 2), 250);

// others

/*
var effects = {
  fire : {
    fire : 0.5,
    grass : 2,
    water : 0.5,
    electric : 1
  },
  grass : {
    fire : 0.5,
    grass : 0.5,
    water : 2,
    electric : 1
  },
  water : {
    fire : 2,
    grass : 0.5,
    water : 0.5,
    electric : 0.5
  },
  electric : {
    fire : 1,
    grass : 1,
    water : 2,
    electric : 0.5
  }
};

function calculateDamage(yourType, opponentType, attack, defense){
  return Math.ceil(50 * (attack/defense) * effects[yourType][opponentType]);
}
*/

// cool :-)
/* 
calculateDamage=(a,b,c,d,e=a[0]+b[0])=>50*c/d*(/fe|ef|ge|eg/.test(e)?1:/fg|wf|gw|ew/.test(e)?2:0.5)
*/
