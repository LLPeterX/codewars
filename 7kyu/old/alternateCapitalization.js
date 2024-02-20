/* 
7kyu - Alternate capitalization
https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

Дана строка. Вернуть массив:
[все четные по индексу символы в врехнем регистре, все нечетные по индексу символы в врехнем регистре]
Пример: capitalize("abcdef") = ['AbCdEf', 'aBcDeF']
*/

function capitalize(s){
  let evens="", odds="";
  for(let i=0; i<s.length; i++) {
    if(i%2===0) {
      evens += s[i].toUpperCase();
      odds += s[i];
    }  else {
      evens += s[i];
      odds += s[i].toUpperCase();
    }
  }
  return [evens, odds];
}

console.log(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);

//best
/* 
function capitalize(s){
  const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
  const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
  return [even, odd];
};
*/

/* 
function capitalize(s){
  return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};
*/