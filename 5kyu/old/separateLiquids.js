/* 
5kyu - Don't Drink the Water
https://www.codewars.com/kata/562e6df5cf2d3908ad00019e/train/javascript

Given a two-dimensional array representation of a glass of mixed liquids, 
sort the array such that the liquids appear in the glass based on their density. 
(Lower density floats to the top) The width of the glass will not change from top to bottom.

======================
|   Density Chart    |
======================
| Honey   | H | 1.36 |
| Water   | W | 1.00 |
| Alcohol | A | 0.87 |
| Oil     | O | 0.80 |
----------------------

{                             {
  { 'H', 'H', 'W', 'O' },        { 'O','O','O','O' }, // 0...3
  { 'W', 'W', 'O', 'W' },  =>    { 'W','W','W','W' }, // 4...7
  { 'H', 'H', 'O', 'O' }         { 'H','H','H','H' }  // 8...11 (всего 12) L=3, W=4
}                             }
*/

function separateLiquids(glass) {
  const density = { H: 1.26, W: 1.00, A: 0.87, O: 0.8 };
  let arr = [].concat(...glass);
  arr.sort((a, b) => density[a] - density[b]);
  return glass.map((_, i) => arr.slice(i * glass[0].length, i * glass[0].length + glass[0].length));
}


//console.log(separateLiquids([['H', 'H', 'W', 'O'], ['W', 'W', 'O', 'W'], ['H', 'H', 'O', 'O']]), '\n=>\n', [['O', 'O', 'O', 'O'], ['W', 'W', 'W', 'W'], ['H', 'H', 'H', 'H']], "");
// console.log(separateLiquids([['A', 'A', 'O', 'H'], ['A', 'H', 'W', 'O'], ['W', 'W', 'A', 'W'], ['H', 'H', 'O', 'O']]), '\n=>\n',
//   [['O', 'O', 'O', 'O'], ['A', 'A', 'A', 'A'], ['W', 'W', 'W', 'W'], ['H', 'H', 'H', 'H']], "");
//console.log(separateLiquids([['A', 'H', 'W', 'O']]), '\n=>\n', [['O', 'A', 'W', 'H']], "");
//console.log(separateLiquids([['A'], ['H'], ['W'], ['O']]), '=>', [['O'], ['A'], ['W'], ['H']], "")
//console.log(separateLiquids([]), [], "Empty array should be returned if given.");
