/* 
6kyu https://www.codewars.com/kata/550527b108b86f700000073f
Вычислить PI по формуле Лейбница
 */

function iterPi(epsilon) {
  let myPI = 1, sign=-1, divisor=3, count=1;
  while(true) {
    myPI += 1/divisor*sign;
    sign = sign < 0 ? 1: -1; // better sign = -sign
    divisor += 2;
    count ++;
    if(Math.abs(Math.PI-myPI*4) < epsilon) {
      break;
    }
  }
  //return [Math.pow(10, +epsilon.toString().split('.')[1].length), myPI*4];
  return [count, +(myPI*4).toFixed(10)];
}

console.log(iterPi(0.1));
console.log(iterPi(0.001));
console.log(iterPi(0.00001));