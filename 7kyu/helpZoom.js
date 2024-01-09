/* 
7kyu - Password System
https://www.codewars.com/kata/57a23e3753ba332b8e0008da/train/javascript
*/

function helpZoom(key) {
  let n = Math.sqrt(key.length);
  if (!Number.isInteger(n)) return "No";
  for (let i = 0, j = key.length - 1; i < j; i++, j--) {
    if (key[i] !== key[j]) return "No";
  }
  return "Yes";
}

console.log(helpZoom([1, 1, 0, 0, 0, 0, 0, 1, 1]), "Yes")
console.log(helpZoom([1, 1, 0, 0, 0, 0, 1, 1, 0]), "No")

// best

/* 
function helpZoom(key){
  return key.join('') == key.reverse().join('') ? 'Yes' : 'No';
}
*/