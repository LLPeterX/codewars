/* 
7kyu - Two fighters, one winner.
https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. 
Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. 
See the Fighter class below in your chosen language.

Both health and damagePerAttack will be integers larger than 0. 
You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Exmaple:
declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

Class Fighter:
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}  
 */



// function declareWinner(fighter1, fighter2, firstAttacker) {
//   const combatants = [fighter1, fighter2];
//   let k = fighter1.name === firstAttacker ? 0 : 1;
//   while (combatants[0].health > 0 && combatants[1].health > 0) {
//     combatants[(k + 1) % 2].health -= combatants[k % 2].damagePerAttack;
//     k++;
//   }
//   return combatants[0].health <= 0 ? combatants[1].name : combatants[0].name;
// }

function declareWinner(fighter1, fighter2, firstAttacker) {
  const combatants = [fighter1, fighter2];
  for (let k = ~~(fighter1.name != firstAttacker); combatants[0].health > 0 && combatants[1].health > 0; k++) {
    combatants[(k + 1) % 2].health -= combatants[k % 2].damagePerAttack;
  }
  return combatants[0].health <= 0 ? combatants[1].name : combatants[0].name;
}




function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () { return this.name; }
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew"); // первым бьет Lew
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry"); // первый бьет Harry
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")

//best
/* 
function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}
*/