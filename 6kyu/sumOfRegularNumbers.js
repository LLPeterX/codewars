/* 
6kyu - Simple Fun #191: Sum Of Regular Numbers
https://www.codewars.com/kata/58c20c8d61aefc518f0000fd

You are given a regular array arr. 
Let's call a step the difference between two adjacent elements.

Your task is to sum the elements which belong to the sequence of consecutive elements 
of length at least 3 (but as long as possible), such that the steps between 
the elements in this sequence are the same.

Note that some elements belong to two sequences and have to be counted twice.
*/

function sumOfRegularNumbers(arr) {
  let result = 0;
  for (let i = 1; i < arr.length; i++) {
    let step = arr[i] - arr[i - 1];
    let count = 1;
    let tmpSum = arr[i - 1];
    while (i < arr.length && arr[i] - arr[i - 1] == step) {
      tmpSum += arr[i++];
      count++;
    }
    if (count >= 3) {
      result += tmpSum;
    }
    --i;
  }
  return result;
}

console.log(sumOfRegularNumbers([54, 70, 86, 1, -2, -5, 0, 5, 78, 145, 212, 15]), 639)
console.log(sumOfRegularNumbers([59, 58, 57, 55, 53, 51]), 390)
console.log(sumOfRegularNumbers([7, 2, -3, 3, 9, 15]), 30)
console.log(sumOfRegularNumbers([-17, -9, 1, 9, 17, 4, -9]), 39)
console.log(sumOfRegularNumbers([7, 2, 3, 2, -2, 400, 802]), 1200)
console.log(sumOfRegularNumbers([-1, 7000, 1, -6998, -13997]), -13994)

// best

/* 
function sumOfRegularNumbers(arr) {
  let is_step, is_first = true, sum = 0;
  
  for (let i = 0; i < arr.length - 2; i++) {
    is_step = arr[i+1] - arr[i] === arr[i+2] - arr[i+1];
    
    if (is_step)
      sum += (is_first ? arr[i] + arr[i+1] : 0) + arr[i+2];
      
    is_first = !is_step;
  }
  
  return sum;
}
*/