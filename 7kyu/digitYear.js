/* 
7kyu - Simple Fun #144: Distinct Digit Year
https://www.codewars.com/kata/58aa68605aab54a26c0001a6/train/javascript

The year of 2013 is the first year after the old 1987 with only distinct digits.

Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.
*/

function distinctDigitYear(year) {
  let res = year + 1;
  while (new Set([..."" + res]).size != 4) res++;
  return res;


}

console.log(distinctDigitYear(1987), 2013)
console.log(distinctDigitYear(2013), 2014)

// best

/* 
function distinctDigitYear(year) {
  while ( new Set(Array.from(String(++year))).size<4 ) ;
  return year;
}
*/