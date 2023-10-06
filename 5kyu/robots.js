/* 
5kyu - 80's Kids #6: Rock 'Em, Sock 'Em Robots
https://www.codewars.com/kata/566b490c8b164e03f8000002/train/javascript

Даны 2 робота и объект tactics.
Определить победителя и вернуть его наименование.

Каждый робот представлен объектом со свойствами  name, hit points, speed, 
а также массив tactics со списком тактик, которые он может применять.
Первым атакует робот с наибольшей скоростью.

robot1 = {
  "name": "Rocky",
  "health": 100,
  "speed": 20,
  "tactics": ["punch", "punch", "laser", "missile"]
 }
 robot2 = {
   "name": "Missile Bob",
   "health": 100,
   "speed": 21,
   "tactics": ["missile", "missile", "missile", "missile"]
 }
 tactics = {
   "punch": 20,
   "laser": 30,
   "missile": 35
 }
 
 fight(robot1, robot2, tactics) -> "Missile Bob has won the fight."

 Правила:
 * Первым атакует робот с наибольшей скоростью (speed). Если сорости
   одинаковые, начинает robot1.
 * Роботы атакуют по очереди.
 * Тактики используются в порядке перечисления в массиве
 * Игра завершается, когда у одного из роботок health=0 или 
   у обоих заканчиваются тактики (robot.tactics[])
 * Робот, у которого закончились тактики, не наносят урона, 
   но другой робот продолжает наносить урон
 * Если у обоих роботов закончились тактики, выигрывает тот,
   у кого больше health. Вернуть  ""{Name} has won the fight.""
 * Если у обоих роботов закончились тактики и одинаковое кол-во здоровья,
   вернуть "The fight was a draw."
*/

function fight(robot1, robot2, tactics) {
  let robots = robot2.speed > robot1.speed ? [robot2, robot1] : [robot1, robot2];
  let i = 0;
  while (true) {
    let attacker = robots[i];
    let opponent = robots[(i + 1) % 2];
    if (attacker.tactics.length > 0) {
      let tactic = attacker.tactics.shift();
      opponent.health -= tactics[tactic];
      if (opponent.health <= 0) break;
    }
    if (!attacker.tactics.length && !opponent.tactics.length) break;
    i = (i + 1) % 2;
  }
  console.log(robots);
  if (robots[0].health === robots[1].health) return "The fight was a draw.";
  let winner = robots[0].health > robots[1].health ? robots[0].name : robots[1].name;
  return `${winner} has won the fight.`
}
