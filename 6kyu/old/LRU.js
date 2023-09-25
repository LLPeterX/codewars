/* 
6kyu - Page replacement algorithms: LRU
https://www.codewars.com/kata/6329d94bf18e5d0e56bfca77
*/

function lru(n, referencesList) {
  const memory = [];
  let accessTime = 0;
  for (let page of referencesList) {
    let pageIndex = memory.findIndex(p => p.page === page);
    if (pageIndex >= 0) {
      memory[pageIndex].time = accessTime++;
    } else {
      if (memory.length < n) {
        memory.push({ page, time: accessTime++ });
      } else {
        // let minIndex = 0, minValue = +Infinity;
        // for (let i = 0; i < memory.length; i++) {
        //   if (memory[i].time < minValue) {
        //     minValue = memory[i].time;
        //     minIndex = i;
        //   }
        // }
        let minIndex = memory.reduce((x, v, i, a) => v.time < a[x].time ? i : x, 0);
        memory[minIndex] = { page, time: accessTime++ };
      }
    }
  }
  let result = memory.map(p => p.page);
  while (result.length < n) result.push(-1);
  return result;
}



console.log(lru(3, [1, 2, 3, 4, 3, 2, 5]));
console.log(lru(5, [10, 9, 8, 7, 7, 8, 7, 6, 5, 4, 3, 4, 3, 4, 5, 6, 5]), [5, 4, 3, 7, 6]);
console.log(lru(4, [1, 1, 1, 2, 2, 3]), [1, 2, 3, -1]); // FAIL
console.log(lru(1, [5, 4, 3, 3, 4, 10]), [10]);
console.log(lru(3, [1, 1, 1, 1, 1, 1, 1, 1]), [1, -1, -1]);