/* 
7kyu - Coding 3min: Bug in Apple
https://www.codewars.com/kata/56fe97b3cc08ca00e4000dc9/train/javascript

Find out "B"(Bug) in a lot of "A"(Apple).

Shortest code >80 !
*/
// too short
// const sc=(a,l=a[0].length)=>{k=(""+a).indexOf('B')/2;return[~~(k/l),k%l]};


function sc(apple) {
  let k = ("" + apple).indexOf('B') / 2;
  return [~~(k / apple[0].length), k % apple[0].length]
};

let apple;
apple = [
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "B", "A", "A", "A"]
];
console.log(sc(apple), [4, 1]);


apple = [
  ["B", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"]
];
console.log(sc(apple), [0, 0]);

apple = [
  ["A", "A", "A", "A", "A"],
  ["A", "B", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"]
];
console.log(sc(apple), [1, 1]);

apple = [
  ['A', 'A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A', 'A'],
  ['B', 'A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A', 'A']
];

console.log(sc(apple), [2, 0]);