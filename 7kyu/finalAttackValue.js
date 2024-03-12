/* 
7kyu - Simple Fun #327: The Final Attack Value
https://www.codewars.com/kata/5951b409aea9beff3f0000c6/train/javascript

John is playing a RPG game. The initial attack value of the player is x. 
The player will face a crowd of monsters. Each monster has different defense value.

* If the monster's defense value is less than or equal to the player's attack value, 
the player can easily defeat the monster, and the player's attack value will increase. 
The amount increased is equal to the monster's defense value.

* If the monster's defense value is greater than the player's attack value, 
  the player can still defeat monsters, but the player's attack value 
  can only be increased little, equal to the greatest common divisor 
  of the monster's defense value and the player's current attack value.

The defense values for all monsters are provided by monsterList/monster_list. 
The player will fight with the monsters from left to right.

Please help John calculate the player's final attack value.
*/

const gcd = (a, b) => b ? gcd(b, a % b) : a;
function finalAttackValue(x, monsterList) {
  return monsterList.reduce((attack, monsterDef) => attack + (monsterDef > attack ? gcd(monsterDef, attack) : monsterDef), x);
}

console.log(finalAttackValue(50, [50, 105, 200]), 110)

console.log(finalAttackValue(20, [30, 20, 15, 40, 100]), 205)
