/* 
7kyu - Rock Off!
https://www.codewars.com/kata/5b097da6c3323ac067000036/train/javascript

Alice and Bob have participated to a Rock Off with their bands. 
A jury of true metalheads rates the two challenges, awarding points 
to the bands on a scale from 1 to 50 for three categories: 
Song Heaviness, Originality, and Members' outfits.

For each one of these 3 categories they are going to be awarded one point, 
should they get a better judgement from the jury. 
No point is awarded in case of an equal vote.

You are going to receive two arrays, containing first the score of Alice's 
band and then those of Bob's. 
Your task is to find their total score by comparing them in a single line.

Example:
-Alice's band plays a Nirvana inspired grunge and has been rated 
20 for Heaviness, 32 for Originality and only 18 for Outfits.
-Bob listens to Slayer and has gotten a good 48 for Heaviness, 
25 for Originality and a rather honest 40 for Outfits.

The total score should be followed by a colon : and by one of the following quotes: 
-if Alice's band wins: Alice made "Kurt" proud! 
-if Bob's band wins: Bob made "Jeff" proud! 
-if they end up with a draw: that looks like a "draw"! Rock on!
*/

const solve = (a, b, f = (x, y) => x.reduce((s, v, i) => s + (v > y[i]), 0)) =>
  `${f(a, b)}, ${f(b, a)}: ${['Bob made "Jeff" proud!', 'that looks like a "draw"! Rock on!', 'Alice made "Kurt" proud!'][Math.sign(f(a, b) - f(b, a)) + 1]}`;

console.log(solve([47, 7, 2], [47, 7, 2]), '0, 0: that looks like a "draw"! Rock on!')
console.log(solve([47, 67, 22], [26, 47, 12]), '3, 0: Alice made "Kurt" proud!')
console.log(solve([25, 50, 22], [34, 49, 50]), '1, 2: Bob made "Jeff" proud!')

// other
/* 
const solve = (a, b) =>
  ((a, b) => `${a}, ${b}: ${a === b ? `that looks like a "draw"! Rock on!` : `${a > b ? `Alice made "Kurt` : `Bob made "Jeff`}" proud!`}`)
  (...a.reduce((pre, val, idx) => [pre[0] + (val > b[idx]), pre[1] + (val < b[idx])], [0, 0]));
*/