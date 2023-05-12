/* 
6kyu - Find heavy ball - level: conqueror
https://www.codewars.com/kata/54404a06cf36258b08000364/train/javascript
*/
/*
function findBall(scales) {
  var balls = [0, 1, 2, 3, 4, 5, 6, 7];
  while (balls.length > 1) {
    var left = balls.slice(0, balls.length / 2 | 0);
    var right = balls.slice(balls.length / 2 | 0);
    balls = scales.getWeight(left, right) > 0 ? right : left;
  }
  return balls[0];
}
*/
function findBall(scales) {
  if (scales.getWeight([0, 1, 2, 3], [4, 5, 6, 7]) > 0) {
    if (scales.getWeight([4, 5], [6, 7]) > 0) {
      return scales.getWeight([6], [7]) > 0 ? 7 : 6;
    } else {
      return scales.getWeight([4], [5]) > 0 ? 5 : 4;
    }
  } else {
    if (scales.getWeight([0, 1], [2, 3]) < 0) {
      return scales.getWeight([0], [1]) < 0 ? 0 : 1;
    } else {
      return scales.getWeight([2], [3]) < 0 ? 2 : 3;
    }
  }
}

// for test
class Balls {
  constructor(balls) {
    this.balls = [...balls];
    this.count = 0;
  }
  getWeight(left, right) {
    console.log('call getWeight() ', ++this.count);
    let sumLeft = 0, sumRight = 0;
    for (let i = 0; i < this.balls.length; i++) {
      if (left.includes(i)) sumLeft += this.balls[i];
      if (right.includes(i)) sumRight += this.balls[i];
    }
    return sumLeft === sumRight ? 0 : sumLeft > sumRight ? -1 : 1;
  }
}

let scales = new Balls([2, 1, 1, 1, 1, 1, 1, 1]);
console.log(findBall(scales, 0));
