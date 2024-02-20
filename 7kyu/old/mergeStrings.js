/* 
7kyu - Merge overlapping strings
https://www.codewars.com/kata/61c78b57ee4be50035d28d42/train/javascript

his kata requires you to write a function which merges two strings together. 
It does so by merging the end of the first string with the start of the second string 
together when they are an exact match.

"abcde" + "cdefgh" => "abcdefgh"
"abaab" + "aabab" => "abaabab"
"abc" + "def" => "abcdef"
"abc" + "abc" => "abc"
*/

function mergeStrings(first, second) {
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first.slice(i) === second.slice(0, j + 1)) {
        return first.slice(0, i) + second;
      }
    }
  }
  return first + second;
}

console.log(mergeStrings("abcde", "cdefgh"), "abcdefgh");
console.log(mergeStrings("abc", "def"), "abcdef");
console.log(mergeStrings("abc", "abc"), "abc");
console.log(mergeStrings("abcde", "efghi"), "abcdefghi");

//best
/* 
function mergeStrings(first, second) {
  for (let i = Math.min(first.length, second.length); i >= 0; i--)
    if (second.startsWith(first.slice(first.length - i)))
      return first + second.slice(i);
}
*/

/* 
function mergeStrings(first, second){
  return (first + ' ' + second).replace(/(.*) \1/, '$1');
}
*/

/* 
function mergeStrings(str1, str2) {
  let overlap = '';
  
  for (let i = 0; i < str1.length; i++) {
    if (str2.startsWith(str1.slice(i))) {
      overlap = str1.slice(i);
      break;
    }
  }
  
  return str1 + str2.slice(overlap.length);
}
*/