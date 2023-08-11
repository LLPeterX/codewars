/* 
7kyu - Every possible sum of two digits
https://www.codewars.com/kata/5b4e474305f04bea11000148/train/javascript

Given a long number, return all the possible sum of two digits of it.

For example, 12345: all possible sum of two digits from that number are:

[ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
Therefore the result must be:

[ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]
*/

function digits(num) {
  let m = new Map();
  let res = [];
  let arr = num.toString().split('').map(Number);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (!m.has("" + i + "+" + j) && !m.has("" + j + "+" + i)) {
        let sum = arr[i] + arr[j];
        m.set("" + i + "+" + j, true);
        m.set("" + j + "+" + i, true);
        res.push(sum);
      }
    }
  }
  return res;
}

console.log(digits(156), [6, 7, 11]);
console.log(digits(81596), [9, 13, 17, 14, 6, 10, 7, 14, 11, 15]);
console.log(digits(3852), [11, 8, 5, 13, 10, 7]);
console.log(digits(3264128), [5, 9, 7, 4, 5, 11, 8, 6, 3, 4, 10, 10, 7, 8, 14, 5, 6, 12, 3, 9, 10]);
console.log(digits(999999), [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18]);

// best

/* 
function digits(num){
  let res = [];
  String(num).split('').forEach((d,i,arr) => {
    for(let j=i+1;j<arr.length;j++)
      res.push(Number(d)+Number(arr[j]));
  });
  return res;
}
*/

/* 
function digits(num){

  var numStr = num.toString();
  var result = [];
  
  for(var i = 0; i < numStr.length - 1; i++) {
    for (var j = i + 1; j < numStr.length; j++) {

      result.push( parseInt(numStr[i]) + parseInt(numStr[j]) );

    }
  }
  
  return result;

}
*/