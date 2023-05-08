/* 
7kyu - Find heavy ball - level: novice
https://www.codewars.com/kata/544047f0cf362503e000036e

Есть 8 шаров 0...7. Все одинакового веса, кроме одного.

Фунция findBall() принимает объект scales. 
Он cодержит массив шаров - все значения одинаковы, кроме одного, самого тяжелого.
Метод getWeight(leftPan, rightPan) принимает аргументами NN шаров, суммирует веса, и возвращает:
- -1 Если левая часть тяжелее
- 1  если правая часть тяжелее
- 0 обе части равны

getWeight() можно использовать не более 4 раз.



*/


function findBall(scales) {
  let w = scales.getWeight([0, 1, 2, 3], [4, 5, 6, 7]);
  if (w > 0) {
    w = scales.getWeight([4, 5], [6, 7]);
    if (w > 0) {
      w = scales.getWeight([6], [7]);
      return w > 0 ? 7 : 6;
    } else {
      w = scales.getWeight([4], [5]);
      return w > 0 ? 5 : 4;
    }
  } else {
    w = scales.getWeight([0, 1], [2, 3]);
    if (w < 0) {
      w = scales.getWeight([0], [1]);
      return w < 0 ? 0 : 1;
    } else {
      w = scales.getWeight([2], [3]);
      return w < 0 ? 2 : 3;
    }
  }

}


class Balls {
  constructor(balls) {
    this.balls = [...balls];
  }
  getWeight(left, right) {
    let sumLeft = 0, sumRight = 0;
    for (let i = 0; i < this.balls.length; i++) {
      if (left.includes(i)) sumLeft += this.balls[i];
      if (right.includes(i)) sumRight += this.balls[i];
    }
    return sumLeft === sumRight ? 0 : sumLeft > sumRight ? -1 : 1;
  }
}
// best

/* 
function findBall(scales) {
  var balls = [0,1,2,3,4,5,6,7];
  while (balls.length > 1) {
    var left = balls.slice(0, balls.length/2|0);
    var right = balls.slice(balls.length/2|0);
    balls = scales.getWeight(left, right) > 0 ? right : left;
  }
  return balls[0];
}
*/

/* 
function findBall(scales, balls = [0, 1, 2, 3, 4, 5, 6, 7]) {
  if (balls.length == 1) return balls[0];
  let a = balls.slice(0, balls.length / 2);
  let b = balls.slice(a.length);
  return findBall(scales, scales.getWeight(a, b) < 0 ? a : b);
}
*/