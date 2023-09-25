/* 
6kyu - Ziiiiip!
https://www.codewars.com/kata/5298ad7cd0f550269500051b
*/

function zipObject(keys, values) {
  if (!keys) return {};
  if (Array.isArray(keys[0])) {
    return keys.reduce((o, v) => { o[v[0]] = v[1]; return o; }, {});
  }
  return keys.reduce((o, k, i) => { o[k] = values && values[i]; return o }, {});
}

console.log(zipObject(['fred', 'barney'], [30, 40]));
console.log(zipObject(['fred', 'barney']));
console.log(zipObject());
console.log(zipObject([["a", 1], ["b", 2]]));