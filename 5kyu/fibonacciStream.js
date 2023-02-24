/* 
5kyu - Fibonacci Streaming
https://www.codewars.com/kata/55695bc4f75bbaea5100016b


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
  //return Array.of(1n, 1n, 2n, 3n, 5n, 8n, 13n)[Symbol.iterator](); // note the "n"s - BigInt
}

const expected = [
  1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n, 55n,
  89n, 144n, 233n, 377n, 610n, 987n, 1597n,
  2584n, 4181n, 6765n, 10946n, 17711n, 28657n,
  46368n, 75025n, 121393n, 196418n, 317811n,
  514229n, 832040n
];

const stream = fibonacciSequence();
const actual = Array(expected.length).fill(0).map(() => stream.next().value);
console.log(actual);