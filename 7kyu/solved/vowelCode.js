/* 
7kyu - The Vowel Code
https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript

Step 1: Create a function called encode() to replace all the lowercase vowels
in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

Step 2: Now create a function called decode() to turn the numbers 
back into vowels according to the same pattern shown above.
*/


function encode(string) {
  return string.replace(/[aeiou]/g, (v) => "aeiou".indexOf(v) + 1);
}

function decode(string) {
  return string.replace(/[1-5]/g, (v) => "aeiou"[v - 1]);
}

console.log(encode('hello'), 'h2ll4');
console.log(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
console.log(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
console.log(decode('h2ll4'), 'hello');