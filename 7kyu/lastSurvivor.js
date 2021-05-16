/* 
7kyu - Last Survivor
https://www.codewars.com/kata/609eee71109f860006c377d1
(beta)
 */

function lastSurvivor(letters, coords) {
  let arr = letters.split('');
  while(arr.length && coords.length) {
    let i = coords.shift();
    arr = arr.slice(0,i).concat(arr.slice(i+1));
  }
  return arr.join('');
}

console.log(lastSurvivor('abc', [1, 1])); // 'a'
console.log(lastSurvivor('kbc', [0, 1])); // 'b'
// best
/* 
function lastSurvivor(letters,coords) { return coords.reduce( (letters,coord) => letters.slice(0,coord) + letters.slice(coord+1) , letters ); }
*/

/* 
function lastSurvivor(letters, coords) {
  for (let c of coords)
    letters = letters.substr(0, c) + letters.substr(c+1);
  return letters;
}
*/

/* 
const lastSurvivor=(s,a)=>[...a].reduce((a,c)=>[...a].filter((e,i)=>i!==c),s)[0]
*/