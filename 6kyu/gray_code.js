/* 
6kyu - Gray Code
https://www.codewars.com/kata/5416ce834c2460b4d300042d/train/javascript
*/

function bin2gray(bits) {
  for(let i=bits.length-1; i>0; i--) {
    if(bits[i-1]) bits[i]=1-bits[i];
  }
  return bits;
}

function gray2bin(gray) {
  for(let i=0, k=gray.length-1; i<gray.length; i++, k--) {
    let g1 = gray.slice(0,k);
    let sum = g1.reduce((s,v)=>s+v,0);
    if(sum%2===1) {
      gray[k]=1-gray[k];
    }
  }
  return gray;
}

  console.log(bin2gray([1, 1]), [1, 0], 'bin2gray([1, 1])');
  console.log(bin2gray([1, 0, 1]), [1, 1, 1], 'bin2gray([1, 0, 1])');
  
  console.log(gray2bin([1, 0]), [1, 1], 'gray2bin([1, 0])');
  console.log(gray2bin([1, 1, 1]), [1, 0, 1], 'gray2bin([1, 1, 1])');
  console.log(gray2bin([1, 1, 1]), [1, 0, 1], 'gray2bin([1, 1, 1])');

  // best

  /* 
  function bin2gray(bits) {
  var gray = [bits[0]];
  for (var i = 1; i < bits.length; i++) {
    gray[i] = bits[i - 1] ? +!bits[i] : bits[i];
  }
  return gray;
}

function gray2bin(gray) {
  var bits = [gray[0]];
  for (var i = 1; i < gray.length; i++) {
    bits[i] = gray[i] ^ bits[i - 1];
  }
  return bits;
}
  */