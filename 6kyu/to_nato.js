/* 
6kyu - If you can read this...
https://www.codewars.com/kata/586538146b56991861000293/train/javascript
*/
/*
const NATO = {
  a: 'Alfa',
  n: 'November',
  b: 'Bravo',
  o: 'Oscar',
  c: 'Charlie',
  p: 'Papa',
  d: 'Delta',
  q: 'Quebec',
  e: 'Echo',
  r: 'Romeo',
  f: 'Foxtrot',
  s: 'Sierra',
  g: 'Golf',
  t: 'Tango',
  h: 'Hotel',
  u: 'Uniform',
  i: 'India',
  v: 'Victor',
  j: 'Juliett',
  w: 'Whiskey',
  k: 'Kilo',
  x: 'Xray',
  l: 'Lima',
  y: 'Yankee',
  m: 'Mike',
  z: 'Zulu'
};
*/
function to_nato(words) {
  let result = "";
  for (let letter of words.toLowerCase()) {
    if (letter !== ' ') {
      result += (NATO[letter] || letter) + ' ';
    }
  }
  return result.trim();
}

