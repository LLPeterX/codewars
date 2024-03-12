/* 
6kyu - Simple Fun #279: Finding K
https://www.codewars.com/kata/5919427e5ffc30804900005f/train/javascript
*/

function findingK(arr) {
  let max = Math.max(...arr);
  if (new Set(arr).size == 1) return -1;
  for (let k = max; k > 0; k--) {
    let ok = true;
    for (let i = 0; i < arr.length && ok; i++) {
      let mi = arr[i] % k;
      for (let j = 0; j < arr.length; j++) {
        if (mi != arr[j] % k) {
          ok = false;
          break;
        }
      }
    }
    if (ok) return k;
  }
  return -1;
}

console.log(findingK([1, 2, 3]), 1)
console.log(findingK([1, 1, 1]), -1)
console.log(findingK([5, 2, 8]), 3)
console.log(findingK([1, 7, 13]), 6)

// best

/* 
function findingK(arr) {
  if(arr.every(a => a==arr[0])) return -1;      // Edge: all items identical
  for(let i=Math.max(...arr); i>0; i--){
    if(arr.every(a=>a%i == arr[0]%i)) return i;
  }
}
*/

/* 
const gcd = (a,b) => b ? gcd(b, a%b) : a
const findingK = a => a.map(x=>x-Math.min(...a)).reduce(gcd)||-1
*/