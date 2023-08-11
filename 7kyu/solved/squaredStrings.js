/* 
7kyu - Composing squared strings
https://www.codewars.com/kata/56f253dd75e340ff670002ac
*/

// function compose(s1, s2) {
//   let s1a = s1.split('\n'), s2a = s2.split('\n'), n = s1a.length, res = [];
//   for (let i = 0, j = n - 1; i < n; i++, j--) {
//     let v1 = s1a[i].slice(0, i + 1);
//     let v2 = s2a[j].slice(0, n - i);
//     res.push(v1 + v2);
//   }
//   return res.join('\n');
// }


// function compose2(s1, s2) {
//   let s1a = s1.split('\n'), s2a = s2.split('\n'), n = s1a.length, res = [];
//   for (let i = 0, j = n - 1; i < n; i++, j--) {
//     res.push(s1a[i].slice(0, i + 1) + s2a[j].slice(0, n - i));
//   }
//   return res.join('\n');
// }

function compose(s1, s2) {
  let arr1 = s1.split('\n'), arr2 = s2.split('\n'), n = arr1.length;
  return arr2.map((_, i) => arr1[i].slice(0, i + 1) + arr2[n - i - 1].slice(0, n - i)).join('\n')
}


console.log(compose("abcd\nefgh\nijkl\nmnop", "qrst\nuvwx\nyz12\n3456"), "a3456\nefyz1\nijkuv\nmnopq");
//console.log(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB"), "bNkTB\nhTrWO\nRTFVi\nCnnIj");

//best
/*
compose = (s1, s2, idx = 0) => s1.replace(/\S+/g, val => val.slice(0, idx + 1) + s2.split(`\n`).reverse()[idx].slice(0, val.length - idx++));
*/