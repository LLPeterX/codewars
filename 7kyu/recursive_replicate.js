/* 
7kyu - Recursive Replication
https://www.codewars.com/kata/57547f9182655569ab0008c4

You need to design a recursive function called replicate 
which will receive arguments times and number.

The function should return an array containing repetitions 
of the number argument. 

For instance, replicate(3, 5) should return [5,5,5]. 

If the times argument is negative, return an empty array.
*/

// from https://stackoverflow.com/questions/36413478/how-to-create-an-array-of-a-given-value-recursively

function replicate(times, number) {
  if (times < 1) return [];
  return [].concat(number, replicate(times - 1, number));
}

console.log(replicate(3, 5), [5, 5, 5]);
console.log(replicate(5, 1), [1, 1, 1, 1, 1]);
console.log(replicate(0, 12), []);
console.log(replicate(-1, 12), []);
console.log(replicate(8, 0), [0, 0, 0, 0, 0, 0, 0, 0]);

// best
/* 
function replicate(times, number) {
  return times > 0 ? [number, ...replicate( times - 1, number )] : [];
}
*/