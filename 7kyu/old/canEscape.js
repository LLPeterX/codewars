/* 
7kyu - Hurry up, the walls are closing in!
https://www.codewars.com/kata/63ab271e96a48e000e577442/train/javascript

Учитывая список стен, приближающихся к вам, сможете ли вы преодолеть эти стены, не получив удара?

Input: массив из 2-х элементов, каждый из которых = расстояния до центра команты с каждой стороны
Output: return a boolean indicating whether it is possible to run past the walls without being hit.

Условия:
* Вы находитесь с левой стороны в центре комнаты
* Вы хотите добраться до правой стороны.
* Вы можете двигаться только по прямой линии через комнату
* Стены приближаются к вам с обеих сторон комнаты
* Стены останавливаются, как только достигают центра комнаты.
* Вы и стены двигаетесь с одинаковой скоростью
* Вас ударит стена, если вы находитесь на той же плитке, что и стена
* Если стена достигает клетки перед вами, вы больше не можете пройти мимо этой стены

*/

function canEscape(walls) {
  let pos = 0;
  while (pos < walls.length) {
    for (let i = 0; i < walls.length; i++) {
      walls[i][0]--;
      walls[i][1]--;
    }
    if (walls.some(([l, r], i) => (l <= 0 || r <= 0) && pos <= i)) return false;
    pos++;
  }
  return true;
}

console.log(canEscape([[7, 7], [7, 7], [7, 7], [7, 7]]), true);
console.log(canEscape([[2, 2], [3, 3], [4, 4]]), true);
console.log(canEscape([[2, 8], [7, 3], [6, 4]]), true);
console.log(canEscape([[2, 2], [3, 3], [3, 4]]), false);
console.log(canEscape([[7, 7], [0, 0], [7, 7]]), false);

// other

/* 
canEscape=w=>w.every(([a,b],i)=>++i<a&&i<b)
*/

