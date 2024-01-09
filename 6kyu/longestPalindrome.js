/* 
6kyu - Longest palindrome
https://www.codewars.com/kata/5a0178f66f793bc5b0001728/train/javascript

A palindrome is a series of characters that read the same forwards as backwards 
such as "hannah", "racecar" and "lol".

For this Kata you need to write a function that takes a string of characters 
and returns the length, as an integer value, of longest alphanumeric palindrome 
that could be made by combining the characters in any order but using each character only once. 

The function should not be case sensitive.

For example if passed "Hannah" it should return 6 
and if passed "aabbcc_yYx_" it should return 9 because one possible palindrome would be "abcyxycba".


*/

function longestPalindrome(str) {
  let counts = Object.values([...str.toLowerCase()]
    .filter(c => /[a-z\d]/i.test(c))
    .reduce((o, c) => { o[c] = (o[c] || 0) + 1; return o; }, {}))
  let c2 = 0;
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] % 2 === 0) {
      c2 += counts[i];
      counts[i] = 0;
    } else if (counts[i] > 2) {
      c2 += counts[i] - 1;
      counts[i] = 1;
    }
  }
  return c2 + counts.some(e => e % 2);
}

console.log(longestPalindrome("B"), 1, "Remember a string of length 1 is still the same backwards as forwards")
console.log(longestPalindrome("xyz__a_/b0110//a_zyx"), 13, "Remember to include alphanumeric characters only")
console.log(longestPalindrome("$aaabbbccddd_!jJpqlQx_.///yYabababhii_"), 25, "Don't forget to make it not case sensitive")


// best
/* 
function longestPalindrome(str) {
  var s=str.toLowerCase();
  var arr='abcdefghijklmnopqrstuvwxyz0123456789'
  var count=0;
  for (var i=0; i<arr.length; ++i)
  {
    var c=0;
    for (var j=0; j<s.length; ++j)
      if (s[j]==arr[i])
        c++;
    count+=Math.floor(c/2)*2;
  }
  return count==s.length?count:++count
}
*/