/* 
5kyu - First Variation on Caesar Cipher
https://www.codewars.com/kata/5508249a98b3234f420000fb/train/javascript

Действие шифра Цезаря заключается в замене каждой буквы открытого текста
(буквы открытого текста от «a» до «z» или от «A» до «Z») другой на фиксированное
количество позиций вверх или вниз по алфавиту.
Эта программа выполняет вариант сдвига Цезаря. 
Сдвиг увеличивается на 1 для каждого символа (на каждой итерации).


Параметры и возврат функции "movingShift":
Функция movingShift() сначала кодирует строку, а затем возвращает
массив из 5 подстрок. Подстроки 1-4 содержат подстроки такое длины,
какая бы получилась при равномерном рзбиении, но с разницей не более 1.

Примеры
 16 => 4,4,4,4,0
 17 => 4,4,4,4,1
 10 => 2,2,2,2,2
 11 => 3,3,3,2,0

 "I should have known that you would have a perfect answer for me!!!"
 => ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]

*/

function movingShift(s, shift) {
  const cipher = s.replace(/./g, (c, i) => {
    if (/[A-Z]/.test(c)) {
      return String.fromCharCode(65 + (c.charCodeAt() - 65 + i + shift) % 26);
    } else if (/[a-z]/.test(c)) {
      return String.fromCharCode(97 + (c.charCodeAt() - 97 + i + shift) % 26);
    }
    return c;
  });

  const L = s.length;
  if (Number.isInteger(L / 5)) {
    return cipher.match(new RegExp(`.{${L / 5}}`, 'g'));
  }
  if (Number.isInteger(L / 4)) {
    return cipher.match(new RegExp(`.{${L / 4}}`, 'g')).concat(['']);
  }
  let result = [];
  let n = Math.ceil(L / 5); // initial
  let i = 0;
  while (i + n < L) {
    result.push(cipher.slice(i, i += n));
  }
  if (result.length < 5) {
    result.push(cipher.slice(i, i += n - 1));
    if (result.length < 5) {
      result.push(cipher.slice(i));
    }
  }
  if (result.length < 5) result.push('');
  return result;
}

function demovingShift(arr, shift) {
  return arr.join('').replace(/./g, (c, i) => {
    if (/[A-Z]/.test(c)) {
      return String.fromCharCode(65 + ((c.charCodeAt() - 65 - i - shift) + 26000) % 26);
    } else if (/[a-z]/.test(c)) {
      return String.fromCharCode(97 + ((c.charCodeAt() - 97 - i - shift) + 26000) % 26);
    }
    return c;
  });
}

console.log(movingShift("1234567890", 1)); // 12 34 56 78 90
console.log(movingShift("12345678901", 1));
console.log(movingShift("123456789012", 1)); // 123 456 789 012 ''

let u = "I should have known that you would have a perfect answer for me!!!"; // len=66
//console.log(u.length);
let res1 = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]; // 4*14+10 = 66
//console.log(movingShift("I should have known that you would have a perfect answer for me!!!", 1), "\n", res1.join``);

// best

/* 
var upAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', downAlpha = 'abcdefghijklmnopqrstuvwxyz';
function movingShift(s, dist) {return split(shift(s, dist, 1));}
function demovingShift(arr, dist) {return shift(arr.join(''), -dist, -1);}

function shift(s, dist, step) {
  return s.split('').map(function(v, i) {
    var upI = upAlpha.indexOf(v), downI = downAlpha.indexOf(v);
    if(upI == -1 && downI == -1) return v;
    if(upI > -1) var lib = upAlpha, libI = upI;
    else var lib = downAlpha, libI = downI;
    var loc = (i * step + libI + dist) % 26;
    loc = loc >= 0 ? loc : 26 + loc;
    return lib[loc];
  }).join('');
}

function split(s) {
  var sz = Math.ceil(s.length / 5);
  return [s.slice(0, sz), s.slice(sz, sz * 2), s.slice(sz * 2, sz * 3), s.slice(sz * 3, sz * 4), s.slice(sz * 4)];
}
*/

/* 

function encode(str, shift) {
  var code, char, sum;
  var sign = Math.sign(shift);
  return str.replace(/[a-z]/gi, function(s, i) {
    code = s.charCodeAt(0);
    char = s.toUpperCase() === s ? 65 : 97;
    sum = code - char + (shift + sign * i % 26 + 26);
    return String.fromCharCode(sum % 26 + char);
  });
}

function movingShift(str, shift) {
  var pos;
  var code = encode(str, shift);
  var size = Math.ceil(str.length / 5); 
  return Array.from({ length: 5 }, function(_, i) {
    pos = size * i;
    return code.slice(pos, size + pos);
  });
}

function demovingShift(arr, shift) {
  return encode(arr.join(''), -shift);
}
*/


