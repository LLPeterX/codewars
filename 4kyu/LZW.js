/* 
4kyu - Lempel–Ziv–Welch
https://www.codewars.com/kata/55833364a2e09a6887000166/train/javascript

In this kata you must implement the LZW algorithm 
according to Wikipedia's specifications.
https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Welch


*/

/**
  Returns list of codes: a comma separated string of 
  the LZW compression decimal numbers (the last code must be 0)
  - symbols: sorted string of valid data symbols for the text. 
    The index will be the code of the intial dictionary
  - stop: The last symbol of the text
  - text: Uncompressed text: text is made of combinations of symbols. 
    The stop symbol appears once and at the end of the text
*/
function encode(symbols, stop, text) {
  if (text.length < 2) return '0';
  const output = [];
  const dict = [...symbols].reduce((o, v, i) => { o[v] = i; return o; }, {});
  let index = symbols.length;
  let phrase = text[0];
  for (let i = 1; i < text.length; i++) {
    let c = text[i];
    let combo = phrase + c;
    if (dict[combo] === undefined) {
      output.push(dict[phrase]);
      dict[combo] = index++;
      phrase = c;
    } else {
      phrase += c;
    }
    if (c === stop) {
      output.push(0);
      break;
    }
  }
  return output.join(',');
}

/**
  Returns a uncompressed text given a sequence of compressed codes
  symbols: Valid data symbols
  code: string of comma separated codes. The last code always will be 0
*/

/*
// верно, но TIMEOUT !!!
function decode(symbols, code) {
  const dict = [...symbols];
  const bin = code.split(',').map(Number);
  let phrase = "";
  let output = "";
  for (let i = 0; i < bin.length; i++) {
    let index = bin[i];
    let c = dict[index];
    if (!c) c = phrase + phrase[0];
    output += c;
    if (dict.indexOf(phrase + c[0]) < 0) dict.push(phrase + c[0]);
    phrase = c;
  }
  return output;
}
*/

// пробуем версию с дополнительным словарем char=>i
function decode(symbols, code) {
  const dict = [...symbols];
  const revDict = [...symbols].reduce((o, v, i) => { o[v] = i; return o; }, {});
  const bin = code.split(',').map(Number);
  let phrase = "";
  let output = "";
  let index = symbols.length;
  for (let i = 0; i < bin.length; i++) {
    let c = dict[bin[i]];
    if (!c) c = phrase + phrase[0];
    output += c;
    //if (dict.indexOf(phrase + c[0]) < 0) dict.push(phrase + c[0]);
    let combo = phrase + c[0];
    if (!revDict[combo]) {
      dict.push(combo);
      revDict[combo] = index++;
    }
    phrase = c;
  }
  return output;
}
console.log(encode('#ABCDEFGHIJKLMNOPQRSTUVWXYZ', '#', 'TOBEORNOTTOBEORTOBEORNOT#') == '20,15,2,5,15,18,14,15,20,27,29,31,36,30,32,34,0');
console.log(decode('#ABCDEFGHIJKLMNOPQRSTUVWXYZ', '20,15,2,5,15,18,14,15,20,27,29,31,36,30,32,34,0'), "\n", 'TOBEORNOTTOBEORTOBEORNOT#') // FAIL
//console.log(decode('#ABCDEFGHIJKLMNOPQRSTUVWXYZ', '20,15,2,5,15,18,14,15,20,27,29,31,36,30,32,34,0') == 'TOBEORNOTTOBEORTOBEORNOT#') // FAIL
