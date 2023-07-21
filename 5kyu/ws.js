/* 
5kyu - One Line Task: What century is it?
https://www.codewars.com/kata/62a8c5d9936a4a005c0b6a32/train/javascript

Write a function that determines the century by the number(year) passed to it.
Your function must be shorter than 75 characters

Note:
- Math methods ( ceil, round, floor ) disabled.
- The input values can be from 1 to 99999999.
- This kata has several solutions!

Examples:
Year	Century
1	      1st
101	    2nd
201	    3rd
1000	  10th
1001	  11th
1101	  12th
1201	  13th
1301	  14th
2000	  20th
2001	  21st
3101	  32nd
4201	  43rd
5301	  54th
220000	2200th
220001	2201st
220101	2202nd
220201	2203rd
220301	2204th
*/

//...........................................................................V << на этом месте должен заканчиваться код (закомментированный)
// from https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
//ws=(n,s=100,j=~~(n/s),k=j+(n/s!=j),v=k%s,z=['th','st','nd','rd'])=>`${k}${z[(v-20)%10]||z[v]||z[0]}`
// L=100. Надо 75!
// надо сократить K - избавиться от j
// from https://stackoverflow.com/questions/52030180/getting-century-from-year
//   century = Math.floor((year-1)/100) + 1
//   (по идее century = Math.ceil(year/100)), но Math.ceil() запрещен
//ws = (n, s = 100, k = ~~((n - 1) / s) + 1, v = k % s, z = ['th', 'st', 'nd', 'rd']) => `${k}${z[(v - 20) % 10] || z[v] || z[0]}`;
//ws=(n,k=~~((n-1)/100)+1,v=k%100,z=['th','st','nd','rd'])=>`${k}${z[(v-20)%10]||z[v]||z[0]}`;
// L=90 . Надо 75
// убираем ${}
//ws=(n,k=~~((n-1)/100)+1,v=k%100,z=['th','st','nd','rd'])=>k+z[(v-20)%10]||z[v]||z[0]);
// L=87. Надо 75
// другой алгортим для th-st-nd-rd
//ws=(n,k=~~((n-1)/100)+1,v=k%100)=>k+["th","st","nd","rd"][(v>3&&v<21)||v%10>3?0:v%10]
// L=85. Надо 75
// декремент
//ws=(n,k=~~(--n/100)+1,v=k%100)=>k+["th","st","nd","rd"][(v>3&&v<21)||v%10>3?0:v%10]
//ws = (n, k = ~~(--n / 100) + 1, v = k % 100) => k + ["th", "st", "nd", "rd"][v > 3 && v < 21 || v % 10 > 3 ? 0 : v % 10]
// L=83. Надо 75
//ws=(n,k=~~(--n/100)+1,v=k%100)=>k+["th","st","nd","rd"][v>3&&v<21||v%10>3?0:v%10]
//ws = (n, k = ~~(--n / 100) + 1, v = k % 100) => k + ["th", "st", "nd", "rd"][v > 3 && v < 21 || v % 10 > 3 ? 0 : v % 10]
ws=(n,k=~~(--n/100)+1,v=k%100)=>k+["th","st","nd","rd"][v>3&&v<21||v%10>3?0:v%10]
// L=81. Надо 75
// Всё, я сдался...


console.log(ws(1), '1st')
console.log(ws(101), '2nd')
console.log(ws(201), '3rd')

console.log(ws(1000), '10th')
console.log(ws(1001), '11th')
console.log(ws(1101), '12th')
console.log(ws(1201), '13th')
console.log(ws(1301), '14th')

console.log(ws(2000), '20th')
console.log(ws(2001), '21st')
console.log(ws(3101), '32nd')
console.log(ws(4201), '43rd')
console.log(ws(5301), '54th')

console.log(ws(220000), '2200th')
console.log(ws(220001), '2201st')
console.log(ws(220101), '2202nd')
console.log(ws(220201), '2203rd')
console.log(ws(220301), '2204th')

// console.log(Math.log10(9) & 1)
// console.log(Math.log10(11) & 1)
// console.log(Math.log10(19))
// console.log(Math.log10(20))
// console.log(Math.log10(21))

