/* 
7kyu - Fractran Interpreter
https://www.codewars.com/kata/5ebae674014091001729a9d7/train/javascript
*/

function fractran(code, n) {
  let fractions = code.split(' ').map(e => e.split("/").map(BigInt));
  for (let j = 0; j < 1000; j++) {
    let f = fractions.find((e, i) => n % e[1] === 0n);
    if (!f) break;
    n = n * f[0] / f[1];
  }
  return n;
}

console.log(fractran("3/4 14/9 11/2 2/5", 160n), 231n);
console.log(fractran("455/33 11/13 1/11 3/7 11/2 1/3", 2n ** 3n * 3n ** 4n), 5n ** 12n);
console.log(fractran("7/3 99/98 13/49 39/35 36/91 10/143 49/13 7/11 1/2 91/1", 10n), 127381246468476n);