/* 
7kyu - T.T.T.27: Four piles of apples
https://www.codewars.com/kata/57aae4facf1fa57b3300005d

Есть N яблок, которые надо разделить на 4 кучки.
нам нужны числа X и Y.
числа в кучках:
1: x+y
2: x-y
3: x*y
4: x/y

Задано N и Y.
Надо определить, сколько яблок в каждой кучке
Если невозможно определить, то вернуть []


*/

function fourPiles(n, y) {
  for (let x = y * 2; ; x += y) {
    let add = x + y,
      sub = x - y,
      mul = x * y,
      div = x / y;
    if (add + sub + mul + div === n) return [add, sub, mul, div];
    if (add + sub + mul + div > n) return [];
  }
}

console.log(fourPiles(48, 3), [12, 6, 27, 3]);
console.log(fourPiles(100, 4), [20, 12, 64, 4]);

console.log(fourPiles(25, 4), []);
console.log(fourPiles(24, 4), []);

// best

/* 
function fourPiles(n, y) {
  const x = (n * y)/Math.pow(y + 1, 2);
  return (x % 1 != 0 || x == y || x < y) ? [] :
         [x + y, x - y, x * y, x / y];
}
*/
