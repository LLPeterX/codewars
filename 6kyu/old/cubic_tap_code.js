/* 
6kyu - Cubic Tap Code
https://www.codewars.com/kata/62d1eb93e5994c003156b2ae/train/javascript

This works similarly to Tap Code except instead of being mapped onto a 5x5 square, 
letters are mapped onto a 3x3x3 cube, left to right, top to bottom, 
front to back with space being the 27th "letter". 

Letters are represented by a series of taps (represented as dots .) and pauses (represented by spaces  ), 
for example A is represented as . . . (first column, first row, first layer) 
and   is represented as ... ... ... (third column, third row, third layer).
*/


//            0123456789 123456789   
const code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
//            ---------=========---------  

function encode(str) {
  return [...str].map(letter => {
    let i = code.indexOf(letter);
    let k = Math.floor(i / 9);
    let j = i % 9;
    return [j % 3, Math.floor(j / 3), k].map(n => '.'.repeat(n + 1)).join(' ');
  }).join(' ');
}

function decode(str) {
  return str
    .match(/(\.+ \.+ \.+)+/g)
    .map(letter => letter.split(' ').map(code => code.length - 1))
    .map(([i, j, k]) => code[i + j * 3 + k * 9])
    .join``;
}

console.log(encode("A"), [1, 1, 1], ". . .");
console.log(encode("E"), [2, 2, 1], ".. .. .");
console.log(encode(" "), [3, 3, 3], "... ... ...");
console.log(encode("N"), [2, 2, 2], ".. .. ..");
console.log(encode("H"), [2, 3, 1], ".. ... .");
console.log(encode("TEST"), ".. . ... .. .. . . . ... .. . ...");
console.log(encode("HELLO WORLD"), "\n", ".. ... . .. .. . ... . .. ... . .. ... .. .. ... ... ... .. .. ... ... .. .. ... ... .. ... . .. . .. .");
// decoding
console.log(decode(".. ... ."), "H");
console.log(decode(".. . ... .. .. . . . ... .. . ..."), "TEST");
console.log(decode(".. ... . .. .. . ... . .. ... . .. ... .. .. ... ... ... .. .. ... ... .. .. ... ... .. ... . .. . .. ."));

// best

/*
function encode(str) {
    return [...str.toLowerCase()]
        .map(x => x.charCodeAt() - 96)
        .map(x => x > 0 ? [ x % 3 === 0 ? 3 : x % 3, Math.ceil(x/3) % 3 === 0 ? 3 : Math.ceil(x/3) % 3, Math.ceil(x / 9)] : [3,3,3])
        .map(x => x.map(a => '.'.repeat(a)).join(' ')).join(' ')
}


function decode(str) {
    str = str.split(' ')
    return Array(str.length / 3)
        .fill(0)
        .map(x => str.splice(0,3).map(a => a.length).map((a,b) => b === 0 ? a : b === 1 ? (a-1) * 3 : (a-1) * 9).reduce((a,b) => a+ b)).map(x => x !== 27 ? String.fromCharCode(x + 96) : ' ').join('').toUpperCase()
}
*/

// cool

/* 
const L = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '
const encode = s => [...s].map(x=>L.indexOf(x)).map(x=>[x%3,(x/3|0)%3,x/9|0].map(i=>'.'.repeat(i+1))).flat().join(' ')
const decode = s => s.replace(/\.+/g,x=>x.length-1).replace(/\d \d \d ?/g,x=>L[parseInt([...x.replace(/ /g,'')].reverse().join(''),3)])

*/

/* 
const encode = str => [...str].map(e => e === ' ' ? '... ... ...' : `${'.'.repeat((e.charCodeAt() - 65) % 9 % 3 + 1)} ${'.'.repeat(Math.floor((e.charCodeAt() - 65) % 9 / 3) + 1)} ${'.'.repeat(Math.floor((e.charCodeAt() - 65) / 9) + 1)}`).join(' ');
const decode = str => String.fromCharCode(...Array.from(str.matchAll(/(\.+ \.+ \.+)/g),match =>match[0].match(/\.+/g).map(e=>e.length-1)).map(e=>(x=e[2]*9+65+e[1]*3+e[0])==91?32:x))

*/