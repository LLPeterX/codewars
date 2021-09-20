/* 
6kyu - Basic Compression
https://www.codewars.com/kata/5914e068f05d9a011e000054/train/javascript
*/

var compress = function (str) {
  let res = [], currentLetter = null, counts = [];
  for (let letter of str) {
    if (letter != currentLetter) {
      if (counts.length > 0) {
        res.push(counts);
      }
      counts = [1, letter];
      currentLetter = letter;
    } else {
      counts[0]++;
    }
  }
  res.push(counts);
  let json = JSON.stringify(res);
  return json.length > str.length ? str : json;
}

var decompress = function (c) {
  return c.includes('[') ? JSON.parse(c).reduce((str, [count, letter]) => str + letter.repeat(count), '') : c;
}

var string1 = "aaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac"
var string2 = "abcde"
var c1 = '[[14,"a"],[1,"b"],[41,"a"],[1,"c"]]'
var c2 = "abcde"

console.log(compress(string1), c1);
console.log(decompress(c1));

console.log(compress(string2), c2);
console.log(decompress(c2));

//best (my one of best)

/* 
function compress(str) {
  const c = JSON.stringify(str.match(/(.)\1*/g).map(c => [c.length, c[0]]))
return c.length < str.length ? c : str
}

function decompress(c) {
  if (c[0] === "[") {
    return JSON.parse(c).reduce((s, [n, c]) => s + c.repeat(n), "")
  } else {
    return c
  }
}
* /

