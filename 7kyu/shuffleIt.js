/* 
7kyu - Training Time
https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript

Create a function shuffleIt. 
The function accepts two or more parameters. 
The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays. 
Each numeric array contains two numbers, which are indices for elements in arr. 
For every such array, swap the elements. 

Ex: shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]

Use: arrow functions, the spread operator, destructuring, and rest parameters.
*/

function shuffleIt(arr, ...ix) {
  const swap = (i, j) => { let tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp; }
  for (let [i, j] of ix) {
    swap(i, j);
  }
  return arr;
}

console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2]), [1, 3, 2, 4, 5]);
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4]), [1, 3, 2, 5, 4]);
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3]), [1, 3, 5, 2, 4]);
// best
/* 
var shuffleIt=(arr,...ex)=>{
  for ([a,b] of ex) [arr[a],arr[b]]=[arr[b],arr[a]];
  return arr;
}
*/

/* 
function shuffleIt(arr, ...exchanges){
  exchanges.forEach(([i, j]) => [arr[i], arr[j]] = [arr[j], arr[i]]);
  return arr;
}
*/