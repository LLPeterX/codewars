/* 
6kyu - Sum of a Sequence [Hard-Core Version]
https://www.codewars.com/kata/587a88a208236efe8500008b/train/javascript

The task is simple to explain: 
simply sum all the numbers from the first parameter being the beginning 
to the second parameter being the upper limit (possibly included), 
going in steps expressed by the third parameter:

sequenceSum(2,2,2) === 2
sequenceSum(2,6,2) === 12 // 2 + 4 + 6
sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
sequenceSum(1,5,3) === 5 // 1 + 4

If it is an impossible sequence (with the beginning being larger the end 
and a positive step or the other way around), 
just return 0. 

Note: differing from the other base kata, much larger ranges are going to be tested, 
so you should hope to get your algo optimized and to avoid brute-forcing your way through the solution.
*/

function sequenceSum(begin, end, step) {
  if (step == 0 || (end < begin && step > 0) || (end > begin && step < 0)) return 0;
  let n = Math.floor(Math.abs((end - begin)) / Math.abs(step)) + 1; // количество чисел
  end -= (end - begin) % step;
  return (begin + end) * n / 2;
}

console.log(sequenceSum(2, 6, 2), 12); // [2,4,6]
console.log(sequenceSum(1, 5, 1), 15); //[ 1,2,3,4,5]
console.log(sequenceSum(1, 5, 3), 5); // [1,4]
console.log(sequenceSum(-1, -5, -3), -5); //[-1, -4]
console.log(sequenceSum(16, 15, 3), 0);
console.log(sequenceSum(-24, -2, 22), -26);
console.log(sequenceSum(-2, 4, 658), -2);
console.log(sequenceSum(780, 68515438, 5), 469436517521190);
console.log(sequenceSum(9383, 71418, 2), 1253127200);
console.log(sequenceSum(20, 67338879, 5), 453452442295970);

// best
/* 
function sequenceSum(b, e, s) {
    var n = Math.floor((e - b) / s) + 1;
    if (n <= 0)  return 0;
    return (2*b + s*(n-1)) * n / 2; 
}
*/

