/* 
5kyu - Convert PascalCase string into snake_case
https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript

"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
*/

function toUnderscore(string) {
  return ("" + string).replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}

console.log(toUnderscore("TestController"), "test_controller");
console.log(toUnderscore("MoviesAndBooks"), "movies_and_books");
console.log(toUnderscore("App7Test"), "app7_test");
console.log(toUnderscore("1"), "1");
console.log(toUnderscore(5), "5");

// best
/* 
 var toUnderscore = function(string) {
    return string.toString().split(/(?=[A-Z])/).join('_').toLowerCase();
  };
*/