/* 
6kyu - Function composition
https://www.codewars.com/kata/5655c60db4c2ce0c2e000026
*/

// function compose(...funcs) {
//   return function(...args) {
//     return funcs.reduceRight((a,f)=>f(a),x);
//   }
//}
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const addOne = (a) => a + 1
const multTwo = (b) => b * 2

const addOneMultTwo = compose(multTwo, addOne);
console.log(addOneMultTwo(5), 12);