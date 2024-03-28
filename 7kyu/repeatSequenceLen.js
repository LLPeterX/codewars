/* 
7kyu - Simple Fun #129: Repeat Sequence Length
https://www.codewars.com/kata/58a3f57ecebc06bfcb00009c/train/javascript
*/

function repeatSequenceLen(a0) {
  const a = [];
  while (true) {
    a0 = [...`${a0}`].reduce((sq, v) => sq + v * v, 0);
    let k = a.indexOf(a0);
    if (k >= 0) return a.length - k;
    a.push(a0);
  }
}

// best

/* 
function repeatSequenceLen(n) {
  for (var l;l=0, n>4;n=l)
    for (var i in n+="") 
      l+=n[i]*n[i]
  return n>1?8:1
}
*/

/* 
const repeatSequenceLen = a => {
  const s = [];
  while (!s.includes(a)){
    s.push(a);
    a = [...a.toString()].reduce((s, d) => s + (+d) ** 2, 0);
  }
  return s.length - s.indexOf(a);
};
*/