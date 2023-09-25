/* 
6kyu - Collatz
https://www.codewars.com/kata/5286b2e162056fd0cb000c20/train/javascript
*/

function collatz(n) {
  let result = [n];
  while (n !== 1) {
    if (n % 2) n = 3 * n + 1; else n /= 2;
    result.push(n);
  }
  return result.join("->");
}

console.log(collatz(3), '=>', "3->10->5->16->8->4->2->1");

// best

/* 
function collatz(n){
  if(n===1) return "1";
  return n + "->" + collatz(n%2===0?n/2:3*n+1)
}
*/