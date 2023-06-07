/* 
7kyu - Another Card Game
https://www.codewars.com/kata/633874ed198a4c00286aa39d/train/javascript

12 карт [0...11] случайно розданы игрокам frank, sam, tom; у каждого по 4 шт.
Игра состоит из 4 раундов. 
Цель раунда - пойти картой с макс.количеством очков.
Первый раунд начинает игрок, у которого карта 0.
Затем ходит второй игрок c любой картой (по очереди  Frank -> Sam -> Tom --> Frank, и т.д. по кругу)
Каждая карта используется только 1 раз; нет правил для лучшего хода.
Третий игрок ходит после второго и видит предыдущие ходы.

В следующем раунде начинает выигравший игрок и начинает с любой карты из оставшихся.

Выигрывает тот, кто первый победил в двух раундах

Вернуть true, если победил Frank (0-й игрок)
На входе 3 массива по 4 карты
*/


// from: https://github.com/ParanoidUser/codewars-handbook/blob/main/kata/7-kyu/another-card-game/main/Kata.java

function solution(frank, sam, tom) {
  return frank[2] > Math.max(sam[0], tom[0]) && frank[3] > Math.max(sam[1], tom[1]);
}


console.log(solution([2, 5, 8, 11], [1, 4, 7, 10], [0, 3, 6, 9]), true)
console.log(solution([1, 2, 3, 4], [5, 6, 7, 8], [0, 9, 10, 11]), false)
console.log(solution([5, 7, 9, 10], [0, 2, 3, 4], [1, 6, 8, 11]), true)
console.log(solution([0, 1, 7, 8], [3, 4, 6, 9], [2, 5, 10, 11]), true)

//console.log(Math.min(...[5, 6, 7, 8]));
