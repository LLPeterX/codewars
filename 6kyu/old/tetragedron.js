/* 
6kyu - A tetrahedron of cannonballs
https://www.codewars.com/kata/530e259c7bc88a4ab9000754

Сложить треугольный тетраэдр из пушечных ядер, если длина ребра = N
Сколько ядер?

*/


// ERROR: MAXIMUM CALLSTACK EXTENDED
/* function tetrahedron(n) {
  if (n < 2) return 1;
  return n * (n + 1) / 2 + tetrahedron(n - 1);
}
 */
function tetrahedron(n) {
  let count = 0;
  if (n < 2) return 1;
  while (n) count += n * (n-- + 1) / 2;
  return count;
}


console.log(tetrahedron(20));

// best
/*
function tetrahedron(n) {
  return n*(n+1)*(n+2)/6
 }
*/

/*
function tetrahedron(n) {
  return (n ** 3 + n ** 2 * 3 + n * 2) / 6;
}
*/

/*
function tetrahedron(size) {
  return size * (size + 1) * (size + 2) / 6;
}
*/

// пиздец
/* 
var arr=[1353400,417395559,84584176417339020,84584176417339020]
var c=0
tetrahedron=()=>arr[c++]
*/