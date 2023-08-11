/* 
7kyu - Sort rectangles and circles by area II
https://www.codewars.com/kata/5a1ebc2480171f29cf0000e5/train/javascript

*/
const getArea = e => Array.isArray(e) ? e[0] * e[1] : Math.PI * e * e;
const sortByArea = array => [...array].sort((a, b) => getArea(a) - getArea(b));

console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]), [[1.342, 3.212], 1.23, [4.23, 6.43], 3.444]);
console.log(sortByArea([[2, 5], 6]), [[2, 5], 6]);
console.log(sortByArea([]), []);