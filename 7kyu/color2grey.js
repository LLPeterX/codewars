/* 
7kyu - Convert Color image to greyscale
https://www.codewars.com/kata/590ee3c979ae8923bf00095b/train/javascript
*/

function color2grey(image) {
  return image.map(row => row.map(([r, g, b]) => Array(3).fill().map(_ => Math.round((r + g + b) / 3))))
}

console.log(color2grey([
  [[123, 231, 12], [56, 43, 124]],
  [[78, 152, 76], [64, 132, 200]]
]), '=>', [
  [[122, 122, 122], [74, 74, 74]],
  [[102, 102, 102], [132, 132, 132]]
])