/* 
5kyu - Basic Nico variation
https://www.codewars.com/kata/5968bb83c307f0bb86000015/train/javascript


*/

function nico(key, message) {
  const sortedKey = [...key].sort();
  const nkey = [...key].map(c => sortedKey.indexOf(c));
  //  console.log('nkey=', nkey, 'sorted=', sortedKey);
  const result = Array(Math.ceil(message.length / key.length) * key.length);
  //  console.log('res len=', result.length, 'ml=', message.length);
  for (let i = 0; i < Math.ceil(message.length / key.length); i++) {
    let chunk = [...message.slice(i * key.length, i * key.length + key.length)];
    //console.log(' chunk', chunk);
    for (let k = 0; k < key.length; k++) {
      result[i * key.length + k] = chunk[nkey.indexOf(k)] || ' ';
    }
  }
  return result.join('');

}

console.log(nico("crazy", "secretinformation"), '=>', "cseerntiofarmit on  ");
// console.log(nico("abc", "abcd"), '=>', "abcd  ");
// console.log(nico("ba", "1234567890"), '=>', "2143658709");
// console.log(nico("a", "message"), '=>', "message");
// console.log(nico("key", "key"), '=>', "eky");

// best
/* 
function nico (key, message)  {

  let k = key.length
  ,   m = message.length;
  
  if (m % k)
    message += ' '.repeat(k - m % k);

  let cipher = [...key]
    .map((char, i) => [char, i])
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map((a, i) => a.concat(i))
    .sort((a, b) => a[1] - b[1])
    .map(a => a[2]);

  let result = [...message ]
    .map((char, i) => [char, Math.floor(i / k) * k + cipher[i % k]])
    .sort((a, b) => a[1] - b[1])
    .map(a => a[0])
    .join('');

  return result;
  
}
*/

/* 
const encode = (encoderKey, str) => {
  const result = [];
  for (let i = 1; i <= encoderKey.length; i++) {
    result.push(str[encoderKey.indexOf(i)]);
  }
  return result.join('');
};

const nico = (key, message) => {
  const sortedKey = key.split('').sort((a, b) => a.localeCompare(b));
  let encoderKey = key.split('').map((c) => sortedKey.indexOf(c) + 1);

  const regex = new RegExp(`.{1,${key.length}}`, 'g');
  const letterChunks = message.match(regex);

  let len = letterChunks[0].length;
  if (letterChunks[letterChunks.length - 1].length < len) {
    let word = letterChunks[letterChunks.length - 1];
    letterChunks[letterChunks.length - 1] = word.padEnd(len, ' ');
  }

  return letterChunks.map((chunk) => encode(encoderKey, chunk)).join('');
};
*/