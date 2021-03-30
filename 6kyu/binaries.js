/* 
https://www.codewars.com/kata/5d98b6b38b0f6c001a461198
Дана строка типа "10111213".
Преобразовать
*/

const digitMap = ["10", "11", "0110", "0111", "001100", "001101", "001110", "001111", "00011000", "00011001"];
//                 0     1     2       3       4         5         6         7         8           9 

function code(n) {
  let res="";
  for (let v of n) {
    let d = (+v).toString(2);
    let k = d.split('').filter(x=>'1').length;
    res += '0'.repeat(k-1)+'1'+d;
  }
  return res;
}

// тут верно
function code2(strng) {
  const digitMap = ["10", "11", "0110", "0111", "001100", "100011", "001110", "001111", "00011000", "00011001"];
  return strng.split('').reduce((res, v) => res + digitMap[+v], "");
}


// incomplete - не знаю как сделать. Через regexp не получается почему-то...
function decode(str) {
  let i = 0, k = 0, bitStr = "", res = "";
  while (i < str.length) {
    while (str[i] === '0') { k++; i++; }
    i++; k++;
    bitStr = str.slice(i, i + k);
    i += k;
    res += parseInt(bitStr, 2);
    k = 0;
  }
  return res;
}

// testing encode
console.log('62',code("62"), "0011100110");
console.log('55337700',code("55337700"), "001101001101011101110011110011111010");
// 100011100011011101110011110011111010 // my
// 001101001101011101110011110011111010 // must be
// console.log(code("1119441933000055"), "1111110001100100110000110011000110010111011110101010001101001101");
// console.log(code("69"), "00111000011001");
// console.log(code("86"), "00011000001110");
// console.log('\ntest decode\n');
// console.log(decode("10001111"), "07"); // ok
// console.log(decode("0011100110"), "62"); // ok
// console.log(decode("0011110011110111011100011000"), "77338"); // зависает

// console.log(decode("001100001100001100001110001110001110011101110111001110001110001110001111001111001111001100001100001100"), "444666333666777444"); // fail
//console.log(decode("01110111110001100100011000000110000011110011110111011100110000110001100110"), "33198877334422");
//console.log(decode("0011010011010011011010101111110011000011000011000011100011100011100011100011100011100001100100011001000110011100011001001111001111001111001111001111001111"), "55500011144466666699919777777");
//console.log(decode("01110111011111000110010011110011110011110011110011110011110111011101110110011001100110011001101111111010101100011001000110000001100000011000"), "3331977777733322222211100019888");

// best
/* 
const code = str =>
  [ ...str ].map(Number).reduce((a, b) => 
    a + '0'.repeat(Math.log2(b || 1) | 0) + '1' + b.toString(2)
  , '');

const decode = str => {

  if (!str) return '';
  
  const [_, a, b] = str.match(/^(0*1)(.*)$/);
  
  return parseInt(b.slice(0, a.length), 2) 
       + decode(b.slice(a.length));
  
};
// -----
const mapping = ['10','11','0110','0111','001100','001101','001110','001111','00011000','00011001'];
function code(strng) {
  return strng.split('').map(x => mapping[x]).join(''); 
}
// почему у меня code() так не сработало?!!

function decode(str) {
  let result = '';
  while(str.length) {
    const idx = mapping.findIndex(x => str.startsWith(x));
    if (idx === -1) return '';
    result += idx;
    str = str.substr(mapping[idx].length);
  }
  return result;
*/

