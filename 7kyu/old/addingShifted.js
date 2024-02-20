/* 
7kyu - Adding values of arrays in a shifted way
https://www.codewars.com/kata/57c7231c484cf9e6ac000090/train/javascript

Adding values of arrays in a shifted way
You have to write a method, that gets two parameter:

1. An array of arrays with int-numbers
2. The shifting value

The method should add the values of the arrays to one new array.

The arrays in the array will all have the same size and this size will always be greater than 0.
The shifting value is always a value from 0 up to the size of the arrays.
There are always arrays in the array, so you do not need to check for null or empty.

123456000000 (6)       
000777777000 (3)
000000111111 (6)
*/

function addingShifted(arrayOfArrays, shift) {
  let arr = arrayOfArrays.map((a, i) => new Array(i * shift).fill(0).concat(a).concat(new Array((arrayOfArrays.length - 1) * shift - i * shift).fill(0)));
  let res = [];
  for (let i = 0; i < arr[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j][i];
    }
    res.push(sum);
  }
  return res;
}

var arrayOfArrays = [[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, -7]];
var expected = [8, 9, 10, 11, 12, -1];
var result = addingShifted(arrayOfArrays, 0);
console.log(result, expected);

arrayOfArrays = [[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, 7]];
expected = [1, 2, 3, 11, 12, 13, 7, 7, 7];
result = addingShifted(arrayOfArrays, 3);
console.log(':', result, '=>', expected);

arrayOfArrays = [[1, 2, 3, 4, 5, 6], [7, 7, 7, -7, 7, 7], [1, 1, 1, 1, 1, 1]];
expected = [1, 2, 3, 11, 12, 13, -6, 8, 8, 1, 1, 1];
result = addingShifted(arrayOfArrays, 3);
console.log(result, expected);

// best
/* 
function addingShifted (arrayOfArrays, shift) {    
    var result = [];
    var endArrayLength = arrayOfArrays[0].length + shift * (arrayOfArrays.length - 1);
    for(var i=0;i<endArrayLength;i++)
    {
      result.push(0);
    }
        
    for(var i=0;i<arrayOfArrays.length;i++)
    {
      for(var j=0;j<arrayOfArrays[i].length;j++)          
      {
        result[j + shift * i] += arrayOfArrays[i][j];
      }          
    }
        
    return result;
}
*/

/* 
const addingShifted=(a,n)=> Array(n*(a.length-1)+a[0].length).fill(0).map((_,j)=>a.reduce((x,y,i)=>x+(y[j-i*n]||0),0))
*/