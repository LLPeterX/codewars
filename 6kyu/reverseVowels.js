/* 
6kyu - Reverse Vowels In A String
https://www.codewars.com/kata/585db3e8eec141ce9a00008f
*/

const isVowel = (c) => /[aeiou]/i.test(c);
function reverseVowels(str) {
  let arr = [...str];
  let vowels = arr.filter(isVowel).reverse();
  for (let i = k = 0; i < arr.length; i++) {
    if (isVowel(arr[i])) {
      arr[i] = vowels[k++];
    }
  }
  return arr.join``;
}

console.log(reverseVowels("Hello!"), "Holle!");
console.log(reverseVowels("Reverse Vowels In A String"), "RivArsI Vewols en e Streng");

// best
/* 
const reverseVowels = str => {
  let vowels = str.replace(/[^aeiou]/gi, '').split('');
  return str.replace(/[aeiou]/gi, _ => vowels.pop());
};
*/