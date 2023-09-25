/* 
6kyu - What's A Name In?
https://www.codewars.com/kata/59daf400beec9780a9000045/train/javascript

Write a function, taking two strings in parameter, 
that tests whether or not the first string contains all of the letters 
of the second string, in order.
*/

function nameInStr(str, name) {

  let reStr = [...name].map(l => `${l}.*?`).join``;
  return new RegExp(reStr, 'i').test(str);
}

console.log(nameInStr('Across the rivers', 'chris'), true)
console.log(nameInStr('Next to a lake', 'chris'), false)
console.log(nameInStr('Under a sea', 'chris'), false)
console.log(nameInStr('A crew that boards the ship', 'chris'), false)
console.log(nameInStr('A live son', 'Allison'), false)

// best
/* 
const nameInStr = (str, name) =>
  new RegExp([...name].join(`.*`), `i`).test(str);
*/