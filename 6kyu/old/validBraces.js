/* 
6kyu - Valid Braces
https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

Write a function that takes a string of braces, and determines if the order of the braces is valid. 
It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: 
brackets [], and curly braces {}. 
Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
*/

function validBraces(braces) {
  const skobki = "({[)}]", arr = [];
  for (let b of braces) {
    let i = skobki.indexOf(b);
    if (i < 3) {
      arr.push(b);
    } else {
      let j = skobki.indexOf(arr.pop());
      if (j === undefined || i % 3 != j) return false;
    }
  }
  return arr.length === 0;
}



// cool

/* 
function validBraces(braces){
 while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
 return !braces.length;
}
*/

/* 
function validBraces(braces){
  for (var i = 0, depth = []; i < braces.length; i++) {
    switch (braces[i]) {
      case '(': case '[': case '{': depth.push(braces[i]); break;
      case ')': if (depth.pop() != '(') return false; break;
      case ']': if (depth.pop() != '[') return false; break;
      case '}': if (depth.pop() != '{') return false; break;
    }
  }
  return depth.length == 0;
}
*/