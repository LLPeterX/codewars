/* 
https://www.codewars.com/kata/57d2807295497e652b000139/train/javascript
Дан массив чисел.
Вернуть массив средних двух соседних элементов
 */

// function averages(numbers) {
//   let res=[];
//   for(let i=0; i<numbers.length-1; i++) {
//     res.push((numbers[i]+numbers[i+1])/2);
//   }
//   //return res;
//   return numbers.map((v,i) => (v+numbers[i-1])/2).slice(1);
  
// }

const averages = (numbers) => numbers ? numbers.map((v,i) => (v+numbers[i-1])/2).slice(1) : [];

console.log(averages([1, 3, 5, 1, -10])); // [2, 4, 3, -4.5]
console.log(averages([2, -2, 2, -2, 2])); // [0,0,0,0]

//my best
/* 
const averages = numbers =>  numbers ? numbers.slice(1).map((val, idx) => (val + numbers[idx]) / 2) : [];

const averages = ($) => $ === null ? [] : $.slice(1).map( (el, i)=> (el + $[i]) / 2 )

*/