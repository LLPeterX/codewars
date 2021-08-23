/* 
7kyu - Loop Array
https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/train/javascript
*/

function loopArr(arr, direction, steps) {
  while (steps--) direction === 'left' && arr.push(arr.shift()) || arr.unshift(arr.pop());
  return arr;
}

console.log(loopArr([1, 5, 87, 45, 8, 8], 'left', 2)); // [87, 45, 8, 8, 1, 5]
console.log(loopArr([1, 5, 87, 45, 8, 8], 'right', 2)); //[8, 8, 1, 5, 87, 45]

//best
/*
function loopArr(arr, direction, steps) {
  const i = direction == 'left' ? steps : -steps;
  return arr.slice(i).concat(arr.slice(0, i));
}
*/

/*
const loopArr = (arr, direction, steps) => arr.map((_,i)=>arr[((i+(direction == 'left' ? steps : arr.length - steps))%arr.length+arr.length)%arr.length]);
*/