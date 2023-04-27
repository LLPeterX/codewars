/* 
3kyu - Alphabetic Anagrams
https://www.codewars.com/kata/53e57dada0cb0400ba000688/train/javascript

Дана строка из заглавных букв.
Можно составить N! комбинаций строк (массив) из переставленных букв (N-дина строки).
Тогда в этом массиве можно найти i-й индекс заданного слова.
Найти i

*/

// украдено из https://gist.github.com/mr-parus/9e0fedd4983f049ac179ee9c9ded31b9

const fact = n => (n < 2) ? 1 : fact(n - 1) * n;

// permutations with repetition
const countCombinations = (seq) => {
  const duplications = Object.values(
    seq.reduce((acc, e) => ({ ...acc, [e]: (acc[e] || 0) + 1 }), {})
  ).reduce((acc, el) => acc * fact(el), 1);

  return fact(seq.length) / duplications;
};

// solution
function listPosition(s) {
  const arr = s.split('');
  let order = 1;

  for (let i = 0; i < arr.length; i++) {
    const set = new Set();
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i] && !set.has(arr[j])) {
        set.add(arr[j]);
        order += countCombinations([...arr.slice(i, j), ...arr.slice(j + 1)]);
      }
    }
  }

  return order
}