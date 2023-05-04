/* 
5kyu - Basic DeNico
https://www.codewars.com/kata/596f610441372ee0de00006e

see also: https://www.codewars.com/kata/5968bb83c307f0bb86000015
*/

function deNico(key, m) {
  const sortedKey = [...key].sort();
  const nkey = [...key].map(c => sortedKey.indexOf(c));
  const result = Array(m.length);
  for (let i = 0; i < Math.ceil(m.length / key.length); i++) {
    let chunk = m.slice(i * key.length, i * key.length + key.length);
    for (let k = 0; k < key.length; k++) result[i * key.length + k] = chunk[nkey[k]];
  }
  return result.join('').trimEnd();
}

console.log(deNico("crazy", "cseerntiofarmit on  "), "secretinformation");
console.log(deNico("abc", "abcd"), "abcd");
console.log(deNico("ba", "2143658709"), "1234567890");
console.log(deNico("key", "eky"), "key");

// best

/* 
const deNico = (key, m) => {
    let codder = key.split('').sort().map(e => key.indexOf(e));
    return m.split('').map((_, i) => m[Math.floor(i/key.length)*key.length + codder.indexOf(i % key.length)]).join('').replace(/\s+$/,'');
}
*/