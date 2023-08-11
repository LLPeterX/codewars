/* 
7kyu - Clean up after your dog
https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript


*/

function crap(x, bags, cap) {
  let str = x.join('');
  if (str.includes('D')) return "Dog!!";
  return str.replace(/[^@]/g, '').length <= bags * cap ? 'Clean' : "Cr@p";
}

console.log(crap([['_', '_', '_', '_'], ['_', '_', '_', '@'], ['_', '_', '@', '_']], 2, 2), "Clean");
console.log(crap([['_', '_', '_', '_'], ['_', '_', '_', '@'], ['_', '_', '@', '_']], 1, 1), "Cr@p");
console.log(crap([['_', '_'], ['_', '@'], ['D', '_']], 2, 2), "Dog!!");