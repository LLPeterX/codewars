/* 
6kyu - Random Substitution Cipher
https://www.codewars.com/kata/5943bf2895d5f74cfb000032/train/javascript

There is no input to the function. 
The output from your code should be an object in which the keys 
are simply all the letters of the English alphabet, in lower case and in alphabetical order. 
The value of each key will also be a lower-case letter, which you should select at random. 
Because it is random, it is also possible that the original letter and the substituted letter 
will be the same, as you can see in the following example of possible output:

{"a":"c", "b":"p", "c":"j", "d":"a", "e":"v", "f":"d", "g":"g", "h":"u", "i":"l", "j":"t", "k":"n", "l":"w", "m":"m", "n":"o", "o":"i", "p":"s", "q":"f", "r":"r", "s":"x", "t":"b", "u":"h", "v":"y", "w":"q", "x":"e", "y":"k", "z":"z"}

не должно быть постоянного shift'a
*/

function randomSub() {
  const a = "abcdefghijklmnopqrstuvwxyz", b = [...a], result = {};
  for (let i = 0; i < a.length; i++) {
    let k = Math.floor(Math.random() * b.length);
    result[a[i]] = b[k];
    b.splice(k, 1);
  }
  return result;
}
console.log(randomSub());

// best

/* 
const abc = "abcdefghijklmnopqrstuvwxyz";

function shuffle(arr) {
  for (let i = arr.length, j; i;) {
    j = Math.floor(Math.random() * i--);
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr;
}

function randomSub() {
  return shuffle([...abc]).reduce((res, char, idx) => (res[abc[idx]] = char, res), {});
}
*/