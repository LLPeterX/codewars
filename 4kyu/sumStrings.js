/* 
4kyu - Sum Strings
https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
Просуммировать два числа, заданных в виде строки
(могут быть большие!)
*/

function sumStrings(a,b) { 
  let res="";
  let a1 = a.padStart(Math.max(a.length, b.length),'0'),
      b1 = b.padStart(Math.max(a.length, b.length),'0'),
      overflow = 0;
  for(let i=a1.length-1; i>=0; i--) {
    let sum = +a1[i] + +b1[i] + overflow;
    if(sum>9) {
      overflow = 1;
      sum -= 10;
    } else {
      overflow = 0;
    }
    res += sum;
  }
  if(overflow) res += "1";
  return res.split('').reverse().join('').replace(/^0/g,'');
}

//console.log(sumStrings('123','456'),'579');
//console.log(sumStrings('712569312664357328695151392', '8100824045303269669937')); // '712577413488402631964821329'
console.log(sumStrings('00103', '08567')); // '8670'

// best
/* 
function sumStrings(a, b) {
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '');
}
*/