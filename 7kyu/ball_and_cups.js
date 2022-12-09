/* 
7kyu - Ball and Cups
https://www.codewars.com/kata/5b715fd11db5ce5912000019/train/javascript

Игра в наперстки.
Дано начальное положение шариков и массив перемещений наперстков.
Найти - под каким наперстком будет шарик
*/

function cupAndBalls(b, arr) {
  let cups = [0, 0, 0, 0];
  cups[b] = 1;
  for (let i = 0; i < arr.length; i++) {
    [cups[arr[i][0]], cups[arr[i][1]]] = [cups[arr[i][1]], cups[arr[i][0]]];
  }
  return cups.indexOf(1);
};

console.log(cupAndBalls(2, [[1, 2]]), 1)
console.log(cupAndBalls(1, [[2, 3], [1, 2], [1, 2]]), 1)
console.log(cupAndBalls(2, [[1, 3], [1, 2], [2, 1], [2, 3]]), 3)

//best
/* 
const cupAndBalls = (ball, pairs) => pairs.reduce((ball, [a, b]) => a == ball? b: b == ball? a: ball, ball);
*/

/* 
const cupAndBalls = (b, switches) => {
  const cups = [null, false, false, false]
  cups[b] = true
  
  for (const [a, b] of switches)
    [cups[a], cups[b]] = [cups[b], cups[a]]
    
  return cups.findIndex(Boolean)
}
*/

/* 
function cupAndBalls(b, arr){

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === b) {
    b = arr[i][1]
  } else if (arr[i][1] === b) {
    b = arr[i][0]
  }
}
return b
};
*/