/* 
6kyu - ASCII Fun #1: X- Shape
https://www.codewars.com/kata/5906436806d25f846400009b/train/javascript

You will get an odd integer n (>= 3) and your task is to draw an X. 
Each line is separated with \n.

Use the following characters: ■ □ For Ruby, Crystal and PHP: whitespace and o

Examples

                                     ■□□□■
            ■□■                      □■□■□
  x(3) =>   □■□             x(5) =>  □□■□□
            ■□■                      □■□■□
                                     ■□□□■

*/


function x(n) {
  let c = (n - 1) / 2;
  let result = [];
  for (let i = 0, r = 0; i < c + 1; i++, r++) {
    let row = Array(n).fill('□');
    row[c - r] = '■';
    row[c + r] = '■';
    result.push(row.join``);
    if (i) result.unshift(row.join``);
  }
  return result.join("\n");
}

console.log(x(5), "\n=>\n", "■□□□■\n□■□■□\n□□■□□\n□■□■□\n■□□□■");

// best

/*
const x = (n) =>
  Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => {
      if (i === j) return '■'
      if (i === n - 1 - j) return '■'
      return '□'
    }).join('')
  ).join('\n')

*/

// cool

/* 
const       x=n=>
 [ ...      Array
  (n)]      .map
   ((_,i   )=>[
   ... Array
     (n) ].
     map((_,j)=>
    i==j    ||i==
 n-j-1?    '■':'□').
join``).     join`\n`

*/
