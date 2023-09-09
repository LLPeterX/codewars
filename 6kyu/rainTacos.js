/* 
6kyu - It's Raining Tacos
https://www.codewars.com/kata/64f4ef596f222e004b877272/train/javascript

A line of tacos is falling out of the sky onto the landscape.

Your task is to predict what the landscape will look like when the tacos fall on it.
*/

function rainTacos(landscape) {
  if (landscape.length === 0) return "";
  let matrix = landscape.split('\n').map(row => [...row]);
  const W = matrix[0].length;
  let k = 0, x, y;
  for (x = 0; x < W; x++) {
    // бросаем буквы вниз, пока не дойдем до непустой клетки или до самого низа
    y = 0;
    while (y < matrix.length && matrix[y][x] === ' ') y++;
    // проверяем, что можем вообще что-то бросить 
    // т.к. может быть случай, когда преграда на самом верху
    if (y > 0) matrix[y - 1][x] = 'TACO'[k % 4];
    k++;
  }
  return matrix.map(row => row.join``).join("\n");
}

