/* 
8kyu - What's up next?
https://www.codewars.com/kata/542ebbdb494db239f8000046/javascript

Given a sequence of items and a specific item in that sequence, 
return the item immediately following the item specified. 
If the item occurs more than once in a sequence, return the item after the first occurence. 
This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return undefined.
*/

function nextItem(xs, item) {
  let iterator = xs[Symbol.iterator]();
  while (true) {
    let result = iterator.next();
    if (result.done) break;
    if (result.value === item) {
      return iterator.next().value;
    }
  }
}

// best
/* 
function nextItem(xs, item) {
  var found = false;
  for (var x of xs) {
    if (found) return x;
    if (x == item) found = true;
  }
  return undefined;
}
*/

/* 
const nextItem = (xs, item) => {
  const iter = xs[Symbol.iterator]();
  for (let el of iter) {
    if (el === item) return iter.next().value;
  }
};
*/