/* 
5kyu - Find the Partition with Maximum Product Value
https://www.codewars.com/kata/5716a4c2794d305f4900156b

You are given a certain integer, n, n > 0. 
You have to search the partition or partitions, of n, with maximum product value.

So our needed function will work in that way: 
If there is only one partition with maximum product value, 
it will return a list of two elements, the unique partition and the product value.

Example (input -> output)
8 -> [[3, 3, 2], 18]

If there are more than one partition with maximum product value, 
the function should output the partitions in a length sorted way.

Example (input -> output)
10 --> [[4, 3, 3], [3, 3, 2, 2], 36]
*/

// from https://planetcalc.ru/9391/

function findPartMaxProd(n) {
  let a = Array(n).fill(1);
  let r = [];
  let maxProd = n;
  while (a[0] != n) {
    let prod = a.reduce((m, v) => m * v, 1);
    if (prod >= maxProd) {
      r.push([prod, [...a]]);
      maxProd = prod;
    }
    let min = sum = tempSum = a[0];
    let minIndex = 0;
    for (let j = 1; j < a.length - 1; ++j) {
      tempSum += a[j];
      if (min > a[j]) {
        min = a[j];
        minIndex = j;
        sum = tempSum;
      }
    }
    a[minIndex]++;
    sum++;
    a.splice(minIndex + 1);
    for (let k = 0; k < n - sum; ++k) a.push(1);
  }
  return [...r
    .sort((a, b) => b[0] - a[0] || a[1].length - b[1].length)
    .filter((e, i, a) => e[0] === a[0][0])
    .map(e => e[1])
    , maxProd];
}

console.log(findPartMaxProd(8));
console.log(findPartMaxProd(10));

// best

/* 
function findPartMaxProd(n){
    let a=n/3|0, b=n%3;
    let o = Array.from({length:a},_=>3);
    let x = 3**a;
    
    if(!b) return [o, x];
    if(b==1){
        let o2 = o.slice();
        o2[a-1]--; o2.push(2);
        o[0]++;
        return [o,o2,x/3*4]
    }
    o.push(2);
    return [o, x*2];
}
*/

/* 
unction findPartMaxProd(n){
   var s=[], min=0; arr=[]; cc=0; getCombinations(n,n,[]);
   for (var i=0; i<arr.length;i++) if ((p=arr[i].reduce((t,a)=>t*a,t=1))>=min) {if (p>min) s=[]; min=p; s.push(arr[i])}
   return s.sort((a,b)=>a.length-b.length).concat([min]);
}
var arr,cc;

function getCombinations(n, max, all) {
   if (cc>50) return; else if (n==0) {arr.push(all); cc++; return}
   for (var i=2; i<=Math.min(max,n); i++) getCombinations(n-i,i,all.concat([i]));
}
*/