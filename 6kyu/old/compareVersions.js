/* 
6kyu - Compare Versions
https://www.codewars.com/kata/53b138b3b987275b46000115/train/javascript

While this function worked for OS versions 10.6, 10.7, 10.8 and 10.9, 
the Operating system company just released OS version 10.10.

Karan's function fails for the new version:

  compareVersions ("10.9", "10.10");       // returns true, while it should return false

It can be assumed that version strings are non empty 
and only contain numeric literals and the character '.'.
*/

function compareVersions(version1, version2) {
  const ver = v => v.split('.').map(e => e.padStart(6, '0')).join``;
  return ver(version1) >= ver(version2);
}

console.log(compareVersions("11", "10"), true);
console.log(compareVersions("11", "11"), true);
console.log(compareVersions("10.4.6", "10.4"), true);
console.log(compareVersions("10.4", "11"), false);
console.log(compareVersions("10.4", "10.10"), false);
console.log(compareVersions("10.4.9", "10.5"), false);
console.log(compareVersions("165.124.9.60.190.87.145.27.156.29", "166.3.33.68.54.74.166"), false);

//best

/* 
const compareVersions = (v1, v2) => {
  const a1 = v1.split('.').map(Number);
  const a2 = v2.split('.').map(Number);
  for (let i = 0; i < Math.max(a1.length, a2.length); i++) {
    let n1 = a1[i] || 0, n2 = a2[i] || 0;
    if (n1 === n2) continue;
    return (n1 > n2) ? true : false;
  }
  return true;
};
*/

/* 
function compareVersions (version1, version2) {
  let v1 = version1.split(".");
  let v2 = version2.split(".");
  for (let i = 0; i < v1.length; i++) {
    if (+v1[i] > +v2[i]) { return true  }
    if (+v1[i] < +v2[i]) { return false }
  }
  return v1.length >= v2.length;
}
*/

/* 
function compareVersions (version1, version2) {
  return version1.localeCompare(version2, undefined, {numeric: true}) >= 0
}
*/