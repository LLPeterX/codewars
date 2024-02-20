/* 
6kyu - String subpattern recognition III
https://www.codewars.com/kata/5a4a2973d8e14586c700000a/train/javascript

Since there is no deterministic way to tell which pattern was really 
the original one among all the possible permutations of a fitting subpattern, 
return a subpattern with sorted characters, 
otherwise return the base string with sorted characters 
(you might consider this case as an edge case, with the subpattern 
being repeated only once and thus equalling the original input string).

For example:

hasSubpattern("a") === "a"; //no repeated pattern, just one character
hasSubpattern("aaaa") === "a"; //just one character repeated
hasSubpattern("abcd") === "abcd"; //base pattern equals the string itself, no repetitions
hasSubpattern("babababababababa") === "ab"; //remember to return the base string sorted
hasSubpattern("bbabbaaabbaaaabb") === "ab"; //same as above, just shuffled
*/

/*
function hasSubpattern(string) {
  //  console.log(string);
  let counter = Object.entries([...string].reduce((o, v) => { o[v] = (o[v] || 0) + 1; return o; }, {}));
  if (counter.every(e => e[1] === counter[0][1])) {
    return [...new Set(counter.map(e => e[0]))].sort().join``;
  }
  return [...string].sort().join``;
}
*/

const gcd = (a, b) => b ? gcd(b, a % b) : a;

function gcdFromArray(arr, n) {
  let result = arr[0];
  for (let i = 1; i < n; i++) {
    result = gcd(arr[i], result);
    if (result == 1) return 1;
  }
  return result;
}

function hasSubpattern(string) {
  let countArr = Object.entries([...string].reduce((o, v) => { o[v] = (o[v] || 0) + 1; return o; }, {}));
  let g = gcdFromArray(countArr.map(e => e[1]), countArr.length);
  if (g > 1 && countArr.every(e => e[1] % g === 0)) {
    return countArr.map(e => e[0].repeat(e[1] / g)).sort().join``;
  }
  return [...string].sort().join``;
}


console.log(hasSubpattern("a"), "a");
console.log(hasSubpattern("aaaa"), "a");
console.log(hasSubpattern("abcd"), "abcd");
console.log(hasSubpattern("babababababababa"), "ab");
console.log(hasSubpattern("bbabbaaabbaaaabb"), "ab");
console.log(hasSubpattern("123a123a123a"), "123a");
console.log(hasSubpattern("123A123a123a"), "111222333Aaa");
console.log(hasSubpattern("12aa13a21233"), "123a");
console.log(hasSubpattern("12aa13a21233A"), "111222333Aaaa");
console.log(hasSubpattern("abcdabcaccd"), "aaabbccccdd");



// best


// const hasSubpattern = str => {
//   const chars = [...str].sort().join('').match(/(.)\1*/g) || [];
// const sizes = chars.map(str => str.length);
// let divisor = 1;
// for (let k = 2; k <= Math.min(...sizes); k++) {
//   if (sizes.every(size => size % k == 0)) divisor = k;
// }
// return chars.map(c => c[0].repeat(c.length / divisor)).join('');
// }


/* 
function hasSubpattern(s){
   var hash = [...s].reduce((d,c)=>(d[c]=d[c]+1||1,d),{})
   var k = Object.values(hash).reduce(g=(a,b)=>!b?a:g(b,a%b))
   return Object.entries(hash).reduce((li,i)=>li.concat(i[0].repeat(i[1]/k)),[]).sort().join('')
}
*/