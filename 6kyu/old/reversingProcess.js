/* 
6kyu - Reversing a process
Декодировать строку
Алгоритм кодирования:
- строка состоит из букв a-z
- есть число num
- Для кадого символа строки x=позиция в алфавите (0..25). f(x) = num*x%26 - замена на символ alphabet[f(x)]
- num и итоговыая строка объединяется
*/

function decode(r) {
  let [, num, str, ...rest] = r.match(/(\d+)(\D+)/);
  if (!num || !str) return "Impossible to decode";
  let a = (+num) % 26, x = 1;
  for (; x < 26; x++) if ((a * x) % 26 === 1) break;
  if(x >= 26) return "Impossible to decode";
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += String.fromCharCode(((x*(str.charCodeAt(i)-97))%26)+97);
  }
  return res;
}

console.log(decode("6015ekx")); // "mer"
console.log(decode("1122305vvkhrrcsyfkvejxjfvafzwpsdqgp")); // "rrsxppowmjsrclfljrajtybwviqb"
// my best!
