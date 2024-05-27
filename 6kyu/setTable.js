/* 
6kyu - Setting Places for the Dead
https://www.codewars.com/kata/6646c0c08b97085ca216d346/train/javascript
*/

/* 
Table:
E        Wa       F        Wi
0  1  2  3  4  5  6  7  8  9  10  11


*/

function setTable(theDead) {
  const empty = '_____';
  const table = Array(12).fill(empty);
  //                ABCDEFGHIJKLMNOPQRSTUVWXYZ
  const features = '66003630366603360090033360';
  for (let dead of theDead) {
    let startIndex = +features[dead.toUpperCase().charCodeAt(0) - 65];
    for (let i = startIndex, j = i, count = 0; count < 12; i--, j++, count++) {
      let i1 = (i + 12) % 12;
      let j1 = j % 12;
      if (table[i1] === empty) {
        table[i1] = dead;
        break;
      } else if (table[j1] === empty) {
        table[j1] = dead;
        break;
      }
    }
  }
  return table;
}
