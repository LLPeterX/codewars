/* 
6kyu - Last Survivors Ep.2
https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651/train/javascript
*/


function lastSurvivors(str) {
  let dup;
  do {
    dup = false;
    for (let i = 0; i < str.length; i++) {
      let k = str.lastIndexOf(str[i]);
      if (i != k) {
        dup = true;
        let nextChar = str[i] === 'z' ? 'a' : String.fromCharCode(str.charCodeAt(i) + 1);
        str = str.slice(0, i) + nextChar + str.slice(i + 1, k) + str.slice(k + 1);
      }
    }
  } while (dup);
  return str;
}
console.log(lastSurvivors("zzzab")); // cz
console.log(lastSurvivors("zzab")); // c
console.log(lastSurvivors('xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh').split('').sort().join(''), 'acdeghlmnqrvyz'); // acdeghlmnqrvyz

//best
/*
function lastSurvivors(str) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let next = str;
  do {
    str = next;
    next = str.replace(/([a-z])(.*?)\1/g, (_, a, b) => alpha[(alpha.indexOf(a) + 1) % 26] + b);
  } while (str !== next)
  return str;
}
*/

/*
const distance = (a,b) => (a.charCodeAt() + 26 - b.charCodeAt()) % 26;
const support  = (c,str) => ~~[...str].reduce((acc,curr) => 2 ** -distance(c,curr) + acc, 0);

const lastSurvivors = str => [...'abcdefghijklmnopqrstuvwxyz'].filter(c => support(c,str) % 2).join('');
*/