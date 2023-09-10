/* 
7kyu - Training JS #26: methods of arrayObject---map()
https://www.codewars.com/kata/572fdeb4380bb703fc00002c/train/javascript
*/

function isolateIt(arr) {
  return arr.map(e => e.slice(0, e.length / 2) + '|' + e.slice(e.length / 2 + e.length % 2));
}

/*
Expected: '[\'ab|cd\', \'ef|gh\']',
insteadt: '[[\'ab|cd\'], [\'ef|gh\']]'
*/

// best

/* 
function isolateIt(arr){
  return arr.map(s=>s.slice(0,s.length/2)+"|"+s.slice(-s.length/2));
}
*/

/* 
function isolateIt(arr){
  //coding here...
  return arr.map(function(value) {
    return value.substring(0, value.length/2) + "|" + value.slice(Math.round(value.length/2));
  });
}
*/