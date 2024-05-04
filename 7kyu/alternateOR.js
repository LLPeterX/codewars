/* 
7kyu - Alternate Logic
https://www.codewars.com/kata/58f625e20290fb29c3000056/train/javascript

Create an OR function that takes a list of boolean values 
and runs OR against all of them, without the || operator,.

There will be between 0 and 6 elements ( inclusive ).
Return None, nil or a similar empty value for an empty list.
*/

function alternate(items) {
  return items.length ? !!items.reduce((s, v) => !!(s + v)) : null;
}

console.log(alternate([]), null, `alternate([])`);
console.log(alternate([true]), true, `alternate([true])`);
console.log(alternate([false]), false, `alternate([false])`);
console.log(
  alternate([true, false, true]),
  true,
  `alternate([true,false,true])`,
);
console.log(alternate([true, true, true]), true, `alternate([true,true,true])`);
console.log(
  alternate([false, false, false]),
  false,
  `alternate([false,false,false])`,
);

// best (я лошара!)
/* 
function alternate(items) {
  return !items.length ? null : items.includes(true);
}
*/
