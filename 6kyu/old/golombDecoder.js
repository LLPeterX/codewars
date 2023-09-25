
/* 
6 kyu - Exponential-Golomb Decoder
https://www.codewars.com/kata/5e4d8a53b499e20016b018a0

 */

function encode(n) {
  let binStr = (n + 1).toString(2);
  let binStr2 = '0'.repeat(binStr.length - 1) + binStr;
  return binStr2;
}

function decoder(sequence) {
  let res = [];
  let zeroCount = 0;
  for (let i = 0; i < sequence.length; i++) {
    let ch = sequence[i];
    if (ch === '0') {
      zeroCount++;
    } else {
      res.push(parseInt(sequence.slice(i, i + zeroCount + 1), 2) - 1);
      i += zeroCount;
      zeroCount = 0;
    }
  }
  return res;
}

// console.log(encode(3));
// console.log(encode(22));
// console.log(encode(0));

//console.log('---');


console.log(decoder('01001100100')); // [1,2,3]
console.log(decoder('00000101001000011111000101100110')); // [40, 30, 10, 5]

//best
/*
function decoder(seq){
  let res = [], count = 1
  seq = [...seq]
  for(let i=0; i<seq.length; i++){
    if(seq[i] == 0) count++
    else {
      res.push(seq.splice(i, count))
      count = 1, i--
    }
  }
  return res.map(l => parseInt(l.join(""), 2)-1)
}
*/

/*
function decoder(s){var c=0,l=[];
  for(var i=0;i<s.length;i++){if(s[i]=='1'){var st='';for(var ic=0;ic<c+1;ic++){st+=s[i+ic];}l.push(parseInt(st,2)-1);i+=c;c=0;}else{c++}}
  return l
}
*/

/*
const decoder = (seq, len) =>
  !seq.length ? []
  : [ parseInt(seq.slice( (len=('0'+seq).match(/^0+/)[0].length)-1, len*2-1 ), 2) - 1,
      ...decoder(seq.slice(len*2-1)) ];
*/