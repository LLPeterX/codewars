/* 
7kyu - sum2total
https://www.codewars.com/kata/559fed8454b12433ff0000a2

Write a function that takes an array/list of numbers and returns a number such that

Explanation total([1,2,3,4,5]) => 48

1+2=3--\ 3+5 =>     8 \
2+3=5--/ \            ==  8+12=>20\     
          ==>5+7=> 12 / \           20+28 => 48
3+4=7--\ /            == 12+16=>28/
4+5=9--/ 7+9 =>     16  /
*/

function total(arr) {
  while (arr.length > 1) {
    let tmp = [];
    for (let i = 0; i < arr.length - 1; i++) {
      tmp.push(arr[i] + arr[i + 1]);
    }
    arr = tmp;
  }
  return arr[0];
}

console.log(total([1, 2, 3, 4, 5]), 48);
console.log(total([1, 2, 3]), 8);
console.log(total([1, 2, 3, 4]), 20);

// best

/* 
function total(arr){
  return arr.length > 1 ? total(arr.reduce((a, v, i, arr) => i ? a.concat(v + arr[i - 1]) : a, [])) : arr[0];
}
*/

/* 
const total = arr => arr.length == 1 ? arr[0] : total(arr.slice(1).map((v, i) => arr[i] + v));
*/