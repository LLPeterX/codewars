/* 
https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
Дана строка двочиных цифр.
Заменить в ней все <5 =>0; >=5 => 1
*/

function fakeBin(x){
  return x.split('')
    .map(v=>v<'5' ? '0' : v>='5' ? '1' : '0')
    .join('');
}

console.log(fakeBin('45385593107843568')); // '01011110001100111'
//                                             01011110001100111

//best
/* 
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
*/

/* 
function fakeBin(x){
  return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
}
*/