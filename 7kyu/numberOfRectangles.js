/* 
7kyu https://www.codewars.com/kata/556cebcf7c58da564a000045/train/javascript
Дана сетка MxN. Подсчитать число прямоугольников (целые стороны)
Пример: numberOfRectangles(3, 2) == 18

*/
const numberOfRectangles = (m, n) => (m*m+m)*(n*n+n)/4;


console.log(numberOfRectangles(3,2));
console.log(numberOfRectangles(4,4));