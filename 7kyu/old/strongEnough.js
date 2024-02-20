/* 
7kyu - Katastrophe!
https://www.codewars.com/kata/55a3cb91d1c9ecaa2900001b/train/javascript

*/

function strongEnough(earthquake, age) {
  let m = earthquake.map(x => x.reduce((s, v) => s + v, 0)).reduce((y, v) => y * v, 1);
  return m * Math.pow(1.01, age) > 1000 ? "Needs Reinforcement!" : "Safe!";
}

// final:
// const strongEnough = (earthquake, age) => earthquake.map(x => x.reduce((s, v) => s + v, 0)).reduce((y, v) => y * v, 1) * Math.pow(1.01, age) > 1000 ? "Needs Reinforcement!" : "Safe!";

console.log(strongEnough([[2, 3, 1], [3, 1, 1], [1, 1, 2]], 2), "Safe!")
console.log(strongEnough([[5, 8, 7], [3, 3, 1], [4, 1, 2]], 2), "Safe!")
console.log(strongEnough([[5, 8, 7], [3, 3, 1], [4, 1, 2]], 3), "Needs Reinforcement!")
console.log(strongEnough([[5, 8, 7], [1, 1, 1], [6, 6, 1]], 25), "Needs Reinforcement!")