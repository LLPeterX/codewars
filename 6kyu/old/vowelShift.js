/* 
6kyu - Vowel Shifting
https://www.codewars.com/kata/577e277c9fb2a5511c00001d/train/javascript

Дана строка. Надо сдвинуть каждую гласную на N позиций вправо (если N>0)
или влево (если N<0)
(позиция = индекс в массиве гласных из строки)
*/

function vowelShift(text, n) {
  if (n === 0 || !text) return text;
  let pos1 = [], t = [...text], orig = [...text];
  for (let i = 0; i < t.length; i++) {
    if ("aeiouAEIOU".includes(text[i])) {
      pos1.push(i);
    }
  }
  // shift array
  //console.log(' pos1=', pos1);
  let shifted = [...pos1];
  //pos2 = pos2.concat(pos2.splice(0, pos1.length - n)); // bad for negatives
  shifted = shifted.concat(shifted.splice(0, (pos1.length - n % pos1.length) % pos1.length));
  //console.log(' pos2=', shifted);
  for (let i = 0; i < pos1.length; i++) {
    t[pos1[i]] = orig[shifted[i]];
  }
  return t.join``;
}

console.log(vowelShift("This is a test!", 0), "This is a test!");
console.log(vowelShift("This is a test!", 1), "Thes is i tast!");
//                      0 2  5  8  11
console.log(vowelShift("This is a test!", 3), "This as e tist!"); // 5,8,11,2
console.log(vowelShift("This is a test!", -1), 'This as e tist!'); //

// best
/* 
const vowelShift = (text, n) => {
  if (!text) return text;
  let arr = text.match(/[aeiou]/gi) || [];
  arr = arr.slice(-n % arr.length).concat(arr.slice(0, -n % arr.length));
  return text.replace(/[aeuio]/gi, _ => arr.shift());
};
*/