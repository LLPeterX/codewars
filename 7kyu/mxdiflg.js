/* 
7kyu - Maximum Length Difference
https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript
*/


function mxdiflg(a1, a2) {
  if (!a1.length || !a2.length) {
    return -1;
  }
  let alen1 = a1.map(e => e.length).sort((a, b) => b - a), alen2 = a2.map(e => e.length).sort((a, b) => b - a);
  return Math.max(Math.abs(alen1[0] - alen2[alen2.length - 1]), Math.abs(alen1[alen1.length - 1] - alen2[0]))
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2), 13);

//best
/*
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1
  let l1 = a1.map(str => str.length)
  let l2 = a2.map(str => str.length)
  return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}
*/