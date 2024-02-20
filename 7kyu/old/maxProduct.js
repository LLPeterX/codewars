/* 
7kyu - Product of Largest Pair
https://www.codewars.com/kata/5784c89be5553370e000061b/train/javascript

Rick wants a faster way to get the product of the largest pair in an array. 
Your task is to create a performant solution to find the product of the largest 
two integers in a unique array of positive numbers.

Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).
*/

/* 
// неверно. Сортировку нельзя использовать
function maxProduct(a) {
  a.sort((x, y) => y - x);
  return a[0] * a[1];
}
 */

// from https://www.techiedelight.com/ru/find-maximum-product-two-integers-array/
function maxProduct(a) {
  let max1 = a[0], max2 = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < a.length; i++) {
    if (a[i] > max1) {
      max2 = max1;
      max1 = a[i];
    } else if (a[i] > max2) {
      max2 = a[i];
    }
  }
  return max1 * max2;
}


console.log(maxProduct([56, 335, 195, 443, 6, 494, 252]), 218842);
console.log(maxProduct([154, 428, 455, 346]), 194740);
console.log(maxProduct([39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411]), 187827);
console.log(maxProduct([136, 376, 10, 146, 105, 63, 234]), 87984);
console.log(maxProduct([354, 463, 165, 62, 472, 53, 347, 293, 252, 378, 420, 398, 255, 89]), 218536);
console.log(maxProduct([346, 446, 26, 425, 432, 349, 123, 269, 285, 93, 75, 14]), 192672);
console.log(maxProduct([134, 320, 266, 299]), 95680);
console.log(maxProduct([114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252]), 139496);
console.log(maxProduct([375, 56, 337, 466, 203]), 174750);

// best

/* 
function maxProduct(a) {
  var biggest = Math.max.apply(Math, a);
  a.splice(a.indexOf(biggest), 1);
  return biggest * Math.max.apply(Math, a);
}
*/