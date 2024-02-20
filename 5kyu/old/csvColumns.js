/* 
5kyu - Grab CSV Columns
https://www.codewars.com/kata/5276c0f3f4bfbd5aae0001ad/train/javascript

Write a function that takes a CSV (format shown below) and a sequence of indices, 
which represents the columns of the CSV, and returns a CSV 
with only the columns specified in the indices sequence.

The CSV passed in will be a string and will have one or more columns, and one or more rows. The CSV will be of size NxM. Each row is separated by a new line character \n. There will be no spaces in the CSV string.

Example format of passed in CSV: "1,2,3\n4,5,6\n7,8,9\n10,11,12"
*/

// too easy
function csvColumns(csv, indices) {
  const data = csv.split("\n").map(row => row.split(','));
  indices = [...new Set(indices.sort((a, b) => a - b))];
  let result = [];
  for (let i = 0; i < data.length; i++) {
    let row = [];
    for (let j = 0; j < indices.length; j++) {
      let index = indices[j];
      if (index >= 0 && index < data[i].length) {
        row.push(data[i][index]);
      }
    }
    result.push(row);
  }
  return result.map(row => row.join(',')).join("\n").trim();
}


// best

/* 
function csvColumns(csv, indices) {
  return csv.split('\n').map(function(row) {
    return row.split(',').filter(function(_, i) {
      return indices.indexOf(i) !== -1;
    }).join(',');
  }).filter(function(s) { return s.length > 0; }).join('\n');
}
*/

/* 
function csvColumns(csv, indices) {
  return csv.split('\n')
            .map(row => row.split(',').filter((_, i) => indices.includes(i)).join(','))
            .join('\n')
            .trim();
}
*/