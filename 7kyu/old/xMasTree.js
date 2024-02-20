/* 
7kyu - Xmas Tree
https://www.codewars.com/kata/577c349edf78c178a1000108/train/javascript
*/

function xMasTree(n) {
  let treeBody = [], w = n * 2 - 1;
  let bottom = '_'.repeat((n - 1)) + '#' + '_'.repeat((n - 1));
  for (let i = 0, k = 1; i < n; i++, k += 2) {
    let pad = '_'.repeat((w - k) / 2);
    treeBody.push(pad + '#'.repeat(k) + pad);
  }
  treeBody.push(bottom, bottom);
  //  treeBody.push(bottom);
  return treeBody;
}

console.log(xMasTree(3), ['__#__', '_###_', '#####', '__#__', '__#__'])
console.log(xMasTree(7), ['______#______', '_____###_____', '____#####____', '___#######___', '__#########__', '_###########_', '#############', '______#______', '______#______'])
// console.log(xMasTree(2), ['_#_', '###', '_#_', '_#_'])
// console.log(xMasTree(4), ['___#___', '__###__', '_#####_', '#######', '___#___', '___#___'])
// console.log(xMasTree(6), ['_____#_____', '____###____', '___#####___', '__#######__', '_#########_', '###########', '_____#_____', '_____#_____'])

//best

/*
let xMasTree = n => {
  let r = [];
  for (let i = 0; i < n; i++) r.push(Array(n - i).join('_') + Array(2 * i + 2).join('#') + Array(n - i).join('_'));
  r.push(Array(n).join('_') + '#' + Array(n).join('_'));
  r.push(Array(n).join('_') + '#' + Array(n).join('_'));
  return r;
}
*/

