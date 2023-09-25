/* 
6kyu - Integer depth
https://www.codewars.com/kata/59b401e24f98a813f9000026/train/javascript
*/

function computeDepth(x) {
  let res = new Set(), m = 1;
  while (res.size < 10) {
    [...("" + (x * m++))].forEach(e => res.add(e));
  }
  return m - 1;
}

console.log(computeDepth(1), 10);
console.log(computeDepth(42), 9);

// my best

/*
function computeDepth (x){
  var digits = [0,1,2,3,4,5,6,7,8,9];
  var depth  = 0;
  var multiple;

  while(digits.length) {
    multiple = (x * ++depth).toString();
    digits   = digits.filter(v => multiple.indexOf(v) === -1);
  }

  return depth;
}
*/

/*
function computeDepth(x, a = [0,1,2,3,4,5,6,7,8,9], n = 0, i = 1){
  return !a.length ? n : computeDepth(x, a.filter(v=>!(''+(x*i)).includes(v)), n+1, i+1);
}
*/

/*
computeDepth=(a,b=1,c=new Set())=>c.size>=10?b-1:computeDepth(a,b+1,new Set([...c,...''+a*b]))
*/