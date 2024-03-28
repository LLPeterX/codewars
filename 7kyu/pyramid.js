/* 
7kyu - Return pyramids
https://www.codewars.com/kata/5a1c28f9c9fc0ef2e900013b/train/javascript

You must to return pyramids. Given a number n you print a pyramid with n floors

n=6:
     /\
    /  \
   /    \
  /      \
 /        \
/__________\
*/

function pyramid(n) {
  let result = "";
  for (let i = 0, left = n - 1, inner = 0; i < n - 1; i++, left--, inner += 2) {
    result += `${' '.repeat(left)}/${' '.repeat(inner)}\\\n`;
  }
  result += `/${'_'.repeat(n * 2 - 2)}\\`;
  return result;
}

