/* 
6kyu - Words to Hex
https://www.codewars.com/kata/596e91b48c92ceff0c00001f/train/javascript

Дана строка, которая может состоять из любой комбинации слов или символов.
Надо преобразовать слова, составляющие эту строку, в шестнадцатеричные значения, 
которые могут быть прочитаны как значения цвета типа "#RRGGBB"

Слова разделяются пробелами.

Каждое слово будет представлять шестнадцатеричное значение, беря первые три буквы каждого слова 
и находя код ASCII каждого его символа. Символы скомбинировать в значние RGB типа "#ffffff".
Если слово короче 3 букв, добавить "00"

*/

function wordsToHex(words) {
  return words.split(' ').map(word => '#' + [...word.slice(0, 3).padEnd(3, '\xFF')].map(c => c == '\xFF' ? '00' : c.charCodeAt().toString(16)).join(''));
}

console.log(wordsToHex("Hello, my name is Gary and I like cheese."));
console.log(wordsToHex("ThisIsOneLongSentenceThatConsistsOfWords"), ['#546869']);
console.log(wordsToHex("0123456789"), ['#303132']);
console.log(wordsToHex("Blah blah blah blaaaaaaaaaaaah"), ['#426c61', '#626c61', '#626c61', '#626c61']);

// best

/* 
function wordsToHex(words) {
  return words.split(' ').map(w =>
    '#' + [0, 1, 2].map(i =>
      (w.charCodeAt(i) || '00').toString(16)
    ).join('')
  );
}
*/