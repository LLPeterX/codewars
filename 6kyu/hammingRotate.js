/* 
6kyu - Simple Fun #308: Hamming Rotate
https://www.codewars.com/kata/592786effb1f93349b0000b2

Даны 2 строки из битов.
Подсчтитать количество вращений вправо первой строки, при котором дистанция Хамминга минимальная
*/

function hammingRotate(a, b) {
  let dist = new Map(), ax = [...a];
  for (let i = 0; i < ax.length; i++) {
    let count = ax.reduce((s, v, k) => s + (v != b[k]), 0);
    dist.set(i, count);
    ax.unshift(ax.pop());
  }
  let min = Number.MAX_SAFE_INTEGER, ret = 0;
  for (let [key, value] of dist) {
    if (value < min) {
      min = value;
      ret = key;
    }
  }
  return ret;
}

console.log(hammingRotate("100", "001"), 2)
console.log(hammingRotate("10010011", "00100101"), 7)
console.log(hammingRotate("1", "1"), 0)
console.log(hammingRotate("01", "10"), 1)
console.log(hammingRotate("0", "0"), 0)
console.log(hammingRotate("0110010011001101", "0111100110110011"), 2)

