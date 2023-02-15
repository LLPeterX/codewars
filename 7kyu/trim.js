/* 
7kyu - Trimming a string
https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript
*/

function trim(str, size) {
  if (str.length <= size) return str;
  if (str.length <= 3 || str.length < size || size <= 3) return str.slice(0, size) + '...';
  return str.slice(0, size - 3) + '...';
}

console.log(trim("Creating kata is fun", 14), "Creating ka...");
console.log(trim("He", 1), "H...");
console.log(trim("Code Wars is pretty rad", 50), "Code Wars is pretty rad");
console.log(trim("Creating kata is fun", 2), "Cr...");
console.log(trim("Code Wars is pretty rad", 3), "Cod...");

// best

/* 
function trim ( str, size ) {
  if ( str.length <= size ) {
    return str;
  }
  const real = str.slice(0, size);
  return `${real.length < 4 ? real : real.slice(0, -3)}...`;
}
*/

/* 
const trim = (str, size) => str.length <= size ? str : str.slice(0, size - (size <= 3 ? 0 : 3)) + '...';
*/