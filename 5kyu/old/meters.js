/* 
5kyu - Metric Units - 1
https://www.codewars.com/kata/5264f5685fda8ed370000265/train/javascript

Your task is to write a simple function that takes a number of meters, 
and outputs it using metric prefixes.

See http://en.wikipedia.org/wiki/SI_prefix for a full list of prefixes
 */

const PFX = [
  [3, 'k'],
  [6, 'M'],
  [9, 'G'],
  [12, 'T'],
  [15, 'P'],
  [18, 'E'],
  [21, 'Z'],
  [24, 'Y'],
  [27, 'R'],
  [30, 'Q']
];

function meters(x) {
  const pfx = "kMGTPEZYRQ"; // 10^3...30 (k...Q)
  if (x < 1000) return `${x}m`;
  let p = ~~Math.log10(x);
  let k = ~~((p - 3) / 3);
  let z;
  z = x / (10 ** (p - p % 3));
  //console.log(`x=${x} p=${p} k=${k} pfx=${k} z=${z}`);
  //return [z, pfx[k]];
  return `${z}${pfx[k]}m`;
}
/*
//FINAL:
function meters(x) {
  const pfx = "kMGTPEZYRQ"; // 10^3...30 => (k...Q)
  if (x < 1000) return `${x}m`;
  let p = ~~Math.log10(x);
  let k = ~~((p-3)/3); // index in pfx
  return `${x/(10**(p-p%3))}${pfx[k]}m`;
}
*/

// best

/* 
function meters(x) {
 var count = 0;
 var DW  = ["m","km","Mm","Gm","Tm","Pm","Em","Zm","Ym"];
 while(x>=1000){
   x /= 1000;
   count++;
 }
 return x+DW[count];
}
*/

/* 
function meters(x) {
  var prefixes = ["", "k","M","G","T","P","E","Z","Y"];
  for (var i = 0; x >= 1000 && i < prefixes.length - 1; i++) x /= 1000;
  return x + prefixes[i] + "m";
}
*/