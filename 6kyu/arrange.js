/* 
6kyu - Back and forth then Reverse!
https://www.codewars.com/kata/60cc93db4ab0ae0026761232

A list S will be given. You need to generate a list T from it by following the given process:

* Remove the first and last element from the list S and add them to the list T.
* Reverse the list S
* Repeat the process until list S gets emptied.
* The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.
*/

function arrange(s) {
  let T = [];
  let l = 0, r = s.length - 1, k = 0;
  while (l < r) {
    if (k % 2 == 0) {
      T.push(s[l]);
      T.push(s[r]);
    } else {
      T.push(s[r]);
      T.push(s[l]);
    }
    l++;
    r--;
    k++;
  }
  if (s.length % 2) T.push(s[l]);
  return T;
}

console.log(arrange([1, 2, 3, 4, 5, 6]), [1, 6, 5, 2, 3, 4]);
console.log(arrange([4, 3, 2]), [4, 2, 3]);

// best

/*
function arrange(s) {

  let res = []
  ,     i = 0
  ,     j = s.length - 1;

  while (i <= j) {
    if (Math.ceil(res.length / 2) % 2) {
      res.push(s[j]);
      j--;
    }
    else {
      res.push(s[i]);
      i++;
    }
  }

  return res;

}
*/


/*
function arrange(s) {
  let arr = []
  for(let i = 0, j = s.length -1; i < Math.ceil(s.length /2); i+=2, j-=2){
    arr.push(s[i])
    arr.push(s[j])
    arr.push(s[j-1])
    arr.push(s[i+1])
  }
  return arr.slice(0, s.length)
}
*/

// cool
/* 
const arrange = (s, l = s.length - 1) => s.map((_, i) => s[i + 1 & 2 ? l - (i >> 1) : i >> 1]);
*/