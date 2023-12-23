/* 
6kyu - Count Repeats
https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061/train/javascript

Write a function that returns the count of characters 
that have to be removed in order to get a string with no consecutive repeats.
*/

function countRepeats(str) {
  let count = 0, prevCh = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == prevCh) {
      while (str[i] === prevCh) {
        count++;
        i++;
      }
      --i;
    } else {
      prevCh = str[i];
    }
  }
  return count - 1;
}

console.log(countRepeats('AABCCD'), 2);
console.log(countRepeats('AABCCDA'), 2)
console.log(countRepeats('AaBBCCC'), 3);

// best

/* 
function countRepeats(str) {
  return (str.match(/(.)(?=\1)/g) || []).length
}
*/

/* 
function countRepeats(str) {
    return [...str].reduce((acc, char, i, arr) => {
      arr[i + 1] != undefined && arr[i + 1] === char ? acc ++ : acc;
      return acc;
    },0)
}
*/