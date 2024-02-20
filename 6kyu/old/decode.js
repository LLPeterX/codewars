/* 
6kyu - Decoded String by the Numbers
https://www.codewars.com/kata/562c3b54746f50d28d000027/train/javascript

This is a simple string decoding algorithm. 
The idea is to take a string of characters and decode it into an array. 
Each character is a single element in the result 
unless a backslash followed by a positive number is encountered.

When a backslash followed by a positive number is found, 
the number indicates how many of the next characters are grouped 
together as one element.

Example:

"abc\5defghi\2jkl" => [ "a", "b", "c", "defgh", "i", "jk", "l" ]

If the number is larger than the count of remaining characters,
treat it as reading the remaining characters.

If you are reading characters, and you find an escape inside a string, 
they should be tallied into the string:

"\5ab\3cde" => [ "ab\3c", "d", "e" ]
*/

function decode(str) {
  console.log(str);
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '\\' && /\d/.test(str[i + 1])) {
      let num = parseInt(str.slice(++i));
      let numLength = String(num).length;
      let substr = str.slice(i + numLength, i + numLength + num);
      result.push(substr);
      i += numLength + num - 1;
    } else {
      result.push(str[i]);
    }
  }
  return result;
}

console.log(decode(''), [], 'Empty Strings should result in an empty array.');
console.log(decode('abc'), ['a', 'b', 'c'], 'A simple string should result in an array of one character chunks, one for each character.');
console.log(decode("\\1abc"), ['a', 'b', 'c'], 'A simple 1 character break should result in 2 elements.');
console.log(decode("\\1a\\1bc"), ['a', 'b', 'c'], 'Should result in 3 elements.');
console.log(decode("\\3a\\1bc"), ['a\\1', 'b', 'c'], 'Should result in 3 elements.');
console.log(decode("\\10a\\1bc"), ['a\\1bc'], 'Should result in 1 element.');

// others:

/* 
function decode(str) {
    var result = [];
    while (str.length) {
        let d = /^\\(\d+)/.test(str) ? +RegExp.$1 : 1;
        str = str.replace(/^\\(\d+)/, '');
        result.push(str.slice(0, d));
        str = str.slice(d);
    }
    return result;
}
*/

