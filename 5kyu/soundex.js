/* 
5kyu - Soundex
https://www.codewars.com/kata/587319230e9cf305bb000098/train/javascript

In this Kata you will encode strings using a Soundex variation called "American Soundex" 
using the following (case insensitive) steps:

- Save the first letter. 
- Remove all occurrences of h and w except first letter.
- Replace all consonants (include the first letter) with digits as follows:
- b, f, p, v = 1
- c, g, j, k, q, s, x, z = 2
- d, t = 3
- l = 4
- m, n = 5
- r = 6
- Replace all adjacent same digits with one digit.
- Remove all occurrences of a, e, i, o, u, y except first letter.
- If first symbol is a digit replace it with letter saved on step 1.
- Append 3 zeros if result contains less than 3 digits. Remove all except first letter and 3 digits after it
*/


const removeExceptFirst = (str, ex) => {
  let re = new RegExp('[' + ex + ']', 'g');
  return ex.includes(str[0]) ? str[0].toUpperCase() + str.slice(1).replace(re, '') : str.replace(re, '');
}

const soundex = (names) => names
  .split(' ')
  .map(word => {
    let w = removeExceptFirst(word.toLowerCase(), 'hw');
    let w0 = w[0].toUpperCase();
    let num = "";
    for (let i = 0; i < w.length; i++) {
      if ("bfpv".includes(w[i])) num += '1';
      else if ("cgjkqsxz".includes(w[i])) num += '2';
      else if ("dt".includes(w[i])) num += '3';
      else if (w[i] === 'l') num += '4';
      else if ("mn".includes(w[i])) num += '5';
      else if (w[i] === 'r') num += '6';
      else num += w[i];
    }
    num = removeExceptFirst(num.replace(/(.)\1+/g, '$1'), "aeiouy");
    if (/^\d/.test(num)) num = w0 + num.slice(1);
    return num.padEnd(4, '0').slice(0, 4);
  })
  .join(' ');

// console.log(soundex("Sarah Connor"), "S600 C560");
// console.log(soundex("Sara Conar"), "S600 C560");
// console.log(soundex("Serah Coner"), "S600 C560");
// console.log(soundex("Sarh Connor"), "S600 C560");
// console.log(soundex("Sayra Cunnarr"), "S600 C560");
// console.log(soundex("BoB"), "B100");
// console.log(soundex("Tymczak"), "T522");
// console.log(soundex("Ashcraft"), "A261");
// console.log(soundex("Pfister"), "P236");

// best

/* 
function soundexWord(s) {
  const head = s[0].toUpperCase();
  const text = s.replace( /[hw]/gi,        ""  )
                .replace( /[bfpv]+/gi,     "1" )
                .replace( /[cgjkqsxz]+/gi, "2" )
                .replace( /[dt]+/gi,       "3" )
                .replace( /l+/gi,          "4" )
                .replace( /[mn]+/gi,       "5" )
                .replace( /r+/gi,          "6" )
                .replace( /[aeiouy]/gi,    ""  )
  ;
  return "HWAEIOUY".includes(head)
         ? ( head + text          + "000" ).slice(0,4)
         : ( head + text.slice(1) + "000" ).slice(0,4)
  ;
}

function soundex(s) {
  return s.split(" ").map(soundexWord).join(" ");
}
*/



