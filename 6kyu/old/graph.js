/* 
6kyu - Let's do a fun graph
https://www.codewars.com/kata/6444f6b558ed4813e8b70d43/train/javascript
*/

function graph(arr) {
  let max = Math.max(...arr);
  let str = "";
  for (let i = max; i >= 0; i--) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        str += ' ____ ';
      } else if (arr[j] > i) {
        str += '|    |';
      } else {
        str += '......';
      }
    }
    str += ` ${i === max ? '^' : '|'} ${i}\n`;
  }
  return str;
}

