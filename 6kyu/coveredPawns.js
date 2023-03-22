/* 
6kyu - Covered pawns
https://www.codewars.com/kata/597cfe0a38015079a0000006/train/javascript

Подсчитать, сколько белых пешек на шахматной доске прикрыты снизу
*/

function show(a) {
  let str = a.map(row => row.join``).join("\n");
  console.log(str);
}

function coveredPawns(pawns) {
  let count = 0;
  // создаем массив шахматной доски
  const board = Array.from({ length: 8 }, () => Array(8).fill(0));
  // заполняем его: где стоят пешки = 1
  for (let pawn of pawns) board[pawn[1] - 1][pawn[0].charCodeAt() - 97] = 1;
  // проходимся по массиву и считам те пешки, у которых слева-внизу или справа-внизу тоже есть пешка.
  // нижний ряд не считаем
  for (let y = 1; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if (board[y][x] && ((x >= 0 && board[y - 1][x - 1]) || (x < 7 && board[y - 1][x + 1]))) count++;
    }
  }
  return count;
}


// best
/* 
onst isPawnCovered = ([x0, y0], [x1, y1]) =>                                  //
  Math.abs(x0.charCodeAt() - x1.charCodeAt()) * (y0 - y1) === 1;

const coveredPawns = pawns =>                                                  // 
  pawns.filter(pawn0 => pawns.some(pawn1 => isPawnCovered(pawn0, pawn1))).length;
*/

/* 
function coveredPawns(pawns){
    var st  = "0abcdefgh0"
    return pawns.filter(a=>pawns.indexOf(st[st.indexOf(a[0])-1]+((a[1])-1))!=-1||pawns.indexOf(st[st.indexOf(a[0])+1]+((a[1])-1))!=-1).length;}
*/