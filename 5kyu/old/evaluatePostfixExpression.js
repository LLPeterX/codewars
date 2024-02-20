/* 
5kyu https://www.codewars.com/kata/577e9095d648a15b800000d4/train/javascript
Вычислить postfix-выражение
*/

function postfixEvaluator(string) {
  let data = string.split(' ');
  let num1, num2, stack=[];
  while(data.length>0) {
    let opx= data.shift();
    if(!isNaN(+opx)) {
      stack.push(+opx);
    } else {
      num1 = stack.pop();
      num2 = stack.pop();
      if(opx === '+') {
        stack.push(num1+num2);
      } else if(opx === '-') {
        stack.push(num2-num1);
      } else if(opx === '*') {
        stack.push(num1*num2);
      } else if(opx === '/') {
        stack.push(~~(num2/num1));
      }
    }
  }
  return stack.pop();
}

console.log(postfixEvaluator("2 3 +")); // 5
console.log(postfixEvaluator("20 40 60 + *")); // 2000 => 20 * (40 + 60
console.log(postfixEvaluator("2 3 9 4 / + *")); // 10
console.log(postfixEvaluator("3 4 9 / *")); // 0

//best
/* 
function postfixEvaluator(s) {
  while(!/^-?\d+$/.test(s)) s=s.replace(/(-?\d+) (-?\d+) ([-+\*\/])/,(_,a,b,op)=>~~(eval(a+op+b)))
  return +s
}
*/