/* 
6kyu - Moves in squared strings (IV)
https://www.codewars.com/kata/56dbf59b0a10feb08c000227/train/javascript
*/

const makeArray = (strng) => strng.split('\n').map(e => e.split(''));

function diag2Sym(strng) {
  return makeArray(rot90Counter(strng)).map(e => e.reverse().join('')).join('\n');
}

function rot90Counter(strng) {
  let a = makeArray(strng), n = a[0].length;
  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - i - 1; j++) {
      let tmp = a[i][j];
      a[i][j] = a[j][n - i - 1];
      a[j][n - i - 1] = a[n - i - 1][n - j - 1];
      a[n - i - 1][n - j - 1] = a[n - j - 1][i];
      a[n - j - 1][i] = tmp;
    }
  }
  return a.map(row => row.join('')).join('\n');
}

function selfieDiag2Counterclock(strng) {
  let origArray = makeArray(strng), diag = makeArray(diag2Sym(strng)), rotated = makeArray(rot90Counter(strng));
  return origArray.map((e, i) => `${e.join('')}|${diag[i].join('')}|${rotated[i].join('')}`).join('\n');
}

function oper(fct, s) {
  return fct(s);
}

//-------------------
//console.log(rot90Counter("EcGcXJ\naaygcA\nNgIshN\nyOrCZE\neBEqpm\nNkxCgw"),"JANEmw\nXchZpg\ncgsCqC\nGyIrEx\ncagOBk\nEaNyeN");
console.log('--rotate--');
console.log(oper(rot90Counter, "EcGcXJ\naaygcA\nNgIshN\nyOrCZE\neBEqpm\nNkxCgw"), "JANEmw\nXchZpg\ncgsCqC\nGyIrEx\ncagOBk\nEaNyeN")
//let data = "abcd\nefgh\nijkl\nmnop";
//console.log(diag2Sym(data));
console.log('--diag--');
console.log(oper(diag2Sym, "LmvLyg\nDKELBm\nylJhui\nXRXqHD\nzlisCT\nhPqxYb"), "bTDimg\nYCHuBy\nxsqhLL\nqiXJEv\nPlRlKm\nhzXyDL");
console.log('--SDC--');
console.log(oper(selfieDiag2Counterclock, "NJVGhr\nMObsvw\ntPhCtl\nsoEnhi\nrtQRLK\nzjliWg"), "NJVGhr|gKilwr|rwliKg\nMObsvw|WLhtvh|hvthLW\ntPhCtl|iRnCsG|GsCnRi\nsoEnhi|lQEhbV|VbhEQl\nrtQRLK|jtoPOJ|JOPotj\nzjliWg|zrstMN|NMtsrz");

// best

/*
const modulo = (a, b) => a % b < 0 ? b + a % b : a % b;
const to2dArray = str => str.split("\n").map(line => line.split(""));
const toStr = arr2d => arr2d.map(row => row.join("")).join("\n");
const mutate = (arr2d, xFn, yFn) => arr2d.map((row, y) => row.map((_, x) => arr2d[modulo(yFn(x, y), arr2d.length)][modulo(xFn(x, y), row.length)]));

const diag2Sym = strng => toStr(mutate(to2dArray(strng), (x, y) => -y - 1, (x, y) => -x - 1));
const rot90Counter = strng => toStr(mutate(to2dArray(strng), (x, y) => -y - 1, (x, y) => x));
function selfieDiag2Counterclock(strng) {
  let diagLines = diag2Sym(strng).split("\n");
  let rotLines = rot90Counter(strng).split("\n");
  return strng.split("\n").map((line, i) => line + "|" + diagLines[i] + "|" + rotLines[i]).join("\n");
}
const oper = (fct, s) => fct(s);

*/

/*
function revStr(strng) {
    return [...strng].reverse().join('');
}
function rot90Counter(strng) {
    var a = strng.split("\n").map(function(x) { return revStr(x); }).map(function(x) { return x.split(""); });
    var b = a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
    return b.map(function(x) { return x.join(""); }).join("\n");
}
function diag2Sym(strng) {
    return rot90Counter(strng).split("\n").map(function(x) { return revStr(x); }).join("\n");
}
function selfieDiag2Counterclock(strng) {
    var newstr2 = diag2Sym(strng).split("\n");
    var newstr3 = rot90Counter(strng).split("\n");
    return strng.split("\n").map(function(x, i) { return x + "|" + newstr2[i] + "|" + newstr3[i]; }).join("\n");
}
 function oper(fct, s) {
    return fct(s);
}
*/
