/* 
7kyu - First-Class Function Factory
https://www.codewars.com/kata/563f879ecbb8fcab31000041/train/javascript

Write a function, factory, that takes a number as its parameter and returns another function.

The returned function should take an array of numbers as its parameter,
and return an array of those numbers multiplied by the number that was passed into the first function.


*/

function factory(x) {
  return function (a) {
    return a.map(v => v * x);
  }

}

var fives = factory(5);       // returns a function - fives
var myArray = [1, 2, 3];
console.log(fives(myArray));               //returns [5, 10, 15];

// best

/* 
function factory(x){
    return array => array.map( a => a*x );
}
*/