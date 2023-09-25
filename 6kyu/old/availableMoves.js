/* 
6kyu - The queen on the chessboard
https://www.codewars.com/kata/5aa1031a7c7a532be30000e5/train/javascript

Ферзя можно перемещать на любое количество незанятых клеток по прямой линии 
по вертикали, горизонтали или диагонали, комбинируя таким образом 
ходы ладьи и слона. Если на пути стоит вражеская фигура, верзь берет её.

Напишите функцию availableMoves(position), которая возвращает 
возможные ходы шахматной ферзя. 
Возвращаемое значение должно быть массивом возможных ходов, 
отсортированных по алфавиту, исключая начальную позицию.
*/

function availableMoves(position) {
  if (!position || !/^[A-H][1-8]$/.test(position)) return [];
  const moveMap = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]], H = "ABCDEFGH";
  let result = [];
  let x0 = H.indexOf(position[0]), y0 = position.slice(-1) - 1;
  for (let [dx, dy] of moveMap) {
    let x = x0 + dx, y = y0 + dy;
    while (x >= 0 && x < 8 && y >= 0 && y < 8) {
      result.push(`${H[x]}${y + 1}`);
      x += dx, y += dy;
    }
  }
  return result.sort();
}
