/* 
7kyu - MOD 256 without the MOD operator
https://www.codewars.com/kata/581e1d083a4820eb4f00004f/train/javascript


*/

function mod256WithoutMod(number) {
  while (Math.abs(number) >= 256) {
    number -= 256 * Math.sign(number);
  }
  return number;
}

console.log(mod256WithoutMod(254), 254);
console.log(mod256WithoutMod(256), 0);
console.log(mod256WithoutMod(258), 2);
console.log(mod256WithoutMod(-254), -254);
console.log(mod256WithoutMod(-256), 0);
console.log(mod256WithoutMod(-258), -2);

// best
/* 
function mod256WithoutMod(number)
{
  if(number < 0)
  {
    return -mod256WithoutMod(-number);
  }
  return number & 255;
}
*/

/* 
function mod256WithoutMod(number) {
  const n = number & 255
  return number * n < 0 ? n - 256 : n
}
*/

/* 
const mod256WithoutMod = n => Math.sign(n)*(Math.abs(n)&255);
*/

/* 
function mod256WithoutMod(number)
{
    return number - (~~(number/256))*256;
}
*/