/* 
6kyu - Sum of many ints
https://www.codewars.com/kata/54c2fc0552791928c9000517

Write this function
F(n,m) = SUM(i=1...n)i%m 

for i from 1 to n, do i % m and return the sum

f(n=10, m=5) // returns 20 (1+2+3+4+0 + 1+2+3+4+0)
You'll need to get a little clever with performance, since n can be a very large number
*/

function f(n, m) {
  let sumMods = m * (m - 1) / 2;
  let chunkCount = Math.floor(n / m);
  let sum = chunkCount * sumMods;
  if (n % m) {
    let min = chunkCount * m, max = min + n % m;
    sum += (1 + max - min) * (max - min) / 2;
  }
  return sum;
}

console.log(f(10, 5), 20);
console.log(f(20, 20), 190);
console.log(f(15, 10), 60);


console.log(f(76822504, 59542814), 1921967171635786);

// best
/* 
 function f(n, m) {
  return Math.floor(n / m) * m * (m - 1) / 2 + (n % m) * (n % m + 1) / 2
}
*/


/* 
function f(n, m) {
  // Fricken Hell! The Algorithms, Mathematics and Numbers tags are correct...
  // this had very little to do with JavaScript (in my case).
  // I went insane trying to figure out why my for-loop was 'inefficient'.
  // It passed all the tests it actually ran...but why was it too slow.
  // It was only when my Actuary wife laughed at me and told me,
  // "There must be a formula for that" that I even considered the possibility
  // Not a friendly first Kata...
  
  // Ok enough rambling...
  // The Abel partial summation formula is like so: n(n+1)/2
  // 1. Realising the pattern from:
  //    f(n=10, m=5) -> 20
  //    i.e. (1+2+3+4+0 + 1+2+3+4+0)
  //    is actually m-1's partial summation was the first breakthrough
  // 2. Noticing that the pattern of m-1's partial summation repeated
  //    exactly the Quotient of n/m was the second breakthrough giving:
  //    Math.floor(n/m)*(((m-1)*(m))/2)
  //    and with this a lot of the tests passed...but not all.
  // 3. Finally there is a sneakness about this Kata in that the example
  //    and initial Test Cases do not give you final piece of the puzzle.
  //    i.e. you need to add the partial summation of n % m to the result
  //    giving:
  //    Math.floor(n/m)*(((m-1)*(m))/2) + ((n%m)*(n%m+1))/2
  // Tada: (variables extracted for readability)
  var s = m - 1;
  var r = n % m;
  var q = Math.floor(n/m);
  
  var a = (s*m)/2;
  var b = (r*(r+1))/2;
  
  return (q * a) + b;
}
*/

/* 
function f(n, m) {
  return gauss(m - 1) * (n / m | 0) + gauss(n % m)
}

function gauss(n) {
  return n * (n + 1) / 2
}
*/