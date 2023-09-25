/* 
6kyu - age replacement algorithms: clock
https://www.codewars.com/kata/62f23d84eb2533004be50c0d/train/javascript
*/

function clock(n, referencesList) {
  let memory = [], ptr = 0;
  for (let page of referencesList) {
    let pageIndex = memory.findIndex(p => p.page === page);
    if (pageIndex >= 0) {
      memory[pageIndex].clock = 1;
    } else {
      if (memory.length < n) {
        memory.push({ page, clock: 0 });
      } else {
        while (memory[ptr % n].clock) memory[ptr++ % n].clock = 0;
        memory[ptr % n] = { page, clock: 0 };
      }
      ptr++;
    }
  }
  let result = memory.map(p => p.page);
  while (result.length < n) result.push(-1);
  return result;
}



console.log(clock(3, [6, 3, 6, 3, 2, 5, 1, 6]), [1, 6, 5]);
console.log(clock(4, [1, 2, 3, 4, 5, 5, 3, 6, 7, 8]), [5, 8, 3, 7]);
console.log(clock(3, [1, 2, 3, 4, 2, 5]), [4, 2, 5]);
console.log(clock(4, [1, 2]), [1, 2, -1, -1]);
console.log(clock(3, [6, 3, 6, 3, 2, 5, 1, 6]), [1, 6, 5]);
console.log(clock(5, []), [-1, -1, -1, -1, -1]);
console.log(clock(1, [1, 2, 3, 4, 5]), [5]);