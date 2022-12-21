/* 
4kyu - Multiplying numbers as strings
https://www.codewars.com/kata/55911ef14065454c75000062

Перемножить большие числа, заданные в виде строк
"123" * "456" = "56088"
"123" * "45" = "5535"
Не должно быть лидирующих нулей
*/

function multiply(a, b) {
  let digitsA = [...a].reverse().map(Number), digitsB = [...b].reverse().map(Number), m;
  const res = [];
  for (let i = 0; i < digitsA.length; i++) {
    for (let j = 0; j < digitsB.length; j++) {
      m = digitsA[i] * digitsB[j];
      res[i + j] = (res[i + j]) ? res[i + j] + m : m;
    }
  }

  for (let i = 0; i < res.length; i++) {
    let digit = res[i] % 10;
    let shift = ~~(res[i] / 10);
    res[i] = digit;
    if (res[i + 1]) res[i + 1] += shift;
    else if (shift != 0) res[i + 1] = shift;
  }
  return res.reverse().join("").replace(/^0+/g, '') || '0'
}

console.log(multiply("28", "341"), "9548");
console.log(multiply("123", "456"), "56088"); // FAIL

// best

/* 
function multiply(a, b) {
  var aa = a.split('').reverse();
  var bb = b.split('').reverse();

  var stack = [];

  for (var i = 0; i < aa.length; i++) {
    for (var j = 0; j < bb.length; j++) {
      var m = aa[i] * bb[j];
      stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
    }
  }

  for (var i = 0; i < stack.length; i++) {
    var num = stack[i] % 10;
    var move = Math.floor(stack[i] / 10);
    stack[i] = num;

    if (stack[i + 1])
      stack[i + 1] += move;
    else if (move != 0)
      stack[i + 1] = move;
  }


  return stack.reverse().join('').replace(/^(0(?!$))+/, "");
}
*/