/* 
6kyu - Replace letters
https://www.codewars.com/kata/5a4331b18f27f2b31f000085/train/javascript

Дано слово из строчных букв.
1. Заменить каждую гласную букву на первую согласную слева от неё по алфавиту
2. Заменить каждую согласную букву на первую гласную справа
Алфавит представить в виде "кольца"

Доступны константы:
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
const vowels = ['a','e','i','o','u'];
*/

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
const vowels = ['a', 'e', 'i', 'o', 'u'];


const isVowel = c => vowels.includes(c);
function replaceLetters(word) {
  return word.replace(/./g, (c) => {
    let i = alphabet.indexOf(c);
    if (isVowel(c)) {
      return c === 'a' ? 'z' : alphabet[i - 1];
    }
    while (!isVowel(alphabet[i % 26])) i++;
    return alphabet[i % 26];
  });
}

// console.log(replaceLetters('cat'), 'ezu');
console.log(replaceLetters('codewars'), 'enedazuu');
console.log(replaceLetters('abcdtuvwxyz'), 'zeeeutaaaaa');

// best
/* 
replaceLetters=w=>w.replace(/./g,c=>"zeeediiihooooonuuuuutaaaaa"[c.charCodeAt()-97])
*/