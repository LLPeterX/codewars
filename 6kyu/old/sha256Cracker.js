/* 
6kyu - SHA-256 Cracker
https://www.codewars.com/kata/587f0abdd8730aafd4000035/train/javascript

This kata aims to show the vulnerabilities of hashing functions for short messages.

When provided with a SHA-256 hash, return the value that was hashed. 
You are also given the characters that make the expected value, but in alphabetical order.

The returned value is less than 10 characters long. 

Return null for Javascript when the hash cannot be cracked with the given characters.
*/
const { createHash } = require('crypto');

// from https://stackoverflow.com/questions/9960908/permutations-in-javascript
const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
      }
    }
  }
  permute(inputArr)
  return result;
}

function sha256Cracker(hash, chars) {
  const variants = permutator([...chars]);
  for (let i = 0; i < variants.length; i++) {
    let str = variants[i].join('');
    if (createHash('sha256').update(str).digest('hex') === hash) return str;
  }
  return null;
}


console.log(sha256Cracker("b8c49d81cb795985c007d78379e98613a4dfc824381be472238dbd2f974e37ae", "deGioOstu"), "GoOutside");
console.log(sha256Cracker("3f39d5c348e5b79d06e842c114e6cc571583bbf44e4b0ebfda1a01ec05745d43", "D"), "D"); // FAIL - ???
console.log(sha256Cracker("4b68ab3847feda7d6c62c1fbcbeebfa35eab7351ed5e78f4ddadea5df64b8015", "Q"), null); // FAIL - ???

// best
/* 
et sha256 = require("crypto-js/sha256");

function sha256Cracker(hash, chars) {
  for (let perm of permutations(chars.split('')))
    if (sha256(perm.join('')) == hash)
      return perm.join('');
  return null;
}

function* permutations(permutation) {
  var length = permutation.length,
      c = new Array(length).fill(0),
      i = 1, k, p;
  yield permutation.slice();
  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      yield permutation.slice();
    } else {
      c[i] = 0;
      ++i;
    }
  }
}
*/