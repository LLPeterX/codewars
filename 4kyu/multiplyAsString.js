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
    let remainder = Math.floor(res[i] / 10);
    res[i] = digit;

    if (res[i + 1]) res[i + 1] += remainder;
    else if (remainder != 0) res[i + 1] = remainder;
  }
  let result = res.reverse().join``;
  while (result[0] === '0' && result.length > 1) result = result.slice(1);
  return result;
}

console.log(multiply("28", "341"), "9548");
console.log(multiply("123", "456"), "56088"); // FAIL

