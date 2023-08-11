/* 
7kyu - Change two-dimensional array
https://www.codewars.com/kata/581214d54624a8232100005f/train/javascript
*/

function matrix(array) {
  for (let i = 0; i < array.length; i++) {
    array[i][i] = array[i][i] < 0 ? 0 : 1;
  }
  return array;
}


//cool
/*
function matrix(a) {
    return a.map((a,i)=>a.map((a,j)=>i==j?+!(a<0):a))
}
*/
