/* 
7kyu - Scoring Test
https://www.codewars.com/kata/55d2aee99f30dbbf8b000001/train/javascript


*/

function scoreTest(str, right, omit, wrong) {
  let scores = [right, omit, -wrong];
  return [...str].reduce((sum, a) => sum + scores[a], 0);
}

console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1), 9);
console.log(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2), 3);