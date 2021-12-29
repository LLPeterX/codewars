/* 
6kyu - Pair of gloves
https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

A pair of gloves is constituted of two gloves of the same color.

You are given an array containing the color of each glove.

You must return the number of pair you can constitute.

You must not change the input array.

Examples :

const myGloves = ["red","green","red","blue","blue"];
numberOfPairs(myGloves) == 2; // red and blue

const redGloves = ["red","red","red","red","red","red"];
numberOfPairs(redGloves) == 3; // 3 red pairs
*/

function numberOfPairs(gloves) {
  let g = gloves.reduce((o, v) => {
    o[v] = o[v] ? o[v] + 0.5 : 0.5;
    return o;
  }, {});
  //console.log('g=', g);
  return Object.values(g).reduce((sum, v) => sum + Math.floor(v), 0);
}

console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]), 2);
console.log(numberOfPairs(["red", "red"]), 1);
console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]), 3);
console.log(numberOfPairs(["red", "green", "blue"]), 0);
console.log(numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black']), 3);
console.log(numberOfPairs([
  'Green', 'Gray', 'Navy', 'Gray',
  'Green', 'Black', 'Fuchsia', 'Black',
  'Green', 'Yellow', 'Lime', 'Green',
  'Black', 'Fuchsia', 'Yellow', 'Lime',
  'Green', 'Lime', 'Teal', 'Teal',
  'Black', 'White', 'Navy', 'Maroon',
  'Olive', 'Maroon', 'Aqua', 'Lime',
  'Gray', 'Blue', 'Red', 'Black',
  'Lime', 'Silver', 'Purple', 'Navy',
  'Blue', 'Black', 'Green', 'Olive',
  'Purple', 'Aqua', 'Green', 'Fuchsia',
  'Green', 'Purple', 'Aqua', 'Fuchsia',
  'Lime', 'Fuchsia', 'Yellow', 'Yellow',
  'Gray'
]), 23);

//best
/* 
function numberOfPairs(gloves)
{
  var arr = Array.from(new Set(gloves));
  return arr.reduce((a,b) => a + Math.floor(gloves.join('').match(new RegExp(b, 'g')).length / 2), 0);
}
*/

/* 
numberOfPairs=a=>[...new Set(a)].map(b=>a.join``.split(b).length-1).reduce((a,b)=>a+(b>>1),0)
*/