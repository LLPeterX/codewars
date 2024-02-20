/* 
7kyu - Please help Bob
https://www.codewars.com/kata/5751fef5dcc1079ac5001cff/train/javascript

Bob is begging you to write a function that adds "err" 
to the end of every word whose last letter is a consonant (not a vowel, 
"y" counts as a consonant).

The input is a string that can contain upper and lowercase characters, 
some punctuation but no numbers. 
The solution should be returned as a string.

NOTE: If the word ends with an uppercase consonant, the following "err" 
will be uppercase --> "ERR".

eg:

"Hello, I am Mr Bob" --> "Hello, I amerr Mrerr Boberr"

"THIS IS CRAZY!"  --> "THISERR ISERR CRAZYERR!"
*/

function errBob(string) {
  return string.split(' ').map(word => {
    let suffix = word.match(/[^a-z]+$/i) ?? "";
    let prefix = word.replace(/[^a-z]+$/i, '');
    if (prefix.length) {
      let lastLetter = prefix.slice(-1);
      if (!/[aieou]/i.test(lastLetter)) {
        prefix += lastLetter === lastLetter.toLowerCase() ? 'err' : 'ERR';
      }
      return prefix + suffix;
    }
  }).join(' ');
}

console.log(errBob("Hello, I am Mr Bob"), "Hello, I amerr Mrerr Boberr")
console.log(errBob("THIS, is crazy!"), "THISERR, iserr crazyerr!")
console.log(errBob("r r r r r r r r"), "rerr rerr rerr rerr rerr rerr rerr rerr")
console.log(errBob("hI, hi. hI hi skY! sky? skY sky"), "hI, hi. hI hi skYERR! skyerr? skYERR skyerr")
console.log(errBob("This, is. another! test? case to check your beautiful code."), "Thiserr, iserr. anothererr! testerr? case to checkerr yourerr beautifulerr code.")

// best

/* 
onst errBob = string =>
  string
    .replace(/([bcdfghjklmnpqrstvwxyz])(\W|$)/g, '$1err$2')
    .replace(/([BCDFGHJKLMNPQRSTVWXYZ])(\W|$)/g, '$1ERR$2');
*/

/* 
function errBob(string){
  return string.replace(/([^aeiou\W])(\W|$)/ig, "$1err$2").replace(/([A-Z])err/g, "$1ERR");
}
*/