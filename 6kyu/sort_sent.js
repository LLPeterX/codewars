/* 
6kyu - Sort sentence pseudo-alphabetically
https://www.codewars.com/kata/52dffa05467ee54b93000712/train/javascript

Given a standard english sentence passed in as a string, write a method that will return a sentence made up of the same words, but sorted by their first letter. However, the method of sorting has a twist to it:

- All words that begin with a lower case letter should be at the beginning of the sorted sentence, 
  and sorted in ascending order.
- All words that begin with an upper case letter should come after that, 
  and should be sorted in descending order.

  If a word appears multiple times in the sentence, it should be returned multiple times in the sorted sentence. Any punctuation must be discarded.
*/

function sort(sentence) {
  const words = sentence.replace(/[^ a-z]/ig, '').split(' ');
  const ucases = words.filter(w => /[A-Z]/.test(w[0])).sort((a, b) => b.localeCompare(a));
  const lcases = words.filter(w => /[a-z]/.test(w[0])).sort();
  return [...lcases, ...ucases].join(' ');
}
