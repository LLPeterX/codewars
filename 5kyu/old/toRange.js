/* 
5kyu - Represent array of numbers as ranges
https://www.codewars.com/kata/58ab002d68ee07c57b000118/train/javascript
*/

function toRange(arr) {
  if (!arr || arr.length === 0) {
    return [];
  }
  return [...new Set(arr.sort((a, b) => a - b))]
    .reduce((r, v) => {
      let j = r.length - 1;
      if (j === -1 || r[j].max !== v - 1) {
        r.push({ min: v, max: v });
      } else {
        r[j].max = v;
      }
      return r;
    }, [])
    .map(function (range) {
      return range.min !== range.max ? range.min + "_" + range.max : range.min.toString();
    }).join(',');
}

// Should return an array
function toArray(str) {
  if (!str) return [];
  let res = [];
  str.split(',').forEach(e => {
    let [begin, end] = e.split('_');
    if (!end) {
      res.push(+begin);
    } else {
      for (let i = +begin; i <= +end; i++) res.push(i);
    }

  });
  return res;
}


console.log(toRange([1, 1, 2, 3, 3, 4, 5, 5])); // '1-5'
console.log(toArray('3_6,9')); // '3_6,9'

//best
/*
unction toRange(arr) {
  arr=Array.from(new Set(arr)).sort((a,b)=>a-b)
  for(var i=0,r=[];i<arr.length;){
    var s=i
    while(i<arr.length&&arr[i]+1==arr[i+1]) i++
    r.push(i==s?arr[i++]:arr[s]+"_"+arr[i++])
  }
  return r.join(",")
}
function toArray(str) {
  for(var arr=str.split(","),i=0,r=[];str!=""&&i<arr.length;i++){
    var [a,b]=(arr[i]+"_"+arr[i]).split("_")
    for(var j=+a;j<=+b;j++) r.push(j)
  }
  return r
}
*/

/*
// Should return a string representing the ranges
const toRange = arr =>
  [...new Set(arr)].sort((a, b) => a - b).map((dgt, idx, arr) => dgt + (dgt + 1 === arr[idx+1] ? '_' : ''))
                   .join`,`
                   .replace(/_,/g, '_')
                   .replace(/(_-?\d+)(?=_)/g, '');
// Should return an array
const toArray = str =>
  !str.length ? []
  : str.replace(/(-?\d+)_(-?\d+)/g, (_, num1, num2) =>
               Array.from({length: num2 - num1 + 1}, (_, idx) => +num1 + idx).join`,`)
       .split`,`.map(Number);
*/