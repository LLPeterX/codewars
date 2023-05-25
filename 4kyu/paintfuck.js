/* 
4kyu - Esolang Interpreters #3 - Custom Paintf**k Interpreter
https://www.codewars.com/kata/5868a68ba44cfc763e00008d

2D matrix.
Valid commands in Paintfuck include:

n - Move data pointer north (up)
e - Move data pointer east (right)
s - Move data pointer south (down)
w - Move data pointer west (left)
* - Flip the bit at the current cell (same as in Smallfuck)
[ - Jump past matching ] if bit under current pointer is 0 (same as in Smallfuck)
] - Jump back to the matching [ (if bit under current pointer is nonzero) (same as in Smallfuck)

Arguments:
1) code - string, 
2) iterations - n>0 - number of iterations to be performed before the final state of the data grid is returned
3) width - width of data grid
4) height - height of data grid 

*/

function interpreter(code, iterations, width, height) {
  let x = y = 0;
  const map = Array(height).fill().map(_ => Array(width).fill(0));

  for (let i = 0; i < code.length && iterations > 0; i++) {
    switch (code[i]) {
      case 'n':
        --y;
        if (y < 0) y = height - 1;
        iterations--;
        break;
      case 's':
        y = (y + 1) % height;
        iterations--;
        break;
      case 'e':
        x = (x + 1) % width;
        iterations--;
        break;
      case 'w':
        --x;
        if (x < 0) x = width - 1;
        iterations--;
        break;
      case '*':
        map[y][x] = 1 - map[y][x];
        iterations--;
        break;
      case '[':
        if (map[y][x] === 0) {
          let c = 1, j = i + 1;
          for (; j < code.length; j++) {
            if (code[j] === '[') c++;
            if (code[j] === ']') c--;
            if (c === 0) break;
          }
          i = j;
        }
        iterations--;
        break;
      case ']':
        if (map[y][x] !== 0) {
          let c = 0, j = i;
          for (; j; j--) {
            if (code[j] === '[') c++;
            if (code[j] === ']') c--;
            if (c === 0) break;
          }
          i = j;
        }
        iterations--;
        break;
    }
  }
  return map.map(row => row.join("").padStart(width, '0')).join("\r\n");
}




// best

/* 
function interpreter(code, iterations, width, height) {
  code = code.replace(/[^nesw*\[\]]/g, '');
  const n = code.length;
  const J = {};
  for (let i = 0, p = 0, S = []; i < n; ++i)
    switch (code[i]) {
      case '[': S.push(i); break;
      case ']': p = S.pop(), J[i] = p, J[p] = i; break;
    }
  
  const M = Array.from({length: height}, _ => Array.from({length: width}, _ => 0));
  for (let i = 0, j = 0, y = 0, x = 0; i < n && j < iterations; ++i, ++j)
    switch (code[i]) {
      case 'n': if (--y == -1) y += height; break; 
      case 'w': if (--x == -1) x += width; break;
      case 's': if (++y == height) y = 0; break;
      case 'e': if (++x == width) x = 0; break;
      case '*': M[y][x] ^= 1; break;
      case '[': if (M[y][x] == 0) i = J[i]; break;
      case ']': if (M[y][x] != 0) i = J[i]; break;
    }
  return M.map(r => r.join('')).join('\r\n');
}
*/

/* 
// min: 376 chars
interpreter=(o,i,w,h)=>new Function(`d=[${new Array(h+1).join(`[${new Array(w+1).join("0,")}],`)}]
x=y=i=0;(()=>{${o.replace(/./g,(m)=>((l={n:`y=(y-1+${h})%${h};`,e:`x=(x+1)%${w};`,s:`y=(y+1)%${h};`,w:`x=(x-1+${w})%${w};`,"*":"d[y][x]=+!d[y][x];","[":"while(d[y][x] === 1){","]":"}"}[m])?`if(i++==${i}){return;}${l}`:""))}})()
return d.map((r)=>r.join('')).join('\\r\\n');`)()
*/

