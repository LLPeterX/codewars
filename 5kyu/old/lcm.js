/* 
5kyu - Least Common Multiple
https://www.codewars.com/kata/5259acb16021e9d8a60010af/train/javascript

Write a function that calculates the least common multiple of its arguments; each argument is assumed to be a non-negative integer.
In the case that there are no arguments (or the provided array in compiled languages is empty), return 1.
*/

var gcd = function (arr) {
  let n = arr.length, a = Math.abs(arr[0]);
  for (let i = 1; i < n; i++) {
    var b = Math.abs(arr[i]), c = a;
    while (a && b) { a > b ? a %= b : b %= a; }
    a = Math.abs(c * arr[i]) / (a + b);
  }
  return a;
}

var lcm = function () {
  if (!arguments || arguments.length === 0) return 1;
  if (arguments.length === 1) return arguments[0];
  var n = arguments.length, a = Math.abs(arguments[0]);
  for (var i = 1; i < n; i++) {
    var b = Math.abs(arguments[i]), c = a;
    while (a && b) { a > b ? a %= b : b %= a; }
    a = Math.abs(c * arguments[i]) / (a + b);
  }
  return a;
};

console.log(lcm(2, 5), 10);
console.log(lcm(2, 3, 4), 12);
console.log(lcm(9), 9);

//best

/*
var lcm = function () {
  function gcd(a,b) {
    if (a == 0) return b;
    return gcd(b%a, a);
  }
  return Array.prototype.slice.apply(arguments).reduce(function(a,b) {return a*b / gcd(a,b);}, 1);
};
*/

/* 
function lcm(...numbers) {
  return numbers.reduce((a, b) => Math.abs(a * b) / gcd(a, b));
};

function gcd(...numbers) {
  return numbers.reduce((a, b) => b === 0 ? a : gcd(b, a % b));
}
*/

