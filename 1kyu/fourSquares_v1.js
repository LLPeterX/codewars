/* 
1kyu - Express number as sum of four squares
https://www.codewars.com/kata/63022799acfb8d00285b4ea0

******  NOT FULLY WORKING CODE! FAILS WITH VERY BIG NUMBERS !!!! *****

Recently you had a quarrel with your math teacher. 
Not only that nerd demands knowledge of all the theorems, 
but he turned to be an constructivist devotee! 
After you recited by heart Lagranges theorem of sum of four squares, 
he now demands a computer program to obtain such a decomposition, 
so that to see that you really understand a topic. What a downer!

You remember well the theorem. 
Any positive integer can be decomposed into a sum of four squares of integers. 
Seems not too hard... But after a quarrel, your teacher wants blood. 
Apparently he will test your program on extremely huge numbers... 
And your program better finished working before the break - you don't want to get F, do you?

Tip: random tests feature 20 numbers as high as 2^128 and 20 number as high as 2^1024.

*/

function bigSqrt(n) {
  if (n < 2n) return n;
  let n1 = (n >> 1n) + 1n;
  let n2 = (n1 + (n / n1)) >> 1n;
  while (n2 < n1) {
    n1 = n2
    n2 = (n1 + (n / n1)) >> 1n;
  }
  return n1;
}


/* 
based on https://github.com/zazyzaya/LagrangesFourSquares/blob/master/main.py

FAIL WITH TIMEOUT ON BIG NUMBERS
*/

function fourSquares(n) {
  if (n === 0n) return [0n, 0n, 0n, 0n];
  let largest = bigSqrt(n);
  let largestSquare = largest * largest;
  let result = [];
  let minimum = bigSqrt(n / 4n);
  while (largestSquare >= minimum) {
    let j = 0n;
    while (j < 4n) {
      let sum = result.reduce((s, v) => s + v, 0n);
      while (sum + largestSquare <= n) {
        result.push(largestSquare);
        sum += largestSquare;
        j++;
      }
      if (n - sum !== 0n && result.length == 4) {
        break;
      } else if (n - sum <= 4n - j) {
        while (result.length < 4n) {
          if (result.reduce((s, v) => s + v, 0n) < n) {
            result.push(1n);
          } else {
            result.push(0n);
          }
        }
        return result.map(bigSqrt);
      }
      largestSquare = (bigSqrt(largestSquare) - 1n) ** 2n;
    }
    --largest;
    largestSquare = largest * largest;
    result = [];
  }
}


function showResult(n) {
  let [a, b, c, d] = fourSquares(n);
  console.log(`n=${n} [${[a, b, c, d]}] => result=${a * a + b * b + c * c + d * d}`);
}

showResult(0n); // 0
showResult(1n); // 0
showResult(17n); // 4,1,0,0
showResult(23n); // 3,3,2,1
showResult(33n); // 5,2,2,0 или 4,4,1,0
showResult(333n); // 18,3,0,0
showResult(215n); //  13,6,3,1 - OK
showResult(1234567890n); // [35136,171,12,3]
//showResult(106369249365575352836589875696130383747n); // FAIL!!
showResult(4093n); // 60,22,3,0 - OK

