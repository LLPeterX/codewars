/* 
7kyu - Simple Fun #215: Properly Closed Bracket Word
https://www.codewars.com/kata/59000d6c13b00151720000d5/train/javascript

Task
We call letter x a counterpart of letter y, if x is the ith letter of the English alphabet, and y is the (27 - i)th for each valid i (1-based). For example, 'z' is the counterpart of 'a' and vice versa, 'y' is the counterpart of 'b', and so on.

A properly closed bracket word (PCBW) is such a word that its first letter is the counterpart of its last letter, its second letter is the counterpart of its last by one letter, and so on.

Determine if the given word is a PCBW or not.
*/

const closedBracketWord = (word) =>
  word ==
  [...word]
    .map(
      (c) =>
        "zyxwvutsrqponmlkjihgfedcba"["abcdefghijklmnopqrstuvwxyz".indexOf(c)],
    )
    .reverse()
    .join("");
