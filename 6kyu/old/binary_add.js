/* 
6kyu - Adding Binary Numbers
https://www.codewars.com/kata/55c11989e13716e35f000013/train/javascript
*/
function add(a, b) {
  let a1 = a.padStart(Math.max(a.length, b.length) + 1, '0');
  let b1 = b.padStart(Math.max(a.length, b.length) + 1, '0');
  let result = "";
  for (let i = a1.length - 1, o = 0; i >= 0; i--) {
    let d = +a1[i] + +b1[i] + o;
    if (d > 1) {
      o = 1;
      result = (d % 2) + result;
    } else {
      result = d + result;
      o = 0;
    }
  }
  return result.replace(/^0+/, '') || '0';
};


console.log(add('111', '10'), '1001');
console.log(add('1101', '101'), '10010');
console.log(add('1101', '10111'), '100100');

// best
/* 
function add(a,b){
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 2 + res;
    c = c > 1;
  }
  res = res.replace(/^0+/, '');
  return res || '0';
};
*/