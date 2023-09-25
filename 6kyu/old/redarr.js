/* 
6kyu - TV channels
https://www.codewars.com/kata/5836dce6966f8d1d43000007/train/javascript

Program channels into your TV's memory. 
An array with channels (strings) will be passed as an argument 
to the function redarr(). 
- Sort the channels in an alphabetical order, 
- remove duplicates and, finally, 
- return an object where each channel (object's value) 
  is assigned to a whole number (objects's key), starting with 0.
*/

function redarr(arr) {
  arr.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
  return [...new Set(arr)]
    .reduce((o, c, i) => { o[i] = c; return o; }, {})
}

/*
final:
const redarr = (arr) => [...new Set(arr.sort((a, b) => a < b ? -1 : a > b ? 1 : 0))].reduce((o, c, i) => { o[i] = c; return o; }, {})


*/

// best
/* 
function redarr(arr) {
  return Object.assign({}, Array.from(new Set(arr)).sort());
}
*/