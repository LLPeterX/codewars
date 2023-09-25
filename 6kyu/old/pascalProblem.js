/* 
6kyu Pascal Problem
https://www.codewars.com/kata/53cae2709bbf4cb80c000575/train/javascript

Исправить код для построения треугольника Паскаля

function pascal(depth) {
  var results = [];
  var temp = [];
  for (var r=0; r < depth; r++) {
    for (var c=0; c < r; c++) {
      temp.push(calculate(c, r));
    }
    results.push(temp);
    temp = [];
  }
  return results;
}

function calculate(c, r) {
  if ( c == r || c == 1 )
    return 1;
  else
    return calculate(c-1, r-1) + calculate(c, r-1);
}
*/

function pascal(depth) {
  if(depth===1) {
    return [[1]];
  }
  if(depth===2) {
    return [[1],[1,1]];
  }
  var results = [[1],[1,1]];
  for(let r=2; r<depth; r++) {
    let tmp = [1];
    for(let c=0; c<results[r-1].length-1; c++) {
      tmp.push(results[r-1][c]+results[r-1][c+1]);
    }
    tmp.push(results[r-1][results[r-1].length-1]);
    results.push(tmp);
  }
  return results;
}

console.log(pascal(4));

//best
/* 
function p(d,t){if(--d)for(
t=p(d),l=t[d-1],t.push(
c=[1]),i=d;i;)c['s'
+'plice'](1,0,~~
l[i]+l[--i]);
return t||
[[1]]}
pascal
=p
*/

/*
function pascal(n) {
  let tri = [[1]]
  while (--n) tri.push(tri[tri.length-1].map((n,i,a) => i ? a[i-1] + n : 1).concat(1))
  return tri
}
*/

/* 
const pascal = depth => {
  let results = [], temp = [];
  for (var r = 0; r < depth; r++) {
    for (var c = 0; c <= r; c++) {
      temp.push(calculate(c, r));
    }
    results.push(temp);
    temp = [];
  }
  return results;
}

const calculate = (c, r) => (c === r || c === 0) ? 1 : calculate(c-1, r-1) + calculate(c, r-1);
*/