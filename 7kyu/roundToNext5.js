/* 
7kyu - Round up to the next multiple of 5
https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript

Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?
*/

function roundToNext5(n) {
  if (n % 5 === 0) return n;
  while (n % 5) n++;
  return n;
}


console.log(roundToNext5(-1), 0);
console.log(roundToNext5(7), 10);
console.log(roundToNext5(-5), -5);
console.log(roundToNext5(121), 125);

// best
/* 
function roundToNext5(n){
  return Math.ceil(n/5)*5;
}
*/