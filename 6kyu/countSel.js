/* 
6kyu - Required Data I
https://www.codewars.com/kata/55f95dbb350b7b1239000030/train/javascript

Дан массив целых чисел. Подсчитать:
1) Общее число чисел
2) Число разных значений
3) Число целых, встретившихся единежды
4) Число с наибольшим повторением
5) Число повторений п.4
*/

function countSel(lst) {
  const uniques = new Set();
  const counts = new Map();
  for (let e of lst) {
    uniques.add(e);
    counts.set(e, (counts.get(e) || 0) + 1);
  }
  const singles = Array.from(uniques).filter(e => counts.get(e) === 1);
  const maxes = Array.from(counts)
    .sort((a, b) => b[1] - a[1])
    .filter((e, i, a) => e[1] === a[0][1])
    .sort((a, b) => a[0] - b[0]);
  return [lst.length, uniques.size, singles.length, [maxes.map(e => e[0]), maxes[0][1]]];
}


console.log(countSel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5]), [10, 7, 5, [[-5], 3]]);
console.log(countSel([5, -1, 1, -1, -2, 5, 0, -2, -5, 3]), [10, 7, 4, [[-2, -1, 5], 2]]);
console.log(countSel([-2, 4, 4, -2, -2, -1, 3, 5, -5, 5]), [10, 6, 3, [[-2], 3]]);
console.log(countSel([4, -5, 1, -5, 2, 4, -1, 4, -1, 1]), [10, 5, 1, [[4], 3]]);
console.log(countSel([4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5]), [14, 8, 4, [[2, 4], 3]]);

//best
/* 
function countSel(lst) {
    var h={}, r=[], max=0, once=0, count=0;
    lst.map(a=>h[a]=h[a]?h[a]+1:1)
    for (var o in h) {
       if (h[o]>=max) {if (h[o]>max) r=[]; max=h[o]; r.push(+o)}
       if (h[o]==1) once++; else count++;
    }
   return [lst.length, once+count, once, [r.sort((a,b)=>a-b), max]];
}
*/