/* 
6kyu - Calculate the area of a regular n sides polygon inside a circle of radius r
https://www.codewars.com/kata/5a58ca28e626c55ae000018a

Вычислить площадь многоугольника с числом сторон N, вписанного в откужность радусом R

см. https://mnogoformul.ru/nayti-ploshhad-pravilnogo-mnogougolnika
S=1/2*R*R*n*sin(360/n)
*/

function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  return +(circleRadius * circleRadius / 2 * numberOfSides * Math.sin(Math.PI * 2 / numberOfSides)).toFixed(3);
}

console.log(areaOfPolygonInsideCircle(3, 3)); // 11.691