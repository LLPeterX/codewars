/* 
7kyu - Odd March Bits 8 bits
https://www.codewars.com/kata/58ee4db3e479611e6f000086/train/javascript

Therefore the n bits march from right to left along an 8 bits path. 
Once the most-significant bit reaches the left their march is done. Each step will be saved as an array of 8 integers.

Return an array of all the steps.

1 <= n <= 8

NOTE: n != 0, because n represents the number of 1s.
*/

/* function bitMarch(n) {
  let bits = parseInt('1'.repeat(n), 2);
  console.log('vits=', bits);
  let res = [];
  while (!(bits & 128)) {
    res.push(bits);
    bits <<= 1;
  }
  //return res.map(x => [...(x.toString(2).padStart(8, '0'))].map(Number));
  return res.map(x => x.toString(2).padStart(8, '0'));
} */

function bitMarch(n) {
  let strnum = '1'.repeat(n).padStart(8, '0'), res = [strnum];
  while (strnum[0] !== '1') {
    res.push(strnum = strnum.slice(1) + '0');
  }
  return res.map(row => [...row].map(Number));
}
console.log(bitMarch(7)); // [01111111, 11111110]
console.log(bitMarch(3)); // 6 rows [00000111, 00001110,00011100,00111000,01110000,11100000]

// best

/* 
function bitMarch (n) {
  console.log("n",n);
  var arr = [];
  for(var i = 7; i >= n-1; i--){
    var result =[0,0,0,0,0,0,0,0];
    for(var j = 0 ; j<n; j++){
      result[i-j] = 1;
    }
    arr.push(result);
  }
  return arr;
}
*/

/* 
function bitMarch (n) {
  return Array.from({length: 8 - n + 1}, (_, i) => `${"0".repeat(8 - n - i)}${"1".repeat(n)}${"0".repeat(i)}`.split``.map(y => +y))
}
*/