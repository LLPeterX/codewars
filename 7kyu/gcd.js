/* 
7kyu Greatest common divisor
https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/javascript
 */
function mygcd(x,y){
  x = Math.abs(x);
  y = Math.abs(y);
  if (y > x) {
    [x,y] = [y,x];
  }
  while (true) {
      if (y == 0) { return x; }
      x %= y;
      if (x == 0) { return y; }
      y %= x;
  }
}

console.log(mygcd(30,12)); // 6

// best (recursion)
/* 
function mygcd(x,y){
  return y == 0 ? x : mygcd(y, x % y)
}
*/

//best (iterative)
/* 
function mygcd(x, y) {
  while(y) var t = y, y = x % y, x = t;
  return x;
}
*/