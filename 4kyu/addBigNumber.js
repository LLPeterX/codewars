/* 
4kyu - Adding Big Number
https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
*/

function add(a,b) { 
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

// best
/* 
unction add (a, b) {
  var res = '', c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = c % 10 + res
    c = c > 9
  }
  return res
}
*/