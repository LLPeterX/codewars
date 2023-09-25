/* 
6kyu - Reverse polish notation calculator
https://www.codewars.com/kata/52f78966747862fc9a0009ae

Your job is to create a calculator which evaluates expressions in Reverse Polish notation.
For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 
in normal notation) should evaluate to 14.

Valid operations are +, -, *, /.
*/

// solution based on https://dev.to/subinedge/evaluate-reverse-polish-notation-expressions-using-javascript-algorithms-jmb

function calc(expr) {
  if (!expr) return 0;
  const op = {
    '+': (a, b) => a + b,
    '-': (a, b) => b - a,
    '*': (a, b) => a * b,
    '/': (a, b) => b / a
  }
  let a = expr.split(' '), stack = [];
  for (let i = 0; i < a.length; i++) {
    stack.push(/\d+/g.test(a[i]) ? +a[i] : op[a[i]](stack.pop(), stack.pop()));
    // if (/\d+/g.test(a[i])) {
    //   stack.push(+a[i]);
    // } else {
    //   // let a = stack.pop();
    //   // let b = stack.pop();
    //   stack.push(op[a[i]](stack.pop(), stack.pop()));
    // }
  }
  return stack.pop();
}

console.log(calc('5 1 2 + 4 * + 3 -'), 14);

// cool
/* 
function calc(s) {
  var r=/(-?[\d\.]+) (-?[\d\.]+) ([-+\*\/])/
  while(s!=""&&r.test(s)) s=s.replace(r,(_,a,b,op)=>eval(a+op+b))
  return +s.match(/-?[\d\.]+$/)
}
*/

/* 
function calc (expr) {
  return expr === '' ? 0 : expr.split(' ').reduce(function (stack, token) {
    return (token.match(/\d+/)) ? [parseFloat(token)].concat(stack) : [{
      '+': function (b, a) { return a + b; },
      '-': function (b, a) { return a - b; },
      '*': function (b, a) { return a * b; },
      '/': function (b, a) { return a / b; }
    }[token].apply(null, stack)].concat(stack.slice(2));
  }, [])[0];
}
*/