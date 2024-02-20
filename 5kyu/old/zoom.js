/* 
5kyu - Zoom
https://www.codewars.com/kata/56e6705b715e72fef0000647

Complete the pattern, using the special characters ■   □
In this kata, let's us draw a square, with a zoom effect.

full zoom: 5,9,[13,17,21],25     (~~(n/2)%2 === 0) - тут всё OK
partial:   3,7,11,15,19,23,27 - для N>3 - FAIL.

0:■■■■■ k=2
1:■□□□■ k =0
2:■□■□■ // center
3:■□□□■
4:■■■■■

zoom(7) half=3 => повторяем как для half=2

□□□□□□□ y=0
□■■■■■□ y=1
□■□□□■□ y=2
□■□■□■□ center
□■□□□■□
□■■■■■□
□□□□□□□

zoom(25)

  0:■■■■■■■■■■■■■■■■■■■■■■■■■ y=11
  1:■□□□□□□□□□□□□□□□□□□□□□□□■ y=10
  2:■□■■■■■■■■■■■■■■■■■■■■■□■ y=9
  3:■□■□□□□□□□□□□□□□□□□□□□■□■ y=8
  4:■□■□■■■■■■■■■■■■■■■■■□■□■ y=7 L=17 (left=8)
  5:■□■□■□□□□□□□□□□□□□□□■□■□■ y=6
  6:■□■□■□■■■■■■■■■■■■■□■□■□■ y=5 L=13 (left=6)
  7:■□■□■□■□□□□□□□□□□□■□■□■□■ y=4
  8:■□■□■□■□■■■■■■■■■□■□■□■□■ y=3 L=9 (left=4)
  9:■□■□■□■□■□□□□□□□■□■□■□■□■ y=2
 10:■□■□■□■□■□■■■■■□■□■□■□■□■ y=1 L=5 (left=2)
 11:■□■□■□■□■□■□□□■□■□■□■□■□■ y=0
 12:■□■□■□■□■□■□■□■□■□■□■□■□■ // center = ~~(n/2)
 // дальше reverse() предыдущего

*/

function zoom(n) {
  const half = Math.floor(n / 2); // center of square
  if (n === 1) return '■';
  const matrix = Array.from({ length: half }, () => Array(half).fill('□')); // 1/4 of full square
  let centralRow = Array.from({ length: n }, (_, i) => ['■', '□'][(i + half % 2) % 2]);
  for (let row = 0; row < half; row++) {
    let y = half - row - 1;
    let centralChar;
    if (row % 2 == 0) {
      centralChar = '□';
      // for (let i = half % 2; i < half - row; i += 2) {
      //   matrix[y][i] = ['■', '□'][(i + half % 2) % 2];
      // }
    } else {
      centralChar = '■';
      // for (let i = half % 2; i < half - row; i += 2) {
      //   matrix[y][i] = ['■', '□'][(i + half % 2) % 2];
      // }
      for (let i = half - 1, n = 0; i >= 0 && n < row + 1; i--, n++) {
        matrix[y][i] = '■';
      }
    }
    for (let i = half % 2; i < half - row; i += 2) {
      matrix[y][i] = ['■', '□'][(i + half % 2) % 2];
    }

    matrix[y] = [...matrix[y], centralChar, ...matrix[y].reverse()];
  }
  return [...matrix, centralRow, ...matrix.reverse()].map(row => row.join('')).join("\n");
}


console.log(zoom(3)); // ok
console.log(zoom(5)); // ok
console.log(zoom(7)); // FAIL
console.log(zoom(9)); // OK
console.log(zoom(25)); // OK

//console.log('□■■■■■□'.length);

// best
/* 
zoom=(a,b=a>>1,c=a-1)=>[...Array(a)].map((_,y)=>[...Array(a)].map((_,x)=>y==x||y+x==c||x>(d=b-Math.abs(c/2-y))&&x<c-d?y%2==b%2?'■':'□':x%2==b%2?'■':'□').join``).join`\n`
*/

/* 
function zoom(n) {
  var pattern = "";
  var center = (n-1)/2;
  for (var y = 0; y < n; y++) {
    for (var x = 0; x < n; x++) {
      var d = Math.max(Math.abs(x-center), Math.abs(y-center));
      pattern += (d % 2) ? "□" : "■";
    }
    if (y < n - 1) pattern += "\n";
  }
  return pattern;
}
*/

/* 
function zoom(n) {
  let c = '□', s = ['■']
  for (let i = 3; i <= n; i += 2) {
    s = [].concat(c.repeat(i), s.map(x=>c+x+c), c.repeat(i))
    c = '□■'['■□'.indexOf(c)]
  }
  return s.join('\n')
}
*/