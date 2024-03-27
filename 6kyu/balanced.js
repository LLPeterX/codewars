/* 
6kyu - Balanced centrifuge verification
https://www.codewars.com/kata/65d8f6b9e3a87b313c76d807/train/javascript

Description
A centrifuge is a laboratory device used to separate fluids based on density. This is achieved through centrifugal force by spinning a collection of test tubes at high speeds. All holes on the centrifuge are equally distanced from their neighbouring holes and have the same distance to the center.

Task
Given a centrifuge, return whether it's balanced. A centrifuge is called balanced if the center of mass of the collection of test tubes coincides with the center of mass of the centrifuge itself. Test tubes in this kata all look the same and have the same weight.

Input
An array containing n elements representing a n-hole centrifuge. Elements can either be 0 (hole) or 1 (tube inserted).

Output
Return a boolean indicating whether the centrifuge is balanced.
*/



// через центр масс многоугольника
function balanced(centrifuge) {
  const n = centrifuge.length;
  let xc = yc = count = 0;
  for (let i = 0; i < n; i++) {
    if (centrifuge[i]) {
      xc += Math.cos(2 * Math.PI * i / n);
      yc += Math.sin(2 * Math.PI * i / n);
      count++;
    }
  }
  return count && Math.abs(xc / count) < 1e-10 && Math.abs(yc / count) < 1e-10;
}

