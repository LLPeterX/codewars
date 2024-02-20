/* 
6kyu - FizzBuzz++
https://www.codewars.com/kata/596925532f709fccf3000077

There is a common problem given to interviewees in software. 
It is called FizzBuzz. 
It works as follows: For the numbers between 1 and 100, 
print fizz if it is a multiple of 3 and buzz 
if it is a mutiple of 5, else print the number itself.

You are in an interview and they ask you to complete fizzbuzz 
(which can be done in a one-liner in a few langs) 
and you knock it out of the park.

Surprised by your ability, the interviewer gives you a harder problem. 
Given a list of coprime numbers, (that is that the g.c.d. 
of all the numbers == 1) and an equally sized list of words. 
compute its fizzbuzz representation up until the pattern of strings repeats itself.

Here's an example:
fizzbuzz_plusplus([2, 3, 5], ['fizz', 'buzz', 'bazz']); 
// => [1, 'fizz', 'buzz', 'fizz', 'bazz', 'fizzbuzz', 7, 'fizz', 'buzz', 
'fizzbazz', 11, 'fizzbuzz', 13, 'fizz', 'buzzbazz', 
'fizz', 17, 'fizzbuzz', 19, 'fizzbazz', 'buzz', 'fizz', 23, 
'fizzbuzz', 'bazz', 'fizz', 'buzz', 'fizz', 29 , 'fizzbuzzbazz']

Things to note:

* Your function should return an Array of the output for each index, not print it.
* If elements are 1-indexed, the 10th item is fizz + bazz as 10 == 0 (mod 2) and 10 == 0 (mod 5).
* The strings are always concatenated from left to right in appearance of array.
* The number array may not always be sorted - just use the given order of the numbers
* All numbers in the first array will always be coprime. 
* The list stops where it does because if you were to filter the numbers out, the remaining strings would repeat after this point.

Hint: What is the relation to the numbers given in the list and the length of the list?


*/

function fizzbuzzPlusPlus(numbers, words) {
  let result = [], endStr = words.join('');
  for (let n = 1; ; n++) {
    let s = "";
    for (let k = 0; k < numbers.length; k++) {
      if (n % numbers[k] === 0) s += words[k];
    }
    result.push(s || n);
    if (s === endStr) break;
  }
  return result;
}


// best
/* 
const fizzbuzzPlusPlus = (nums, words) => [...Array(nums.reduce((a,b)=>a*b)).keys()].map(x=>nums.map((v,i)=>(x+1)%v===0?words[i]:'').join('')||x+1);
*/