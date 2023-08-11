/* 
7kyu - Maid Ep2: Christmas Trash Party
https://www.codewars.com/kata/639df18a29d4991916ba5cdd/train/javascript


*/

function compareTrash(trash1, trash2) {
  if (typeof trash1 == 'number' && typeof (trash2) == 'number') {
    if (isNaN(trash1) && isNaN(trash2)) return false;
    if ((trash1 == 0 && trash2 == -0) || (trash2 == 0 && trash1 == -0)) return true;
  } else if (typeof trash1 == 'undefined' && typeof (trash2) == 'undefined') {
    return true;
  } else if (typeof trash1 == 'bigint' && typeof trash2 == 'bigint') {
    if ((trash1 == 0n && trash2 == -0n) || (trash2 == 0n && trash1 == -0n)) return true;
  }
  return Object.is(trash1, trash2);
}

// console.log(compareTrash([], false), false);
// console.log(compareTrash(0, false), false);
// console.log(compareTrash([], 0), false);
// console.log(compareTrash([], ''), false);
// console.log(compareTrash('', new Array()), false);
// console.log(compareTrash(null, null), true);
// console.log(compareTrash(null, NaN), false);
// console.log(compareTrash(false, false), true);
// console.log(compareTrash(0, false), false);
// console.log(compareTrash(null, undefined), false);
// console.log(compareTrash(undefined, NaN), false);
// console.log(compareTrash('', ''), true);
// console.log(compareTrash(0, -0), true);
// console.log(compareTrash('0', 0), false);
// console.log(compareTrash([], []), false);
console.log(compareTrash(NaN, NaN), false);
console.log(compareTrash(undefined, undefined), true);
console.log(compareTrash(0n, 0n), true);
console.log(compareTrash(-0, 0n), false);

// best
/* 
function compareTrash(trash1, trash2){
  return (trash1 == trash2) && (typeof trash1 == typeof trash2)
}
*/

/* 
function compareTrash(trash1, trash2){
if(Number.isNaN(trash1) && Number.isNaN(trash2))return false
return [trash1].includes(trash2)
}
*/