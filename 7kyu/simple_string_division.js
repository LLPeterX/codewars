/* 
7kyu - Simple string division
https://www.codewars.com/kata/5b83c1c44a6acac33400009a

In this Kata, you will be given a number in form of a string and an integer k 
and your task is to insert k commas into the string and determine which of the partitions is the largest.

For example:
solve('1234',1) = 234 because ('1','234') or ('12','34') or ('123','4').
solve('1234',2) = 34 because ('1','2','34') or ('1','23','4') or ('12','3','4'). 
solve('1234',3) = 4
solve('2020',1) = 202
*/

function solve(str,k) {
  const combos=[];
  for(let i=0; i<str.length-k; i++) {
    let m = str.slice(i).match(new RegExp(`.{1,${str.length-k}}`,'g'));
    if(!m) break;
    combos.push(...m);
  }
  return Math.max(...combos);
  //return combos;
}

console.log(solve('123',1) ,23);
console.log(solve('1234',1),234);
console.log(solve('1234',2),34);
console.log(solve('1234',3),4);
// ----
console.log(solve('1234',1),234)
console.log(solve('1234',3),4)
console.log(solve('1234',2),34)
console.log(solve('2020',1),202)

// best
/* 
function solve(str,k){
  for (var i=0, n=str.length-k, max=0; i<n+k; i++) max = Math.max(max,+str.substr(i,n))
  return max
*/