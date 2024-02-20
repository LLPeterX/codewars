/* 
7kyu - Elevator Distance
https://www.codewars.com/kata/59f061773e532d0c87000d16/train/javascript

Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. 
You have travelled a total of 3 + 6 = 9 floors of distance.

Given an array representing a series of floors you must reach by elevator, return an integer 
representing the total distance travelled for visiting each floor in the array in order.
*/


function elevatorDistance(array) {
  //return array.reduce((sum, _, i, a) => sum + Math.abs(a[i] - (a[i + 1] || 0)), 0) - array.pop();
  let count = 0;
  for (let i = 0; i < array.length - 1; i++) {
    count += Math.abs(array[i] - array[i + 1]);
  }
  return count;
}

console.log(elevatorDistance([5, 2, 8]), 9);
console.log(elevatorDistance([1, 2, 3]), 2);
console.log(elevatorDistance([7, 1, 7, 1]), 18);
console.log(elevatorDistance([18, 28, 7]), 10);
console.log(elevatorDistance([10, 19, 21]), 2);

// best
/* 
function elevatorDistance(array) {
  return array.slice(1).reduce((s,n,i)=>s+Math.abs(n-array[i]),0)
}
*/