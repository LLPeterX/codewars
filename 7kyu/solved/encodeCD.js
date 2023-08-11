/* 
7kyu - Encode data on CD (Compact Disc) surface
https://www.codewars.com/kata/643a47fadad36407bf3e97ea/train/javascript

Дано число.
Декодировать его в дорожки CD побитно: 
- 1: то должен быть переход L->P или P->L
- 0: оставить предыдущую букву

P-ямки, L-выпуклости на поверхности CD.
Начинается всегда с P.

Вернуть 9 букв

*/

// first variant
/*
function encodeCD(n) {
  let bin = [...(n.toString(2).padStart(8, '0'))].reverse();
  let result = "P";
  for (let d of bin) {
    if (d === '1') {
      result += result.at(-1) === 'P' ? 'L' : 'P';
    } else {
      result += result.at(-1);
    }
  }
  return result;
}
*/

//compact variant
const encodeCD = (n) =>
  //[...(n.toString(2).padStart(8, '0'))].reverse().reduce((r, v) => r + (v === '1' ? (r.at(-1) === 'P' ? 'L' : 'P') : r.at(-1)), 'P');
  [...(n.toString(2).padStart(8, '0'))].reduceRight((r, v) => r + (v === '1' ? (r.at(-1) === 'P' ? 'L' : 'P') : r.at(-1)), 'P');

console.log(encodeCD(5), "PLLPPPPPP")  //   5 = 00000101
console.log(encodeCD(16), "PPPPPLLLL")  //  16 = 00010000
console.log(encodeCD(63), "PLPLPLPPP")  //  63 = 00111111
console.log(encodeCD(222), "PPLPLPPLP")  // 222 = 11011110
