/* 
7kyu - Compress Sequence
https://www.codewars.com/kata/59de469cfc3c492da80000c5/train/javascript
*/

function compress(sentence) {
  let arr = sentence.toLowerCase().split(' ');
  let words = new Map();
  for (let i = 0, n = 0; i < arr.length; i++) {
    if (!words.has(arr[i])) {
      words.set(arr[i], n++);
    }
  }
  return arr.map(e => words.get(e)).join('');
}

console.log(compress("The bumble bee"), "012")
console.log(compress("SILLY LITTLE BOYS silly little boys"), "012012")
console.log(compress("Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"), "01234567802856734")
console.log(compress("The number 0 is such a strange number Strangely it has zero meaning"), "012345617891011")
//                    0   1      2 3  4    5 6       1      7

// best
/* 
function compress(sentence) {
  sentence = sentence.toLowerCase()
  let arr = [...new Set(sentence.split` `)]
  return sentence.split` `.map(x => arr.indexOf(x)).join``
}
*/