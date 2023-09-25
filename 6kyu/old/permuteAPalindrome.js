/* 
6kyu - Permute a Palindrome
https://www.codewars.com/kata/58ae6ae22c3aaafc58000079

Напишите функцию, которая будет проверять, является ли ЛЮБАЯ перестановка символов входной строки палиндромом.
Считайте себя гением, если сможете придумать версию, в которой вообще не используется ни одна функция.

*/

/* 
По идее, кол-во символов, кроме одного (м.б. не быть) должно быть кратно 2.
*/

function permuteAPalindrome(input) {
  let counter = {};
  let c2 = 0, c1 = 0;
  for (let c of input) {
    let k = (counter[c] || 0) + 1;
    counter[c] = k;
    if (k % 2 === 0) {
      c2++;
      c1--;
    } else {
      c1++;
    }
  }
  return c1 < 2;

}

console.log(permuteAPalindrome("a"), true);
console.log(permuteAPalindrome("aa"), true);
console.log(permuteAPalindrome("baa"), true);
console.log(permuteAPalindrome("aab"), true);
console.log(permuteAPalindrome("baabcd"), false);
console.log(permuteAPalindrome("racecars"), false);

console.log(permuteAPalindrome("abcdefghba"), false);
console.log(permuteAPalindrome(""), true);

// best

/* 
function permuteAPalindrome (input) { 
    let letterCounts = {};
    let pSum = 0;
    for (let i = 0; i < input.length; i++) {
        let letter = input[i];
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
    }
    for (let letterCount in letterCounts) {
        pSum += letterCounts[letterCount] % 2;
    }
    return pSum < 2;
}
*/