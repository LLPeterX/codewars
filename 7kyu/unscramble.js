/* 
7kyu - Lorraine Wants to Win the TV Contest
https://www.codewars.com/kata/562dbaf65d4ab6685c0000ed/train/javascript

There are many word games that can help to make our minds more agile. 
Many TV programs, in different countries, use them as entertainment for the audience.

Lorraine had tried to win one of them many times but she was not successful in her attempts. 
The TV contest is as follows:

- The TV show host gives a random caller a scrambled word (that is incomprehensible) 
  and by rearranging those letters they have to discover a word that is in the Oxford English Dictionary.

- They have only 25 seconds to discover the word.

Her friend Bruce obtained the list of 2000, frequently used, English words used by the TV show.

Help Lorraine by making a function that will give her a list of all valid words 
that may be obtained by rearranging the scrambled word. 
There always be at least one valid word for each test case.

The list of words that Bruce obtained (keep the secret!) is named wordList. 

For words with more than six letters we have a challenge with speed. 
Try to create a suitable memoized data structure for fast hashing using the provided word_list.
*/

const wordList =
  ['a',
    'ability',
    'able',
    'about',
    'above',
    'absence',
    'absolutely',
    'academic',
    'accept',
    'access',
    'accident',
    'accompany',
    'according',
    'account',
    'achieve',
    'achievement',
    'acid',
    'acquire',
    'across',
    'act',
    'action',
    'active',
    'activity',
    'actual',
    'actually',
    'add',
    'addition',
    'additional',
    'address',
    'administration',
    'admit',
    'adopt',
    'adult',
    'advance',
    'advantage',
    'advice',
    'advise',
    'affair',
    'affect',
    'afford',
    'afraid',
    'after',
    'afternoon',
    'afterwards',
    'again',
    'against',
    'age',
    'agency',
    'agent',
    'ago',
    'agree',
    'agreement',
    'ahead',
    'aid',
    'aim',
    'air',
    'aircraft',
    'all',
    'allow',
    'almost',
    'alone',
    'along',
    'already',
    'alright',
    'also',
    'alternative',
    'although',
    'always',
    'among',
    'amongst',
    'amount',
    'an',
    'analysis',
    'ancient',
    'and',
    'animal',
    'announce',
    'annual',
    'another',
    'answer',
    'any',
    'anybody',
    'anyone',
    'anything',
    'anyway',
    'apart',
    'apparent',
    'apparently',
    'appeal',
    'appear',
    'appearance',
    'application',
    'apply',
    'appoint',
    'appointment',
    'approach',
    'appropriate',
    'approve',
    'area',
    'argue',
    'his',
    'danger',
    'garden'
  ];


function unscramble(scramble) {
  const letters = new Set();
  const sortedScramble = [...scramble].sort().join``;
  const result = [];
  for (let c of scramble) {
    if (!letters.has(c)) {
      let candidates = wordList
        .filter(word => word[0] === c && [...word].sort().join('') == sortedScramble)
      if (candidates) result.push(...candidates);
      letters.add(c);
    }
  }
  return result.sort();
}

console.log(unscramble('appyl'), ['apply']);
console.log(unscramble('shi'), ['his']);
console.log(unscramble('egrdan'), ['danger', 'garden']);

// best
/* 
function unscramble(scramble) {
    // your code here
    scramble = scramble.split('').sort().join('');
    return wordList.filter(word => word.split('').sort().join('') === scramble);
}
*/