/* 
6kyu - longest_palindrome
https://www.codewars.com/kata/54bb6f887e5a80180900046b

Find the length of the longest substring in the given string s that is the same in reverse.
*/

/*
// Этот вариант не работает для палиндромов четной длины
const longestPalindrome = (s) => {
  s = s.toLowerCase();
  let n = s.length;
  let h = Array(n).fill(0);
  let C = 0, R = 0; //      центр и радиус или крайний правый палиндром
  let besti = 0, bestj = 0; // центр и радиус самого длинного палиндрома
  for (let i = 0; i < n; i++) {
    if (i < C + R) {
      j = h[C - (i - C)];
      if (j < C + R - i) {
        h[i] = j;
        continue;
      } else if (j > C + R - i) {
        h[i] = C + R - i;
        continue;
      }
    } else {
      j = 0;
    }
    while (i - j > 0 && i + j < n - 1 && s[i - j - 1] == s[i + j + 1]) j++;
    h[i] = j;
    if (j > bestj) {
      besti = i;
      bestj = j;
    }
    if (i + j > C + R) {
      C = i;
      R = j;
    }
  }
  //return s[besti - bestj : besti + bestj + 1]
  return [s, besti, bestj, s.slice(besti - bestj, besti + bestj + 1)];
}
*/

// алгортитм Манакера - https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B8%D1%81%D0%BA_%D0%B4%D0%BB%D0%B8%D0%BD%D0%BD%D0%B5%D0%B9%D1%88%D0%B5%D0%B9_%D0%BF%D0%BE%D0%B4%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8-%D0%BF%D0%B0%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%BE%D0%BC%D0%B0#.D0.90.D0.BB.D0.B3.D0.BE.D1.80.D0.B8.D1.82.D0.BC_.D0.9C.D0.B0.D0.BD.D0.B0.D0.BA.D0.B5.D1.80.D0.B0
// тоже нифига не работет
const longestPalindrome = (s) => {
  if (!s) return 0;
  if (s.length < 2) return 1;
  let chars = Array(s.length * 2 + 1).fill('#');
  for (let i = 0; i < s.length; ++i)  chars[i * 2 + 1] = s[i];
  let rad = Array(chars.length).fill(0), r = 0, c = 0, index = 0, m = 0, maxLen = 1;

  for (let i = 1; i <= chars.length; ++i) {
    m = 2 * c - i;
    rad[i] = r > i ? Math.min(rad[m], r - i) : 0;
    while (i > rad[i] && (i + rad[i] + 1) < chars.length && chars[i - rad[i] - 1] == chars[i + rad[i] + 1]) ++rad[i];
    if (rad[i] + i > r) {
      c = i;
      r = i + rad[i];
    }
    if (maxLen < rad[i]) {
      maxLen = rad[i];
      index = i;
    }
  }
  return maxLen;
}

console.log(longestPalindrome("a"), 1)
console.log(longestPalindrome("aa"), 2)
console.log(longestPalindrome("baa"), 2)
console.log(longestPalindrome("aab"), 2)
//Test.assertNotEquals(longestPalindrome("zyabyz"), 6, "Are you sure that is a palindrome?")
console.log(longestPalindrome("baabcd"), 4)
console.log(longestPalindrome("baablkj12345432133d"), 9)
console.log(longestPalindrome("abcdefghba"), 1)

// best
/* 
var longestPalindrome=function(s){
  if (!s) return 0;
  for (let c = s.length; c > 0; c--) {
    for (let i = 0; i <= s.length - c; i++) {
      var check = s.substr(i, c);
      if (check === check.split("").reverse().join("")) return c;
    }
  }
}
*/

/* 
longestPalindrome=function(s){
  var longest = 0;
  var length = s.length;

  for(var i=0; i < length; i++){
    for(var j = i+1; j <= length; j++) {
      var str = s.slice(i,j);
      var l = str.length
      if(isPalindrome(str) && longest < l) {
        longest = l;
      }
    }
  }
  return longest;
}

function isPalindrome(s) {
  var arr = s.split("");
  return s == arr.reverse().join("");
}
*/

/* 

longestPalindrome=function(s){
  var a = s.split('');
  var length = 0;
  a.forEach(function(c, i){
    length = Math.max(exploreArrayForImpairPalindrome(i, a), length);
    length = Math.max(exploreArrayForPairPalindrome(i, a), length);
  });
  return length;
}

exploreArrayForImpairPalindrome=function(i, a){
  var length = 1;
  var iter = 1;
  while(thoseValuesAreEquals(i,i,a,iter)){
    length+=2;
    iter++;
  }
  return length;
}

exploreArrayForPairPalindrome=function(i, a){
  var length = 0;
  var iter = 0;
  while(thoseValuesAreEquals(i,i+1,a,iter)){
    length+=2;
    iter++;
  }
  return length;
}

thoseValuesAreEquals=function(i1, i2, a, iter){
  return a[i1-iter] && a[i1-iter]===a[i2+iter];
}
*/

/* 
const longestPalindrome = s => {
  let max = 0;
  let rev = [...s].reverse().join(``);
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > i; j--) {
      if (s.slice(i, j) === rev.slice(-j, (-i || rev.length)) && s.slice(i, j).length > max) max = s.slice(i, j).length;
    }
  }
  return max;
};
*/