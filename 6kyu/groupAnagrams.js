/* 
6kyu - Group Anagrams
https://www.codewars.com/kata/537400e773076324ab000262/train/javascript

Your job is to group the words in anagrams.

What is an anagram ?
star and tsar are anagram of each other because you can rearrange the letters for star to obtain tsar.

Example
A typical test could be :

// input
["tsar", "rat", "tar", "star", "tars", "cheese"]

// output
[
  ["tsar", "star", "tars"],
  ["rat", "tar"],
  ["cheese"]
]
Hvae unf !

I'd advise you to find an efficient way for grouping the words in anagrams 
otherwise you'll probably won't pass the heavy superhero test cases


*/

function groupAnagrams(words) {
  let result = {};
  for (let word of words) {
    let hash = [...word].sort().join``;
    if (hash in result) {
      result[hash].push(word);
    } else {
      result[hash] = [word];
    }
  }
  return Object.values(result);
}


console.log(groupAnagrams(["rat", "tar", "star"]), [["rat", "tar"], ["star"]]);
