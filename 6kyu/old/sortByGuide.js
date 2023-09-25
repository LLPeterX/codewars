/* 
6kyu - Simple Fun #217: Sort By Guide
https://www.codewars.com/kata/590148d79097384be600001e/train/javascript

Даны 2 массива. Второй (guide) означает следующее:
  -1: этот элемент массива должен остаться на своем месте
  != -1: отсортировать
*/
function sortByGuide(arr, guide) {
  let sorted = [], k = 0, res = new Array(arr.length).fill(null);
  for (let i = 0; i < arr.length; i++) {
    if (guide[i] === -1) res[i] = arr[i];
    else sorted.push({ v: arr[i], g: guide[i] });
  }
  sorted.sort((a, b) => a.g - b.g);
  return res.map(v => v === null ? sorted[k++].v : v);
}


console.log(sortByGuide([56, 78, 3, 45, 4, 66, 2, 2, 4], [3, 1, -1, -1, 2, -1, 4, -1, 5]), [78, 4, 3, 45, 56, 66, 2, 2, 4])

// best

/* 
function sortByGuide(arr, guide) {
  
  let sort = arr
    .map((a, i) => ({ value: a, weight: guide[i] }))
    .filter(a => a.weight !== -1)
    .sort((a, b) => b.weight - a.weight)
    .map(a => a.value);
  
  return arr.map((a, i) => guide[i] === -1 ? a : sort.pop());
  
}
*/