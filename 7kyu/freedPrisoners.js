/* 
7kyu - Prison Break
https://www.codewars.com/kata/6507e3170b7009117e0c7865/train/javascript

A prison can be represented as an array of cells, 
where each cell contains exactly one prisoner. 
A 'True' represents an unlocked cell, and 'False' represents a locked cell.
[True, True, False, False, False, True, False]

Starting inside the leftmost cell, 
you are tasked with determining how many prisoners you can set free, with a catch. 
You are the prisoner in the first cell. 
If the first cell is locked (denoted as 'False'), you cannot free anyone. 
Each time you free a prisoner, the locked cells become unlocked, 
and the unlocked cells become locked again.
*/

function freedPrisoners(prison) {
  if (!prison[0]) return 0;
  let numFreed = prison.length;
  for (let i = 1; i < prison.length; i++) {
    if (prison[i] === prison[i - 1]) numFreed--
  }
  return numFreed;
}

console.log(freedPrisoners([true, true, false, false, false, true, false]), 4);
// init: *1  1  0  0  0  1  0  c=1
//        -  - *1  0  0  0  0  c=2
//        -  - -  *1  1  1  1  c=3
//        -  -  -  -  0  0  0  all 
//       
console.log(freedPrisoners([true, false, false, false, false, false, false]), 2);
// init: *1  0  0  0  0  0  c=1
//        -  *1 1  1  1  1  c=2
//        -  -  0  0  0  0  
console.log(freedPrisoners([true, true, true, false, false, false]), 2);
// init: *1  1  1  0  0  0  c=1
//        -  0  0  *1 0  0  c=2
//        -  -  -  -  *1 1  c=3
console.log(freedPrisoners([true, false, true, false, true, false]), 6);
console.log(freedPrisoners([true, true, true]), 1, 'once the first prisoner is freed, all cells become locked');
console.log(freedPrisoners([false, false, false]), 0, 'the first cell is locked, so no switches are possible');
console.log(freedPrisoners([false, true, true, true]), 0, 'the first cell is locked, so no switches are possible');