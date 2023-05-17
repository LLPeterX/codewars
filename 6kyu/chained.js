/* 
6kyu - Unary function chainer
https://www.codewars.com/kata/54ca3e777120b56cb6000710/train/javascript

Your task is to write a higher order function for chaining together a list 
of unary functions. In other words, it should return a function that does a left fold on the given functions.

chained([a,b,c,d])(input) Should yield the same result as d(c(b(a(input))))
*/

function chained(functions) {
  return function (arg) {
    let x = functions[0](arg);
    for (let i = 1; i < functions.length; i++) {
      x = functions[i](x);
    }
    return x;
  };
}

function f1(x) { return x * 2 }
function f2(x) { return x + 2 }
function f3(x) { return Math.pow(x, 2) }
function f4(x) { return x.split("").concat().reverse().join("").split(" ") }
function f5(xs) { return xs.concat().reverse() }
function f6(xs) { return xs.join("_") }

function doTest(functions, arg, expected) {
  const actual = chained(functions)(arg);
  console.log(actual, expected);
}

doTest([f1, f2, f3], 0, 4);
doTest([f1, f2, f3], 2, 36);
doTest([f3, f2, f1], 2, 12);
doTest([f4, f5, f6], "lorem ipsum", "merol_muspi");

// best
/* 
function chained(functions) {
  return function(input){
    return functions.reduce(function(input, fn){ return fn(input) }, input);
  }
}
*/

/* 
function chained(functions) {
  return input => functions.reduce((res, func) => func(res), input);
}
*/