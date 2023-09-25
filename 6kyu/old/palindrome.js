/* 
6kyu - Palindrome for your Dome
https://www.codewars.com/kata/53046ceefe87e4905e00072a/train/javascript
*/

function palindrome(string) {
  let s = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  return [...s].reverse().join('') === s;
}


function test(str, answer) {
  console.log(str, palindrome(str), '=>', answer);
}

test("", true);
test("101", true);
test("911", false);
test("RotaTor", true);
test("A man, a plan, a canal - Panama", true);
test("Abba Zabba, you're my only friend", false);
test("Under_scores; Serocsrednu", true);
test("Eva: Can I see bees in a cave?", true)
test("Madam? I'm Adam!", true)