/* 
6kyu - Ascend, Descend, Repeat?
https://www.codewars.com/kata/62ca07aaedc75c88fb95ee2f/train/javascript

You are given three integer inputs: length, minimum, and maximum.

Return a string that:
- Starts at minimum
- Ascends one at a time until reaching the maximum, then
- Descends one at a time until reaching the minimum
- repeat until the string is the appropriate length

Notes:

- length will always be non-negative
- negative numbers can appear for minimum and maximum values
- hyphens/dashes ("-") for negative numbers do count towards the length
- the resulting string must be truncated to the exact length provided
- return an empty string if maximum < minimum or length == 0
- minimum and maximum can equal one another and result in a single number 
  repeated for the length of the string
*/

function ascendDescend(length, minimum, maximum) {
  let result = "", n = minimum, k = 1;
  if (maximum < minimum) return '';
  if (minimum === maximum) return Array(length).fill(minimum).join``;
  while (result.length < length) {
    result += n;
    if (n >= maximum) {
      k = -1;
    } else if (n <= minimum) {
      k = 1;
    }
    n += k;
  }
  return result.slice(0, length);
}

console.log(ascendDescend(5, 1, 3), "12321");
console.log(ascendDescend(14, 0, 2), "01210121012101");
console.log(ascendDescend(11, 5, 9), "56789876567");
console.log(ascendDescend(11, 1, 1), "11111111111");
console.log(ascendDescend(1, -5, -4), "-");
console.log(ascendDescend(14, -4, -5), "", '(empty)');
console.log(ascendDescend(3, -4, -4), "-4-4-4");