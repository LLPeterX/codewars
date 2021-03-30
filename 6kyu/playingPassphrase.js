/* 
https://www.codewars.com/kata/559536379512a64472000053/train/javascript
Дана строка. Преобразовать в заглавные буквы и далее:
1) Сдвинуть каждую букву на N в позиции в алфавите
2) если число, прибавить 9 (также циклом)
3) остальные символы оставить на месте
4) Буквы в нечетной позиции - в нижний регистр, в четной - в верхний регистр
5) сделать reverse

*/

function playPass(s, n) {
  return s.split('')
    .map((char,i) => {
      if(char>='A' && char <='Z') {
        let newChar =  String.fromCharCode((char.charCodeAt(0)-65 + n)%26 + 65);
        return i%2 ? newChar.toLowerCase() : newChar.toUpperCase();
      } else if(char>='0' && char <='9') {
        return 9-char;
      } else {
        return char;
      }
    })
    .reverse().join('');
}

console.log(playPass("BORN IN 2015!",1));
console.log(playPass("I LOVE YOU!!!",1),"!!!vPz fWpM J"); // "!!!vPz fWpM J"

// my good!!!

// best
/* 
// пиздец
playPass=(s,n)=>s.replace(/[A-Z]/g,a=>String.fromCharCode((a.charCodeAt()-65+n)%26+65)).replace(/\d/g,a=>9-a).split``.map((a,i)=>/[A-Z]/.test(a)&&i%2?a.toLowerCase():a).reverse().join``
*/

/* 
playPass=(s, n, a='abcdefghijklmnopqrstuvwxyz') =>
           s.replace(/\d/g,d=> 9 - d)
            .replace(/[a-z]/gi,l=>a[(a.indexOf(l.toLowerCase())+n)%a.length]) 
            .split('').map((e,i)=> i%2 == 1 ? e : e.toUpperCase())
            .reverse().join('');
*/