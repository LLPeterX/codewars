/* 
6kyu - Word a10n (abbreviation)
https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript

Write a function that takes a string and turns any and all "words" (see below) 
within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character 
like a space or hyphen (eg. "elephant-ride") will split up a series of letters 
into two words (eg. "elephant" and "ride").

The abbreviated version of the word should have the first letter, 
then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
*/

function abbreviate(string) {
  let arr = string.split(/[^a-z]+/i), seps = string.split(/[a-z]+/i);
  return arr.map((word, i) => (word.length < 4 ? word : word[0] + (word.length - 2) + word.slice(-1)) + seps[i + 1]).join``;
}

console.log(abbreviate("internationalization"), "i18n");
console.log(abbreviate("accessibility"), "a11y");
console.log(abbreviate("Accessibility"), "A11y");
console.log(abbreviate("elephant-ride"), "e6t-r2e");
console.log(abbreviate("elephant ride of"), "e6t r2e of");
console.log(abbreviate("You need, need not want, to complete this code-wars mission"), 'You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n');

// best
/* 
function abbreviate(string) {
  return string.replace(/\w{4,}/g, function(word) {
    return word[0] + (word.length - 2) + word.slice(-1);
  });
}
*/

/* 
function abbreviate(string) {
  return string.replace(/\B\w{2,}\B/g, match=> match.length);
}
*/