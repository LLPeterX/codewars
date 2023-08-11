/* 
7kyu - Jenny the youngest detective
https://www.codewars.com/kata/58b972cae826b960a300003e/train/javascript

In order to find out what the word is, you should use the sticker (array of 3 numbers) to retrive 3 letters from the comment (string) that create the word.

Each of the numbers in the array refers to the position of a letter in the string, in increasing order.
Spaces are not places, you need the actual letters. No spaces.
The returned word should be all lowercase letters.
if you can't find one of the letters using the index numbers, return "No mission today". Jenny would be very sad, but that's life... :(
 */

function missingWord(nums, str) {
  str = str.replace(/\s+/g, '').toLowerCase();
  let result = nums.sort((a, b) => a - b).reduce((s, v) => s + str[v], "");
  return result.match(/undefined/) ? "No mission today" : result;
}

console.log(missingWord([5, 0, 3], "I love you"), "ivy")
console.log(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog"), "bay")
console.log(missingWord([12, 4, 6], "Good Morning"), "No mission today")

//best
/* 
function missingWord(nums, str) {
  var result = "";
  var string = str.split(" ").join("");
  nums.sort((a,b) => a - b);
  nums.forEach(function(x){ 
    if(string[x]){
      result += string[x].toLowerCase();
    }else{
      result = "No mission today";
    }
  });
  return result;
}
*/

/* 
const missingWord = (nums, str) =>
  nums.sort((a, b) => a - b)[nums.length - 1] < (str = str.replace(/\s/g, ``).toLowerCase()).length ?
    nums.map(val => str[val]).join(``) : `No mission today`;
*/