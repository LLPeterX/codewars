/* 
6kyu - Inside Out Strings
https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5/train/javascript

You are given a string of words (x), for each word within the string 
you need to turn the word 'inside out'. 
By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. 
If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:
'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/

function insideOut(x) {
  return x.split(' ').map(w => {
    let m = ~~(w.length / 2);
    // if (w.length % 2) {
    //   return [...w.slice(0, m)].reverse().join`` + w[m] + [...w.slice(m + 1)].reverse().join``;
    // }
    // return [...w.slice(0, m)].reverse().join`` + [...w.slice(m)].reverse().join``;
    return [...w.slice(0, m)].reverse().join`` + (w.length % 2 ? w[m] : "") + [...w.slice(m + w.length % 2)].reverse().join``
  }).join(' ');
}

// console.log(insideOut('taxi'), 'atix');
// console.log(insideOut('taxis'), 'atxsi');
//console.log(insideOut('man i need a taxi up to ubud'), 'man i ende a atix up to budu');
console.log(insideOut('what time are we climbing up the volcano'), 'hwta item are we milcgnib up the lovcona');
// console.log(insideOut('take me to semynak'), 'atek me to mesykan');

// other

/* 
const insideOut = (str) => {  
  return str.split(' ').map(x => {    
    let left = x.substring(0, Math.floor(x.length / 2)).split('').reverse().join('')
    let right = x.substring(Math.ceil(x.length / 2)).split('').reverse().join('')
    let middle = x[Math.floor(x.length / 2)]    
    return x.length % 2 ? left + middle + right : left + right
  }).join(' ')
}
*/