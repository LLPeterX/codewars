/* 
5kyu - Product of consecutive Fib numbers
https://www.codewars.com/kata/5541f58a944b85ce6d00006a
*/

function productFib(prod) {
  function fib(n) {
    // using this: http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/fibFormula.html
    const SQR5 = Math.sqrt(5);
    return Math.round((Math.pow((1 + SQR5) / 2, n) - Math.pow((1 - SQR5) / 2, n)) * 1 / SQR5);
  }
  let num = 1;
  while (true) {
    let p1 = fib(num), p2 = fib(num + 1);
    if (p1 * p2 === prod) {
      return [p1, p2, true];
    } else if (p1 * p2 > prod) {
      return [p1, p2, false];
    } else num++;
  }
}

console.log(productFib(4895), [55, 89, true])
console.log(productFib(5895), [89, 144, false])
console.log(productFib(74049690), [6765, 10946, true])
console.log(productFib(84049690), [10946, 17711, false])
console.log(productFib(193864606), [10946, 17711, true])
console.log(productFib(447577), [610, 987, false])
console.log(productFib(602070), [610, 987, true])

//best
/*
function productFib(prod){
  var n = 0;
  var nPlus = 1;
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}
*/

/*
function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}
*/

/*
function productFib(prod){
  //cache fibonacci numbers
  var fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377,
            610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657,
            46368, 75025, 121393, 196418, 317811, 514229, 832040,
            1346269, 2178309, 3524578, 5702887, 9227465, 14930352,
            24157817, 39088169, 63245986, 102334155];


  for (var i = 0, j = fib.length; i < j; i++) {
    var x = fib[i] * fib[i + 1];

    if (x === prod) {
      return [fib[i], fib[i + 1], true];
    }
    else if (x > prod) {
      return [fib[i], fib[i + 1], false];
    }
  }
}

*/