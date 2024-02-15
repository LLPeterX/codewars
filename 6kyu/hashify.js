/* 
6kyu - Objectify all the strings
https://www.codewars.com/kata/55dd54631827120dd800002b/train/javascript

Write String.prototype.hashify()
that will turn a string into a hash/object. 
Every character in the string will be the key for the next character.

E.g.
'123456'.hashify() == {"1":"2","2":"3","3":"4","4":"5","5":"6","6":"1"} // The last char will be key for 1st char

'11223'.hashify() == {"1":["1","2"],"2":["2","3"],"3":"1"} // when duplicates exist, group them in an array
// i.e. 1 is key for next char 1, that 1 is key for next char 2, but 1 is already in the hash, so add 2 to key 1
'Codewars'.hashify() == {"C":"o","o":"d","d":"e","e":"w","w":"a","a":"r","r":"s","s":"C"}
*/

String.prototype.hashify = function () {
  const obj = {};
  for (let i = 0; i < this.length; i++) {
    let key = this[i];
    let value = this[(i + 1) % this.length];
    if (key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}


console.log('123456'.hashify(), { "1": "2", "2": "3", "3": "4", "4": "5", "5": "6", "6": "1" });
console.log('Codewars'.hashify(), { "C": "o", "o": "d", "d": "e", "e": "w", "w": "a", "a": "r", "r": "s", "s": "C" });
console.log('this is a string'.hashify(), { "t": ["h", "r"], "h": "i", "i": ["s", "s", "n"], "s": [" ", " ", "t"], " ": ["i", "a", "s"], "a": " ", "r": "i", "n": "g", "g": "t" });
console.log('racecar'.hashify(), { "r": ["a", "r"], "a": ["c", "r"], "c": ["e", "a"], "e": "c" });
