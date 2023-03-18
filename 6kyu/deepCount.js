/* 
6kyu - Array Deep Count
https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript

You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
*/
/* 
function deepCount(a) {
  let count = 0;
  for (let element of a) {
    if (Array.isArray(element)) {
      return count + deepCount(element) + 1;
    }
    else count++;
  }
  return count;
}
 */

/* 
function deepCount(a) {
  const counter = (a) => {
    if (Array.isArray(a)) {
      return a.reduce((done, curr) => done.concat(counter(curr)), []);
    } else return a;
  }
  return counter(a);
} */

// через JSON можно было бы посчитать кол-во ',' и '[' - но не подойдет,
// т.к. внутри JSON могут быть строки с запятыми и [.
function deepCount(a) {
  if (!a) return 0;
  let json = JSON.stringify(a);
  //let c = json.replace(/[^A-Za-z0-9"'[]/g, '')
  let c = json.replace(/(\d+|[a-z]+)/gi, '_').replace(/[,"'\]]/g, '');
  //let commas = 
  //return [c, c.length];
  return c.length - 1;

}

console.log(deepCount([]), 0);
console.log(deepCount([1, 2, 3]), 3);
console.log(deepCount(["x", "y", ["z"]]), 4,);
console.log(deepCount([1, 2, [3, 4, [5]]]), 7,);
console.log(deepCount([[[[[[[[[]]]]]]]]]), 8,);
console.log(deepCount([[[]], 20, [[]]]), 5);
console.log(deepCount(["apple", 2, 3]), 3);

// best
/* 
function deepCount(a){
  return a.reduce((s,e)=>s+(Array.isArray(e)?deepCount(e):0),a.length);
}
*/

/* 
function deepCount(a){
  let count = a.length;
  for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
  return count;
}
*/

/* 
function deepCount(array) {
  var count = array.length
  
  for (const element of array) {
    if (Array.isArray(element)) {
      count += deepCount(element)
    }
  }
  
  return count
}
*/

/* 
function deepCount(arr) {
  const stack = [...arr]
  let size = 0
  
  while (stack.length) {
    const next = stack.pop()
    size += 1
    
    if (Array.isArray(next)) {
      stack.push(...next)
    }
  }
  
  return size
}
*/

/* 
function deepCount(a) {
  return JSON.stringify(a).replace(/[^[,]|\[]/g, '').length;
}
*/