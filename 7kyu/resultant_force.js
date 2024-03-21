/* 
7kyu - Calculate the resultant force
https://www.codewars.com/kata/5b707fbc8adeaee7ac00000c/train/javascript

Given two forces (F1 and F2 ) and the angle F2 makes with F1 find the resultant force R and the angle it makes with F1.

input
Three values :
- F1
- F2 making an angle θ with F1
- angle θ


output: 
An array consisting of two values :
- R (the resultant force)
- angle R makes with F1 (φ)

notes:
Units for each of the following are given as under :
  F1 = Newton
  F2 = Newton
  angle θ = degree
  R = Newton
  φ = degree
*/

// from https://exir.ru/termeh/slogenie_dvuh_sil_20.htm
const solution = (force1, force2, theta) => {
  let force = Math.sqrt(force1 ** 2 + 2 * force1 * force2 * Math.cos(theta * Math.PI / 180) + force2 ** 2);
  let angle = Math.asin(force2 * Math.sin(theta * Math.PI / 180) / force) * 180 / Math.PI;
  return [force, angle];
}


// ok
let [[R1, P1], [R2, P2]] = [solution(20, 10, 120), solution(110, 45, 45)]
console.log(R1, 17.320508075688775)
console.log(P1, 29.999999999999996)
console.log(R2, 145.34564710973225)
console.log(P2, 12.645904708568862)
// FAIL
console.log(solution(153, 161, 195), ['?', -93.45262732619734])

