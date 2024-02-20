/* 
5kyu - Sort - one, three, two
https://www.codewars.com/kata/56f4ff45af5b1f8cd100067d/train/javascript

Input: Range is 0-999

There may be duplicates

The array may be empty

Example:
  Input: 1, 2, 3, 4
  Equivalent names: "one", "two", "three", "four"
  Sorted by name: "four", "one", "three", "two"
  Output: 4, 1, 3, 2

Notes:
- Don't pack words together:
- e.g. 99 may be "ninety nine" or "ninety-nine"; but not "ninetynine"
- e.g 101 may be "one hundred one" or "one hundred and one"; but not "onehundredone"
- Don't fret about formatting rules, because if rules are consistently applied it has no effect anyway:
- e.g. "one hundred one", "one hundred two"; is same order as "one hundred and one", "one hundred and two"
- e.g. "ninety eight", "ninety nine"; is same order as "ninety-eight", "ninety-nine"
*/

// thanks to donaldsebleung
function number2words(n) {
  if (n < 20) return ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"][n];
  if (n < 100) return ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"][~~(n / 10) - 1] + (n % 10 === 0 ? "" : "-" + number2words(n % 10));
  return ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][~~(n / 100) - 1] + " hundred" + (n % 100 === 0 ? "" : " " + number2words(n % 100));
}

function sortByName(ary) {
  return ary.sort((a, b) => number2words(a).localeCompare(number2words(b)));
}

console.log(sortByName([8, 8, 9, 9, 10, 10]), [8, 8, 9, 9, 10, 10]);
console.log(sortByName([1, 2, 3, 4]), [4, 1, 3, 2]);
console.log(sortByName([9, 99, 999]), [9, 999, 99]);