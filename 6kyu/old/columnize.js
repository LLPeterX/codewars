/* 
6kyu - Columnize
https://www.codewars.com/kata/6087bb6050a6230049a068f1/train/javascript

You are given an array of strings that need to be spread among N columns. 
Each column's width should be the same as the length of the longest string inside it.

Separate columns with " | ", and lines with "\n"; content should be left-justified.

{"1", "12", "123", "1234", "12345", "123456"} should become:

for 4 columns:
1     | 12     | 123 | 1234
12345 | 123456
*/

function columnize(items, n) {
  let matrix = [], cw = Array(n).fill(0);
  for (let i = 0; i < items.length; i += n) {
    let row = items.slice(i, i + n)
    matrix.push(row);
    cw = cw.map((c, j) => Math.max(c, (row[j] || "").length));
  }
  return matrix.map(row => row.map((e, j) => e.padEnd(cw[j])).join(' | ')).join("\n");
}

const arr = ["1", "12", "123", "1234", "12345", "123456"];
console.log(columnize(arr, 3));

// my best!
