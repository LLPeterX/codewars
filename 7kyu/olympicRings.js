/* 
7kyu - Olympic Rings
https://www.codewars.com/kata/57d06663eca260fe630001cc/train/javascript


Дана строка случайных букв. 
В некоторых есть "кольца". 
'O' - точно, а также 'b', 'p', 'e', 'A', и прочие. 
'B' содержит 2, но 'g' - 1.

Задача: подсчитать количество колец в каждой букве  разделить на 2 
Окуглить вниз. Далее:

 - if score is 1 or less, return 'Not even a medal!'; 
 - if score is 2, return 'Bronze!'; 
 - if score is 3, return 'Silver!'; 
 - if score is more than 3, return 'Gold!';

Dots over i's and any other letters don't count as rings.

*/


function olympicRing(a) {
  const letters = {
    a: 1,
    b: 1,
    d: 1,
    e: 1,
    g: 1,
    o: 1,
    p: 1,
    q: 1,
    A: 1,
    B: 2,
    D: 1,
    O: 1,
    P: 1,
    Q: 1,
    R: 1,
  };
  let nums = 0;
  for (let i = 0; i < a.length; i++) {
    nums += (letters[a[i]] || 0);
  }
  nums = Math.floor(nums / 2);
  if (nums <= 1) return 'Not even a medal!';
  if (nums == 2) return 'Bronze!';
  if (nums == 3) return 'Silver!'
  return 'Gold!';
}

console.log(olympicRing('wHjMudLwtoPGocnJ'), 'Bronze!');
console.log(olympicRing('eCEHWEPwwnvzMicyaRjk'), 'Bronze!');
console.log(olympicRing('JKniLfLW'), 'Not even a medal!');
console.log(olympicRing('wHjMudLwtoPGocnJeCEHWEPwwnvzMicyaRjkJKniLfLWEWlZlDFsEIBufsalqofIMBAWejlGRTDWetPS'), 'Not even a medal!');

//best

/*
const olympicRing = (str) =>{
  const out = [...str].map(el => 'qeopadgbQROPAD'.includes(el) ? 1 : el === 'B' ? 2 : 0).reduce((a, b)=> a+b, 0) / 2
  return out < 2 ? 'Not even a medal!' : out < 3 ? 'Bronze!' : out < 4 ? 'Silver!' : 'Gold!'
}
*/

/*
const olympicRing = a =>
  (val => val <= 1 ? `Not even a medal!` : val < 3 ? `Bronze!` : val < 4 ? `Silver!` : `Gold!`)
  ([...a].reduce((pre, val) => pre + [`a`,`b`,`d`,`e`,`g`,`o`,`p`,`q`,`A`,`D`,`O`,`P`,`Q`,`R`].includes(val) + (val ===`B`) * 2 , 0) / 2 ^ 0);
*/

/*
function olympicRing(a){
  const rings = ['A', 'D', 'O', 'P', 'Q', 'R', 'a', 'b', 'd', 'e', 'g', 'o', 'p', 'q'];
  const twoRings = ['B'];
  let score = 0;

  a.split('').map(x => rings.includes(x)
    ? score++
    : twoRings.includes(x)
      ? score = score + 2
      : x
  );

  score = Math.floor(score/2);

  return score <= 1
    ? 'Not even a medal!'
    : score === 2
      ? 'Bronze!'
      : score === 3
        ? 'Silver!'
        : 'Gold!'
  ;
}
 */

/*
function olympicRing(a){
  var count=0;
  for (var i=0; i<a.length; ++i)
  {
    if (a[i]=='A' || a[i]=='a' || a[i]=='o' || a[i]=='O' || a[i]=='e' || a[i]=='b' || a[i]=='p' || a[i]=='P' || a[i]=='d' || a[i]=='D' || a[i]=='R' || a[i]=='g' || a[i]=='q' || a[i]=='Q')
      count++;
    if (a[i]=='B')
      count+=2;
  }
  return Math.floor(count/2)<=1 ? 'Not even a medal!' : Math.floor(count/2)==2 ? 'Bronze!' : Math.floor(count/2)==3 ? 'Silver!' : 'Gold!';
}
*/

// brain fuck

/* 
const olympicRing=a=>[ 'Not even a medal!','Not even a medal!','Bronze!','Silver!'][~~((a.match(/[odOPQRDbpqeagA]/g)||[]).length/2)+(a.match(/B/g)||[]).length]||'Gold!'
*/