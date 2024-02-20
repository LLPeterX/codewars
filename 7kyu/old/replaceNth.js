/* 
7kyu - Replace every nth
https://www.codewars.com/kata/57fcaed83206fb15fd00027a/train/javascript

Write a method, that replaces every nth char oldValue with char newValue.
*/

function replaceNth(text, n, oldValue, newValue) {
  if (n <= 0) return text;
  let arr = [...text], c = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === oldValue) {
      if (++c % n === 0) {
        arr[i] = newValue;
      }
      //      c++;
    }
  }
  return arr.join``;
}

console.log(replaceNth("Vader said: No, I am your father!", 2, 'a', 'o'), "Vader soid: No, I am your fother!");