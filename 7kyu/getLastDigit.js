/* 
7kyu - Find Fibonacci last digit
https://www.codewars.com/kata/56b7251b81290caf76000978/train/javascript

As you probably know, Fibonacci sequence are the numbers 
in the following integer sequence: 1, 1, 2, 3, 5, 8, 13... 

Write a method that takes the index as an argument 
and returns last digit from fibonacci number. 

Example: getLastDigit(15) - 610. 
*/

/* 
from: https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D0%BB%D0%B0_%D0%A4%D0%B8%D0%B1%D0%BE%D0%BD%D0%B0%D1%87%D1%87%D0%B8
Период чисел Фибоначчи по модулю натурального числа n называется периодом Пизано.
Периоды Пизано образуют последовательность:
1, 3, 8, 6, 20, 24, 16, 12, 24, 60, 10, 24, 28, 48, 40, 24, 36, … (последовательность A001175 в OEIS).
В частности, последние цифры чисел Фибоначчи образуют периодическую последовательность с периодом 60.

*/

function* fibonacciSequence() {
  let a = 1n, b = 1n;
  yield a;
  yield b;
  while (true) {
    let c = a + b;
    a = b;
    b = c;
    yield c;

  }
}

function getLastDigit(index) {
  // const stream = fibonacciSequence();
  // const actual = Array(60).fill(0).map(() => stream.next().value);
  // const ld = actual.map(n => String(n).at(-1)).join``;
  // console.log(ld);
  // return actual[(index - 1) % 60];
  // последние цифры 
  const ldf = "112358314594370774156178538190998752796516730336954932572910";
  return +ldf[(index - 1) % 60];
}

console.log(getLastDigit(193150), 5);
console.log(getLastDigit(300), 0);
console.log(getLastDigit(20001), 6);