/* 
6kyu - Pattern 01: Merry Christmas (sometimes little bit out of time;-))
https://www.codewars.com/kata/56c30eaef85696bf35000ccf

Нарисовать елку высотой N (и ствол)

       ширина  1-е пробелы
  n=3:  5      2 
  n=6:  7      3
  n=9:  9      4
  n=12: 11     5
  n=15: 13     6 (w-1)/2
- число пробелов в началe = (w-1)/2
- как определить w ???

для N=15:
i  w    sp
----------
0  1    6
1  3    5
2  5    4

3  3    5
4  5    4
5  7    3

6  5     4
7  7     3
8  9     2

9  7     3
10 9     2
11 11    1

12 9     2
13 11    1
14 13    0 
*/


function christmasTree(n) {
  if (n < 3) return "";
  while (!Number.isInteger(n / 3)) n--;
  let str = "", w = (n * 2 / 3) + 3;
  for (let k = 0, top = 1; k < n / 3; k++, top += 2) {
    for (let i = top; i <= top + 4; i += 2) str += ' '.repeat((w - i) / 2) + '*'.repeat(i) + "\r\n";
  }
  str += ' '.repeat((w - 3) / 2) + '###';
  return str;
}

// best
/* 
function christmasTree(height){
  if(height<3){return ''};

  var tree = []
  var level = parseInt(height/3)
  var lastFloor = level * 2 + 3

  for(var i=1; i<=level; i++){
    tree.push(' '.repeat((lastFloor-i*2+1)/2) + '*'.repeat(i*2-1) + '\r\n')
    tree.push(' '.repeat((lastFloor-i*2-1)/2) + '*'.repeat(i*2+1) + '\r\n')
    tree.push(' '.repeat((lastFloor-i*2-3)/2) + '*'.repeat(i*2+3) + '\r\n')
  }
  tree.push(' '.repeat((lastFloor-3)/2) + '#'.repeat(3))
  return tree.join('')
}
*/

/* 
function christmasTree(height) {

  let levels = Math.floor(height / 3);
  let res = "";
  
  for (let i = 0; i < levels; i++) {
    for (let j = 0; j < 3; j++) {
      res += " ".repeat(levels - i - j + 1);
      res += "*".repeat(1 + 2 * i + 2 * j) + "\r\n";
    }
  }
  
  return res ? res + " ".repeat(levels) + "###" : "";
}
*/