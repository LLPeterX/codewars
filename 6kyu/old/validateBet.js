/* 
6kyu - SMS Lottery Bet Validator
https://www.codewars.com/kata/59a3e2897ac7fd05f800005f/train/javascript

You were asked to write a simple validator for a company 
that is planning to introduce lottery betting via text messages. 
The same validator will be used for multiple games: 
e.g. 5 out of 90, 7 out of 35, etc. (N out of M)

The text messages should contain exactly N unique numbers 
between 1 and M (both included), separated by a comma (,) 
and/or space(s). Any other character makes the bet invalid.

Your task
You receive the game type and the user's text message as input, 
and you need to check if the bet is valid or not. 
If it's valid, return the chosen numbers as a list, sorted in increasing order. 
If it's invalid, return null.

Note: Leading and trailing spaces will not be tested. 
Tabs, newlines and other whitespaces are not tested either. 
Think of a classic Nokia 3310 user for reference :-)
*/


/* 
Алгоритм: 
1) вычленяем числа по разделителям ПРОБЕЛ или ЗАПЯТАЯ
2) проверяем что в получившемся массиве остались только числа в диапазоне 1...M. Иначе возвращаем null
4) проверяем, что все числа уникальные и их количество равно N
*/
function validateBet([n, m], text) {
  let nums = (text.split(/[,\s]+/g) || []).map(Number);
  if (!nums.length) return null;
  if (nums.some(e => isNaN(e) || e < 1 || e > m)) return null;
  if (new Set(nums).size === n && nums.length === n) {
    return nums.sort((a, b) => a - b);
  }
  return null;
}

[
  [[5, 90], "1 2 3 4 5", [1, 2, 3, 4, 5]],
  [[5, 90], "5 , 3, 1   4,2", [1, 2, 3, 4, 5]],
  [[5, 90], "1, 2, 3; 4, 5", null],
  [[5, 90], "1, 2, 3, 4", null],
  [[5, 90], "1, 2, 3, 4, 95", null],
  [[5, 90], "", null],
  [[5, 90], "1, 2, 3 4 5 6", null],
  [[5, 90], "0 1 2 3 4", null],
  [[5, 90], "1 1 1 1 1", null],
  [[5, 90], "1 2 3 4 5 5", null],
  [[5, 90], "I 2 3 4 5", null],
  [[5, 90], "1, 2, 3; 4, 5", null],
  [[4, 90], "1 1 1 2 5 45", null],
  [[6, 41], "5,22,18,65,32,19,27", null],
  [[3, 7], "2,2 , 2", null],
  [[5, 95], "65 5 36 66 28", [5, 28, 36, 65, 66]],
  [[7, 74], "5 , 17 ,63 , 32   48, 73   4", [4, 5, 17, 32, 48, 63, 73]],
  [[4, 4], "4 3, 2, 1", [1, 2, 3, 4]],
].forEach(([game, txt, ans]) => console.log(validateBet(game, txt), ans))