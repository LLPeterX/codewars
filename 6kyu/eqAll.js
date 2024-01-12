/* 
6kyu - Are all elements equal? (Infinity version)
https://www.codewars.com/kata/59dce15af703c42af6000035/train/javascript

Create a function eqAll that determines if all elements of a list are equal.
list can be any iterable, and may be infinite. Return value is a Boolean.
*/

function eqAll(iterable) {
  let iterator = iterable[Symbol.iterator]();
  let prevValue, first = true;
  while (true) {
    let result = iterator.next();
    if (result.done) return true;
    if (!first && result.value !== prevValue) return false;
    first = false;
    prevValue = result.value;
  }
}

console.log(eqAll("aaa"), true);
console.log(eqAll("abc"), false);
console.log(eqAll(""), true);
console.log(eqAll([0, 0, 0]), true);
console.log(eqAll([0, 1, 2]), false);
console.log(eqAll([]), true);

// best
/* 
function eqAll(iterable) {
  const iterator = iterable[Symbol.iterator]()
  const first = iterator.next().value
  for(const x of iterator) {
    if (x !== first) return false
  }
  return true
}
*/

/* 
function eqAll(iterable) {
  return ![...(iterable.listOf||iterable)].some((v,i,arr)=>arr[0]!==v);
}
*/