/* 
7kyu Find the stray number
https://www.codewars.com/kata/57f609022f4d534f05000024

Дан массив. Все  числа одинаковые кроме одного. Найти это число
*/

// Если V="одинаковые" числа, x-искомое, L=длина массива, S - сумма его чисел, то
// V*(L-1)+x = S
// x = S-V(L+1), причем V неизвестно - м.б. первый, а может второй 
// function stray(numbers) {
//    let sum = numbers.reduce((sum, v) => sum+v,0);
//    let x = sum - numbers[0]*(numbers.length-1);
//    return x<0 ? numbers[0] : x;
// }

/* 
// нельзя - таймаут
function stray(numbers) {
  return numbers.filter(a=>numbers.filter(b=>b===a).length==1)[0];
}
 */

// function stray(numbers) {
//   let nums = new Map();
//   for(let n of numbers) {
//     if(nums.get(n)) {
//       nums.set(n, nums.get(n)+1);
//     } else {
//       nums.set(n, 1);
//     }
//   }
//   return Array.from(nums).filter(a => a[1]===1)[0][0];
// }

function stray(numbers) {
  return Array.from(numbers.reduce((map, v) => map.set(v, map.get(v) ? map.get(v)+1 : 1), new Map())).filter(a => a[1]===1)[0][0];
}


console.log(stray([1,1,2])); // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); // 3
console.log(stray([ 8, 1, 1, 1, 1, 1, 1 ])); // 8
console.log(stray([ 1, 8, 8, 8, 8 ])); // 1

// best
/* 
const stray = nums => nums.reduce((a, b) => a ^ b);
*/

/* 
function stray(numbers) {
  var a = numbers.sort();
  
  if(a[0] != a[1]) {
    return a[0]
  } 
  return a[a.length-1]
}
*/