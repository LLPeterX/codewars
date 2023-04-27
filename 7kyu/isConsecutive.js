/* 
7kyu - Grouping in string
https://www.codewars.com/kata/5ee8ba31b44cc30032cbce04/train/javascript

*/

function isConsecutive(str) {
  let x = str.replace(/(.)\1+/g, (c) => String.fromCharCode(65 + +c[0]));
  return new Set([...x]).size === x.length;
}

console.log(isConsecutive("112200"), true);
console.log(isConsecutive("1222334556667"), true);
console.log(isConsecutive("001234400522"), false);

// best

/* 
const isConsecutive=s=> {
    let arr=s.match(/(.)\1*/g);
return arr.length == new Set(arr).size;
}
* /

/* 
isConsecutive=s=>/^((.)\2*(?!.+\2))*$/.test(s)

function isConsecutive(str) {
  return !/(.)((?!\1).)+\1/.test(str);
}
*/