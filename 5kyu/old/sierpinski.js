/* 
5kyu - Sierpinski's Gasket
https://www.codewars.com/kata/53ea3ad17b5dfe1946000278

Write a function that takes an integer n and returns the nth iteration of the fractal known as Sierpinski's Gasket.

0 h=1
L // 1

1 h=2
L
L L // 3

2 h=4
L
L L
L   L
L L L L // 7

3 h=8
L
L L
L   L
L L L L
L       L
L L     L L
L   L   L   L
L L L L L L L L // 15


*/
// function pascalTriangle(n) {
//   const p = [[1]]
//   while (--n) p.push(p[p.length - 1].map((n, i, a) => i ? a[i - 1] + n : 1).concat(1))
//   return p;
// }

//console.log(pascal(8));

/* function sierpinski(n) {
  if (n < 1) return "L";
  // build pascal triangle
  const p = [[1]];
  n = 2 ** n;
  while (--n) p.push(p[p.length - 1].map((n, i, a) => i ? a[i - 1] + n : 1).concat(1));
  //  console.log(p);
  //let res = ['L'];
  let str = "L\n";
  for (let i = 1; i < p.length; i++) {
    //let str = "";
    for (let j = 0; j < p[i].length; j++) {
      str += p[i][j] % 2 ? 'L ' : '  ';
    }
    //    res.push(str.trim());
    str = str.trim() + "\n";
  }
  //return res.join("\n");
  return str.trim();
} */

/* 
За основу взят треугольник Паскаля
https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle#Pascal's_triangle
вместо четных цифр - пробелы, вместо нечетных - 'L'.
Следует использовать BigInt(), т.к. в треугльнике очень большие числа при N>5
*/

function sierpinski(n) {
  if (n < 1) return "L";
  // build pascal triangle
  const p = [[1n]];
  let x = BigInt(2 ** n);
  while (--x) p.push(p[p.length - 1].map((n, i, a) => i ? a[i - 1] + n : 1n).concat(1n));
  let str = "L\n";
  for (let i = 1; i < p.length; i++) {
    for (let j = 0; j < p[i].length; j++) {
      str += p[i][j] % 2n ? 'L ' : '  ';
    }
    str = str.trim() + "\n";
  }
  return str.trim();
}

//console.log(sierpinski(3));
console.log(sierpinski(6));

// best

/* 
function sierpinski(n) {
  if (n <= 0) return "L";
  return sierpinski(n-1) + '\n' + two(sierpinski(n-1));
}

function two(str) {
  lines = str.split('\n');
  n = lines.length * 2;
  return lines.map(function(a) {return a + Array(n - a.length + 1).join(' ') + a;}, '').join('\n');
}
*/

/* 
function sierpinski(n) {
  var m = Math.pow(2,n), s = ['L'];
  
  for (var i = 1; i < m; i++){
    s.push('L');
    for (var j = 2, l = i * 2; j < l; j +=2 ){
      s[i] += ' ' + (s[i-1][j]===s[i-1][j-2]? ' ': 'L');
    }
    s[i] += ' L';
  }
  
  return s.join('\n');
}
*/


/* 
function sierpinski(n) {
  var hasil = ["L"]
  for(let i = 0; i < n; i++){
    let arr = []
    for (let x = 0; x < hasil.length; x++) arr.push(hasil[x] + Array(hasil[hasil.length-1].length-(2*x)).fill(" ").join("") + hasil[x])
    hasil = hasil.concat(arr)
  }
  return hasil.join("\n")
}
*/