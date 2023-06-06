/* 
7kyu - Cubes in the box
https://www.codewars.com/kata/61432694beeca7000f37bb57/train/javascript

Your job is to write a function f(x,y,z) to count how many cubes of any size can fit inside a x*y*z box. 
For example, a 2*2*3 box has 12 1*1*1 cubes, 2 2*2*2 cubes, so a total of 14 cubes in the end. 

3*4*2 = 24(1) + 

*/

function f(x, y, z) {
  const min = Math.min(x, y, z)
  let sum = 0
  for (let i = 0; i < min; ++i) {
    sum += (x - i) * (y - i) * (z - i)
  }
  return sum
}