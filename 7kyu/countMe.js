/* 
7kyu - Print count and numbers
https://www.codewars.com/kata/559af787b4b8eac78b000022/train/javascript

Given a string of integers, count how many times that integer repeats itself, then return a string showing the count and the integer.

Example: countMe('1123') (count_me in Ruby)

Here 1 comes twice so <count><integer> will be "21"
then 2 comes once so <count><integer> will be "12"
then 3 comes once so <count><integer> will be "13"
hence output string will be "211213".

Similarly countMe('211213') will return '1221121113' (1 time 2, 2 times 1, 1 time 2, 1 time 1, 1 time 3)

Return "" for empty, nil or non numeric strings
*/

function countMe(data){
  if(/\D/.test(data)) return "";
  let m=data.match(/(.)\1+|\d/g);
  //console.log(m);
  return m ? m.map(s=>`${s.length}${s[0]}`).join('') : '';

}

console.log(countMe('1123'), '211213');
console.log(countMe('1'), '11');
console.log(countMe('11'), '21');
console.log(countMe('a'), '');
console.log(countMe('a123'), '');
console.log(countMe('21'), '1211');
console.log(countMe('1211'), '111221');
console.log(countMe('12322212223443'), '111213321132132413', countMe('12322212223443')=='111213321132132413');
console.log(countMe('402020877593952'), '1410121012101827151913191512', countMe('402020877593952')==='1410121012101827151913191512');

// best

 
// function countMe(s) {
//   return /[^0-9]/.test(s) ? '' : s.replace(/(.)\1*/g, (n, m) => n.length + m);
// }
