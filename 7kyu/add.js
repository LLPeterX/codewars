/* 
7kyu - Gradually Adding Parameters
https://www.codewars.com/kata/555b73a81a6285b6ce000047/train/javascript

You will create a function named add. 
This function will return the sum of all the arguments.

The inputs will gradually increase with their index as parameter to the function.

  add(3,4,5)   returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26
  
*/

function add(...args) {
  return args.reduce((s, v, i) => s + v * (i + 1), 0);
}

console.log(add());
console.log(add(3, 4, 5));
