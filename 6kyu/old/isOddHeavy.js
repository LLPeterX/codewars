/* 
6kyu - Odd-heavy Array
https://www.codewars.com/kata/59c7e477dcc40500f50005c7/train/javascript

An array is defined to be odd-heavy if it contains at least one odd element 
and every element whose value is odd is greater than every even-valued element.

Массив определяется как нечетно-тяжелый, если он содержит хотя бы один нечетный элемент 
и каждый нечетный элемент больше, чем любой четный.
*/

function isOddHeavy(array) {
  let odds = array.filter(e => e % 2);
  let evens = array.filter(e => e % 2 === 0);
  return odds.length > 0 && odds.every(v => v > Math.max(...evens));
}

