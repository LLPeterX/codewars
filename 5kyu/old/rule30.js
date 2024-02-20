/* 
5kyu - Rule 30
https://www.codewars.com/kata/5581e52ac76ffdea700000c1/train/javascript
*/


// FAIL WITH TIMEOUT
function rule30(list, n) {
  if (n < 0) return [1];
  let arr = [0, ...list.map(v => +Boolean(v)), 0];
  while (n--) {
    let newArr = [0];
    for (let i = 0; i < arr.length; i++) {
      //let left = i === 0 ? 0 : arr[i - 1];
      //let v = (i === 0 ? 0 : arr[i - 1]) ^ (arr[i] | (i === arr.length - 1 ? 0 : arr[i + 1]));
      newArr.push((i === 0 ? 0 : arr[i - 1]) ^ (arr[i] | (i === arr.length - 1 ? 0 : arr[i + 1])));
    }
    newArr.push(0);
    arr = newArr;
  }
  return arr.slice(1, -1);
}

console.log(rule30([1], 2));

// best
/* 
function rule30(l,n){
  for(;n-->0;)
    l=[0].concat(l).concat(0).map((b,i,a)=>+'01111000'[(a[i-1]==1)*4+(b==1)*2+(a[i+1]==1)])
  return l
}
*/

/* 
rule30=(l,n)=>n>0?rule30([0,0].concat(l).map((b,i,a)=>b^(a[i+1]|a[i+2])),n-1):l
*/