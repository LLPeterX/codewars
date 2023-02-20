/* 
6kyu - Travelling on a Grid
https://www.codewars.com/kata/5845b080a87f768aaa00027c/train/javascript

You have an 8x8 grid with coordinates ranging from 1 to 8. 
The origin (1, 1) is in the top left corner. 
The bottom right corner is (8, 8).

You are given a string as an input which will contain the 2 coordinates in this format:
 "(x1 y1)(x2 y2)", where (x1 y1) represents point A and (x2 y2) represents point B. 
In the inputs provided, point A will always be up and to the left of point B. 
In other words, x1 < x2 and y1 < y2 will be true for every input.

Your goal is to find out the number of different paths you can take to get from point A 
to point B by moving one cell at a time either down or right.
*/

// см. https://informatics.msk.ru/mod/book/view.php?id=266&chapterid=57

function travelChessboard(s) {
  let [, ax, ay, bx, by] = s.match(/\((\d) (\d)\)\((\d) (\d)\)/);
  let W = Array(by - ay + 1).fill().map(_ => Array(bx - ax + 1).fill(1));
  for (i = 1; i <= by - ay; ++i) {
    for (j = 1; j <= bx - ax; ++j) W[i][j] = W[i][j - 1] + W[i - 1][j];
  }
  return W[by - ay][bx - ax];
}


// best
/* 
function factoral(num) {
  if (num <= 1) return 1;
  return num * factoral(num - 1);
}

function travelChessboard(s){
  var [x1, y1, x2, y2] = [s[1], s[3], s[6], s[8]];
  var right = x2 - x1;
  var down = y2 - y1;
  return factoral(right + down) / factoral(right) / factoral(down);
}
*/