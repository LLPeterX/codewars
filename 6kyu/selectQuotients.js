/* 
6kyu - Selecting Quotients From an Array
https://www.codewars.com/kata/569f6ad962ff1dd52f00000d/train/javascript

 You are given an array of positive integers as argument. 
 You must generate all the possible divisions between each pair of its elements 
 that outputs an integer value.

For example:

arr = [2, 4, 27, 16, 9, 15, 25, 6, 12, 83, 24, 49, 7, 5, 94, 12, 6]
You must then create a list, sorted by the quotient value, 
containing the corresponding numerator and denominator taken from the given array.

Format: (quotient, (numerator, denominator))
[(2, (4, 2)), (2, (12, 6)), (2, (12, 6)), (2, (12, 6)), (2, (12, 6)), (2, (24, 12)), (2, (24, 12)), (3, (6, 2)), (3, (6, 2)), (3, (12, 4)), (3, (12, 4)), (3, (15, 5)), (3, (27, 9)), (4, (16, 4)), (4, (24, 6)), (4, (24, 6)), (5, (25, 5)), (6, (12, 2)), (6, (12, 2)), (6, (24, 4)), (7, (49, 7)), (8, (16, 2)), (12, (24, 2)), (47, (94, 2))]

2. - Eliminate all the duplicated cases giving it only once.
(2, (12, 6)) occurs four times, for example (we have more cases)
The data is reduced to:

[(2, (4, 2)), (2, (12, 6)), (2, (24, 12)), (3, (6, 2)), (3, (12, 4)), (3, (15, 5)), (3, (27, 9)), (4, (16, 4)), (4, (24, 6)), (5, (25, 5)), (6, (12, 2)), (6, (24, 4)), (7, (49, 7)), (8, (16, 2)), (12, (24, 2)), (47, (94, 2))]

3. - Select the quotients that are higher or equal than a certain given value.

If the given value is 6 will reduce even more our cases:

[(6, (12, 2)), (6, (24, 4)), (7, (49, 7)), (8, (16, 2)), (12, (24, 2)), (47, (94, 2))]

4. - Select the results by even or odd quotient value.
Supose that we are interested in odd values only, we will finally have:

[(7, (49, 7)), (47, (94, 2))]
*/

function selectQuotients(arr, m, dirStr = null) {
  const divisors = [];
  if (dirStr) dirStr = dirStr.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        let d = arr[i] / arr[j];
        if (Number.isInteger(d) && d >= m &&
          ((dirStr === 'even' && d % 2 === 0) || (dirStr === 'odd' && d % 2 !== 0) || !dirStr)) {
          let max = Math.max(arr[i], arr[j]), min = Math.min(arr[i], arr[j]);
          if (!divisors.find(e => e[0] === d && e[1][0] === max && e[1][1] === min)) {
            divisors.push([d, [max, min]]);
          }
        }
      }
    }
  }
  return divisors.sort((a, b) => a[0] - b[0] || a[1][0] - b[1][0]);
}


const arr = [2, 4, 27, 16, 9, 15, 25, 6, 12, 83, 24, 49, 7, 5, 94, 12, 6];
//console.log(selectQuotients(arr, 6, 'Odd'), [[7, [49, 7]], [47, [94, 2]]]);
//console.log(selectQuotients(arr, 6, 'even'), [[6, [12, 2]], [6, [24, 4]], [8, [16, 2]], [12, [24, 2]]]);
//console.log(selectQuotients(arr, 6), [[6, [12, 2]], [6, [24, 4]], [7, [49, 7]], [8, [16, 2]], [12, [24, 2]], [47, [94, 2]]]);
console.log(selectQuotients([
  181, 15, 107, 274, 200, 119, 171, 98, 181, 184,
  263, 60, 232, 65, 59, 239, 182, 61, 15, 202,
  245, 62, 106, 73, 81, 162, 73, 145, 4, 223,
  10, 62, 110, 180, 36, 75, 164, 269, 61, 275,
  167, 167, 135, 75, 68, 131, 21, 9, 139, 168
], 5, 'Even'), '?');

// best

/* 
function selectQuotients(arr, m, dirStr = null) {
  let cmpSet = new Set()
  let lst = []
  for(let i = 0; i < arr.length - 1; i++){
    for(let j = i + 1; j < arr.length; j++){
      let [x, y] = [Math.min(arr[i], arr[j]), Math.max(arr[i], arr[j])]
      if(y % x == 0 && y / x >= m && (!dirStr || y / x % 2 == {"even": 0, "odd": 1}[dirStr.toLowerCase``]) && !cmpSet.has(`${y / x}~${y}~${x}`)){
        cmpSet.add(`${y / x}~${y}~${x}`)
        lst.push([y / x, [y, x]])
      } 
    }
  }
  return lst.sort((a, b) => a[0] - b[0] || a[1][0] - b[1][0])
}
*/