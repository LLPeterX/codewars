/* 
5kyu - All Star Code Challenge #19
https://www.codewars.com/kata/5865a407b359c45982000036

You work for an ad agency and your boss, Bob, loves a catchy slogan. 
He's always jumbling together "buzz" words until he gets one he likes. 
You're looking to impress Boss Bob with a function that can do his job for him.

Create a function called sloganMaker() that accepts an array of string "buzz" words.
The function returns an array of all possible UNIQUE string permutations 
of the buzz words (concatonated and separated by spaces).

Your boss is not very bright, so anticipate him using the same "buzz" 
word more than once, by accident. 
The function should ignore these duplicate string inputs.

sloganMaker(["super", "hot", "guacamole"]);
//[ 'super hot guacamole',
//  'super guacamole hot',
//  'hot super guacamole',
//  'hot guacamole super',
//  'guacamole super hot',
//  'guacamole hot super' ]

sloganMaker(["cool", "pizza", "cool"]); // => [ 'cool pizza', 'pizza cool' ]

Note:
- There should be NO duplicate strings in the output array
- The input array MAY contain duplicate strings, which should STILL 
  result in an output array with all unique strings
- An empty string is valid input

The order of the permutations in the output array does not matter
*/
// function permutation(array) {
//   if (array.length > 1) {
//     var firstElement = array[0];
//     var returnedArray = permutation(array.slice(1));
//     var permutedArray = [];
//     var temporaryArray = [];
//     elementLength = returnedArray[0].length;
//     for (var i = 0; i < returnedArray.length; i++)
//       for (var j = 0; j <= elementLength; j++) {
//         temporaryArray = returnedArray[i].slice(0);
//         temporaryArray.splice(j, 0, firstElement);
//         permutedArray.push(temporaryArray);
//       }
//     return permutedArray;
//   } else {
//     return [array];
//   }
//}



/*
const facts = [];
function fact(N) {
  if (N < 2) return 1;
  if (facts[N]) return facts[N];
  facts[N] = N * fact(N - 1);
  return facts[N];
}

function permutation(index, A) {
  var n = A.length;
  var i = index + 1;
  var res = [];
  for (var t = 1; t <= n; t++) {
    var f = fact(n - t);
    var k = Math.floor((i + f - 1) / f);
    res.push(A.splice(k - 1, 1)[0]);
    i -= (k - 1) * f;
  }
  if (A.length) res.push(A[0]);
  return res;
}
*/

// recursive (not efficient)
function permute(arr) {
  let result = [];
  if (arr.length === 1) return [arr];
  arr.forEach(word => {
    let tmp = permute(arr.filter(l => l !== word)).map(s => [word, ...s]);
    result = result.concat(tmp);
  });
  return result;
}

const sloganMaker = (array) => permute([...new Set(array)]).map(row => row.join(' '));


//var answer = ['super hot guacamole', 'super guacamole hot', 'hot super guacamole', 'hot guacamole super', 'guacamole super hot', 'guacamole hot super'];
var output = sloganMaker(["super", "hot", "guacamole"]);

console.log(output);

// best

/* 
function *permute(a, n = a.length) {
  if (n <= 1) yield a.slice();
  else for (let i = 0; i < n; i++) {
    yield *permute(a, n - 1);
    const j = n % 2 ? 0 : i;
    [a[n-1], a[j]] = [a[j], a[n-1]];
  }
}

var sloganMaker = function(array){
  let arr = Array.from(new Set(array))
  let newArr = Array.from(permute(arr)).map(perm => perm.join(' '))
  return newArr
}
*/

/* 
const sloganMaker = array => {
  let str = [...new Set(array)]

  let arr = [];

  function permutation(str, prefix = []) {
    // console.log(str, prefix)
    let n = str.length;
    if (n == 0) {
      if (arr.indexOf(prefix) == -1) {
        arr.push(prefix);
      }
    } else {
      for (let i = 0; i < n; i++) {
        permutation(str.slice(0, i).concat(str.slice(i + 1, n)), prefix.concat(str[i]));
      }
    }
  }
  permutation(str)
  return arr.map(x => x.join(' '));
}
*/

/* 
const sloganMaker = (a, arr = [...new Set(a)]) => {    
   const l = arr.length;
   const res = [arr.slice()];
   const c = new Array(l).fill(0);
   let i = 1, k, p;
   
   while (i < l) {     
     if (c[i] < i) {
       k = i%2 && c[i];
       p = arr[i];
       arr[i] = arr[k];
       arr[k] = p;
       ++c[i];
       i = 1;
       res.push(arr.slice());
     } else {
       c[i] = 0;
       ++i;
     }
   } 
   return arr.length ? res.map(a=>a.join` `) : []
}
*/