/* 
7kyu - Alan Partridge III - London
https://www.codewars.com/kata/580a41b6d6df740d6100030c/train/javascript
*/

// function alan3(x) {
//   console.log(x);
//   const stations = ['Norwich', 'Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway', 'London'];
//   if (stations.every(st => x.includes(st))) {
//     return 'Smell my cheese you mother!';
//   } else {
//     return 'No, seriously, run. You will miss it.'
//   }
// }

const alan = (x) => ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'].every(st => x.includes(st)) ? 'Smell my cheese you mother!' : 'No, seriously, run. You will miss it.';


let a = ['Spiksworth',
  'Shattered Dreams Parkway',
  'Tiverton',
  'Disappointment',
  'Backstabbing Central',
  'Norwich',
  'Shattered Dreams Parkway',
  'Rejection',
  'Norwich'];

console.log(alan(a));

// my best
