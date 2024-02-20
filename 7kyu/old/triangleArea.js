/* 
7kyu - Triangle area
https://www.codewars.com/kata/59bd84b8a0640e7c49002398/train/javascript

Вычислить площать прямоугольника, заданного строкой
*/
function tArea(tStr) {
  let s = tStr.trim().split(/\n/);
  let h = s.length-1;
  let w = s[h].replace(/\./g,'').length;
  //console.log(`>> tstr=${tStr} h=${h} w=${w}`);//return[s,h,w];
  return (h*w)/2;
}

console.log(tArea('\n.\n. .\n'), 0.5);
console.log(tArea('\n.\n. .\n. . .\n'), 2);
console.log(tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n'), 32);
console.log(tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n'), 8);
// best
/* 
function tArea(tStr) {
  const side = tStr.split('\n').length - 3
  return (side * side) / 2
}
*/