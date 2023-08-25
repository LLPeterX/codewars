/* 
6kyu - Custom FizzBuzz Array
https://www.codewars.com/kata/5355a811a93a501adf000ab7/train/javascript

Write a function that returns a (custom) FizzBuzz sequence of the numbers 1 to 100.

The function should be able to take up to 4 arguments:
- The 1st and 2nd arguments are strings, "Fizz" and "Buzz" by default;
- The 3rd and 4th arguments are integers, 3 and 5 by default.
- Thus, when the function is called without arguments, it will return the classic FizzBuzz sequence up to 100:
*/

function fizzBuzzCustom(stringOne = "Fizz", stringTwo = "Buzz", numOne = 3, numTwo = 5) {
  // let result = [];
  // for (let i = 1; i <= 100; i++) {
  //   if (i % (numOne * numTwo) === 0) {
  //     result.push(stringOne + stringTwo);
  //   } else if (i % numOne === 0) {
  //     result.push(stringOne);
  //   } else if (i % numTwo === 0) {
  //     result.push(stringTwo);
  //   } else {
  //     result.push(i);
  //   }
  // }
  // return result;
  return Array.from({ length: 100 }, (_, i) => {
    if ((i + 1) % (numOne * numTwo) === 0) return stringOne + stringTwo;
    else if ((i + 1) % numOne === 0) return stringOne;
    else if ((i + 1) % numTwo === 0) return stringTwo;
    return i + 1;
  })
};

console.log(fizzBuzzCustom('Hey', 'There'));