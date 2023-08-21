/* 
6kyu - Simple Sentences
https://www.codewars.com/kata/5297bf69649be865e6000922/train/javascript

Implement a function, so it will produce a sentence out of the given parts.

Array of parts could contain:
- words;
- commas in the middle;
- multiple periods at the end.

Sentence making rules:
- there must always be a space between words;
- there must not be a space between a comma and word on the left;
- there must always be one and only one period at the end of a sentence.

Example:

makeSentence(['hello', ',', 'my', 'dear']) // returns 'hello, my dear.'
*/

function makeSentence(parts) {
  return parts.join(' ')
    .replace(/ ,/g, ',')
    .replace(/( \.)+$/, '') + '.';
}

console.log(makeSentence(['hello', 'world']), 'hello world.')
console.log(makeSentence(['hello', ',', 'my', 'dear']), 'hello, my dear.')
console.log(makeSentence(['hello', 'world', '.']), 'hello world.')
console.log(makeSentence(['hello', 'world', '.', '.', '.']), 'hello world.')