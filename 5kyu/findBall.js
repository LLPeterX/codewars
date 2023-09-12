/* 
5kyu - Find heavy ball - level: master
https://www.codewars.com/kata/544034f426bc6adda200000e/train/javascript

There are 8 balls numbered from 0 to 7. Seven of them have the same weight. One is heavier. Your task is to find its number.

Your function findBall will receive single argument - scales object. The scales object contains an internally stored array of 8 elements (indexes 0-7), each having the same value except one, which is greater. It also has a public method named getWeight(left, right) which takes two arrays of indexes and returns -1, 0, or 1 based on the accumulation of the values found at the indexes passed are heavier, equal, or lighter.

getWeight returns:

-1 if left pan is heavier

1 if right pan is heavier

0 if both pans weigh the same

Examples of scales.getWeight() usage:

scales.getWeight([3], [7]) returns -1 if ball 3 is heavier than ball 7, 1 if ball 7 is heavier, or 0 i these balls have the same weight.

scales.getWeight([3, 4], [5, 2]) returns -1 if weight of balls 3 and 4 is heavier than weight of balls 5 and 2 etc.

So where's the catch, you may ask. Well - the scales is very old. You can use it only TWICE before the scale breaks.
*/

/* 
from: https://uchi.ru/otvety/questions/u-vas-imeetsya-8-sharikov-odinakovogo-vida-i-razmera-vopros-kak-nayti-bolee-tyazheliy-sha#:~:text=%D0%94%D0%BB%D1%8F%20%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B1%D0%BE%D0%BB%D0%B5%D0%B5%20%D1%82%D1%8F%D0%B6%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE%20%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0,%D0%B7%D0%BD%D0%B0%D1%87%D0%B8%D1%82%20%D1%82%D0%B0%D0%BC%20%D0%B1%D0%BE%D0%BB%D0%B5%D0%B5%20%D1%82%D1%8F%D0%B6%D0%B5%D0%BB%D1%8B%D0%B9%20%D1%88%D0%B0%D1%80.
*/

function findBall(scales) {
  let w = scales.getWeight([0, 1, 2], [3, 4, 5]); // remains [6,7]
  if (w === 0) {
    w = scales.getWeight([6], [7]);
    return w < 0 ? 6 : 7;
  } else if (w < 0) {
    w = scales.getWeight([0], [1]);
    if (w === 0) return 2;
    return w < 0 ? 0 : 1;
  } else {
    w = scales.getWeight([3], [4]);
    if (w === 0) return 5;
    return w < 0 ? 3 : 4;
  }
}

// best
/* 
function findBall(scales) {
  function w(balls) {
    var l = balls.length;
    var p = Math.ceil(l/3);
    if (l === 1) {
      return balls[0];
    }
    var left = balls.slice(0,p);
    var right = balls.slice(-p);
    var middle = balls.slice(p,l-p);
    var result = scales.getWeight(left, right);
    return (result == -1) ? w(left) : (result == 1) ? w(right) : w(middle);
  }
    
  return w([0,1,2,3,4,5,6,7]);
}
*/

/* 
function findBall(scales) {
  var weight = scales.getWeight([0, 1, 2], [3, 4, 5])
  if (weight < 0) {
    weight = scales.getWeight([0], [1])
    return weight < 0 ? 0 : weight > 0 ? 1 : 2
  } else if (weight > 0) {
    weight = scales.getWeight([3], [4])
    return weight < 0 ? 3 : weight > 0 ? 4 : 5
  }
  
  return scales.getWeight([6], [7]) < 0 ? 6 : 7
}
*/

/* 
findBall=(a,b=[0,1,2],c=[3,4,5],d=[6,7],e=a.getWeight(b,c),f=([b,c,d],e=a.getWeight([b],[c]))=>e<0?b:e?c:d)=>e<0?f(b):e?f(c):f(d)
*/