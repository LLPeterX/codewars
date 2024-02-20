/* 
6kyu - How Many Numbers?
https://www.codewars.com/kata/55d8aa568dec9fb9e200004a/train/javascript

input:
* n - upper limit
* d - maximum difference between every pair of its contiguous digits.

task:
Create a function sel_number(), that will select numbers 
that fulfill the following constraints:

1. The numbers should have 2 digits at least.
2. They should have their respective digits in increasing order from left to right. 
3. They cannot have digits that occurs twice or more. 
4. The difference between neighbouring pairs of digits 
   cannot exceed certain value. 


*/

function selNumber(n, d) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    //let a = [...String(i)].map(Number);
    let a = [...String(i)];
    if ((a.length < 2 || new Set(a).size !== a.length)
      || !a.every((x, i) => !i || x > a[i - 1])
      || !a.every((x, i) => !i || Math.abs(x - a[i - 1]) <= d)) continue;
    else count++;
  }
  return count;
}


console.log(selNumber(13, 1), 1);
console.log(selNumber(47, 3), 12);

// best
/* 
onst checkDigits = (str, diff) => {
    if (str.length < 2) return true                                      // terminal case 1
    if (str[1] - str[0] < 1 || str[1] - str[0] > diff) return false      // terminal case 2
    return checkDigits(str.slice(1), diff)                               // recursive step
  }
function selNumber(n, diff, number = 12, res = 0) {
  while (number <= n) if (checkDigits(number++ + '', diff)) res++
  return res
}
*/