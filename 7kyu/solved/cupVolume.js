/* 
7kyu - Volume of a cup
https://www.codewars.com/kata/56a13035eb55c8436a000041/train/javascript

Найти объем чашки.
Заданы диаметр верха, диаметр низа, и высота
*/


function cupVolume(d1, d2, height) {
  let v = +(Math.PI * height * ((d1 / 2) ** 2 + (d1 * d2) / 4 + (d2 / 2) ** 2) / 3).toFixed(2);
  return v;
}

console.log(cupVolume(1, 1, 1), 0.79);
console.log(cupVolume(10, 8, 10), 638.79);
console.log(cupVolume(1000, 1000, 1000), 785398163.4);
console.log(cupVolume(13.123, 123.12, 1), 4436.57);
console.log(cupVolume(5, 12, 31), 1858.51);

// best
/* 
const cupVolume = (d1, d2, h) => +(h / 12 * Math.PI * (d1 ** 2 + d1 * d2 + d2 ** 2)).toFixed(2);
*/