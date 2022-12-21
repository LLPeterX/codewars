/* 
6kyu - Sqrt approximation
https://www.codewars.com/kata/52ecde1244751a799b00018a

Your task is to write a function that takes an integer n and returns either

- an integer k if n is a square number, such that k * k == n or
- a range (k, k+1), such that k * k < n and n < (k+1) * (k+1).
*/

function sqrtApproximation(n) {
  const calcMinRoot = (n) => {
    if (n < 2) return n;
    let smallCandidate = calcMinRoot(n >> 2) << 1;
    let largeCandidate = smallCandidate + 1;
    if (largeCandidate * largeCandidate > n) return smallCandidate;
    return largeCandidate;
  }

  let nums = calcMinRoot(n);
  return nums * nums === n ? nums : [nums, nums + 1];
}


/*
function sqrtApproximation(n) {
  let shift = 2;
  let nShifted = n >> shift;
  while (nShifted != 0 && nShifted != n) {
    shift += 2;
    nShifted = n >> shift;
  }
  shift -= 2;
  let result = 0;
  while (shift >= 0) {
    result = result << 1;
    let candidateResult = result + 1;
    if (candidateResult * candidateResult <= n >> shift) result = candidateResult;
    shift -= 2;
  }
  return result * result === n ? result : [result, result + 1];
}
*/
console.log(sqrtApproximation(4), 2);
console.log(sqrtApproximation(5), [2, 3]);

console.log(sqrtApproximation(4), 2);
console.log(sqrtApproximation(9), 3);
console.log(sqrtApproximation(16), 4);
console.log(sqrtApproximation(25), 5); // FAIL
console.log(sqrtApproximation(36), 6);
console.log(sqrtApproximation(49), 7);
console.log(sqrtApproximation(100), 10) // FAIL
console.log(sqrtApproximation(0), 0)
console.log(' -- non-roots --');
console.log(sqrtApproximation(5), [2, 3]);
console.log(sqrtApproximation(82), [9, 10]);
console.log(sqrtApproximation(101), [10, 11]);
console.log(sqrtApproximation(10001), [100, 101]);

//console.log(256 >> 2)

// best

/* 
function sqrtApproximation(number) {
  for (var i = 0; number >= i*i; i++) if (i*i === number) return i
  return [i - 1, i]
}
*/