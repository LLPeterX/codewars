/* 
7kyu - Simple reversal game
https://www.codewars.com/kata/5b93636ba28ce032600000b7/train/javascript

ack and Jill are playing a game. 
They have balls numbered from 0 to n - 1. 
Jack looks the other way and asks Jill to reverse the position of the balls, 
for instance, to change the order from say, 0,1,2,3 to 3,2,1,0. 

He further asks Jill to reverse the position of the balls n times, 
each time starting from one position further to the right, till she reaches the last ball. 
So, Jill has to reverse the positions of the ball starting from position 0, 
then from position 1, then from position 2 and so on. 

At the end of the game, Jill will ask Jack to guess the final position of any ball numbered k.

You will be given 2 integers, the first will be n(balls numbered from 0 to n-1) 
and the second will be k. 
You will return the position of the ball numbered k after the rearrangement.

*/

function solve(n, k) {
  let arr = Array.from({ length: n }, (_, i) => i);
  for (let i = 0; i < n; i++) {
    arr = arr.slice(0, i).concat(arr.slice(i).reverse());
  }
  return arr.indexOf(k);
}

console.log(solve(4, 1), 3);
console.log(solve(4, 2), 2);
console.log(solve(4, 3), 0);
console.log(solve(20, 8), 17);
console.log(solve(20, 9), 19);
console.log(solve(20, 10), 18);

// best
/* 
function solve(n,k){
  return k < Math.floor(n/2) ? k * 2 + 1 : (n - (k + 1)) * 2  
}
*/
