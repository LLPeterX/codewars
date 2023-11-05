/* 
7kyu - Bouncing Ball
https://www.codewars.com/kata/5a40c250c5e284a76400008c/train/javascript

You drop a ball from a given height. 
After each bounce, the ball returns to some fixed proportion 
of its previous height. 
If the ball bounces to height 1 or less, we consider it 
to have stopped bouncing. 

Return the number of bounces it takes for the ball to stop moving.
*/

function bouncingBall(initial, proportion) {
  let count = 0;
  while (initial > 1) {
    initial *= proportion;
    count++;
  }
  return count;
};

console.log(bouncingBall(2, 0.5), 1);
console.log(bouncingBall(4, 0.5), 2);
console.log(bouncingBall(10, 0.1), 1);
console.log(bouncingBall(100, 0.1), 2);
console.log(bouncingBall(9, 0.3), 2);
console.log(bouncingBall(30, 0.3), 3);
console.log(bouncingBall(253, 0.35056185157304465), 6);

// best
/* 
const bouncingBall = (initial, proportion) => Math.ceil(Math.log(initial) / Math.log(1 / proportion));
*/

/* 
function bouncingBall(i,p) {
  return Math.ceil(Math.log10(i)/Math.log10(1/p));
};
*/