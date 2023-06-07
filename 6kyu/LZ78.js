/* 
6kyu - LZ78 compression
https://www.codewars.com/kata/5db42a943c3c65001dcedb1a

Реализовать кодирование/декодирование по алгоритму LZ78
См. https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ78

Вход читается побуквенно. Каждая буква должна быть сопоставлена ​​с самой длинной подстрокой словаря в текущий момент времени.

Выход состоит из токенов. Каждый токен имеет формат <index, letter>, 
где index — это индекс самого длинного значения из словаря, которое соответствует текущей подстроке, 
а letter — это текущая просматриваемая буква.

Пример для кодирования строки 'ABAABABAABAB':
-------------------------------012345788901
1) Сначала словарь инициализируется 0-м элементом, указывающим на пустую строку. d[0]="". 
2) i=0: Буква "A": её нет в словаре, поэтому d[1]="A". T=[0,A]
3) i=1: Буква "B": её нет в словаре, поэтому d[2]="B" T=[0,A], [0,B]
4) i=2: Буква "A" есть в словаре: d[1]=="A". Добавляем следующую букву, которая тоже "A" => "AA". 
   "AA" нет в словаре, поэтому d[3]="AA". К индексу 1 ("A") добавляем тек. букву = T=[0,A][0,B][1,A]
5) i=4: Буква "B" есть в словаре, поэтому добавляем следующую букву "A". d[4]="BA" T=[0,A][0,B][1,A][2,A]
6) i=6: "BA"-есть, следующая "A". "BAA" нет, посему d[5]="BAA" T=[0,A][0,B][1,A][4,A]
7) i=9: "B" есть, "BA" есть, "B" нет => d[6]="BAB" T=[0,A][0,B][1,A][4,B]


0  |  ''        ABAABABAABAB      <0, A> <0, B> <1, A> <2, A> <4, A> <4, B>
1  |  A                  ^^^
2  |  B
3  |  AA
4  |  BA
5  |  BAA
6  |  BAB

Если строка заканчивается совпадением в словаре, последний токен должен содержать только индекс словаря.
Например, «ABAABABAABABAA» должен возвращать «0A0B1A2A4A4B3» 
*/

function encoder(data) {
  const dict = {};
  let result = "";
  for (let i = 0, index = 1; i < data.length; i++) {
    let k = 0, c = data[i];
    if (c in dict) {
      while (i < data.length && c in dict) {
        k = dict[c];
        c += data[++i];
      }
    }
    if (i < data.length) {
      result += `${k}${c.slice(-1)}`;
      dict[c] = index++;
    } else {
      result += k;
    }
  }
  return result;
}

function decoder(data) {
  const m = data.match(/((\d+)(\D*))/gi);
  if (!m) return '';
  const dict = [""];
  let result = "";
  for (let i = 0; i < m.length; i++) {
    let k = parseInt(m[i]);
    let v = isNaN(+m[i]) ? m[i].slice(-1) : "";
    let char = dict[k] + v;
    dict[i + 1] = char;
    result += char;
  }
  return result;
}
//console.log(encoder('ABAABABAABAB'));
// console.log(encoder('ABAABABAABAB'), '0A0B1A2A4A4B', encoder('ABAABABAABAB') === '0A0B1A2A4A4B');
// console.log(encoder('ABBCBCABABCAABCAABBCAA'), '0A0B2C3A2A4A6B6', encoder('ABBCBCABABCAABCAABBCAA') === '0A0B2C3A2A4A6B6');
console.log(encoder('ABCDDEFGABCDEDBBDEAAEDAEDCDABC'), '0A0B0C0D4E0F0G1B3D0E4B2D10A1E4A10D9A2C', encoder('ABCDDEFGABCDEDBBDEAAEDAEDCDABC') === '0A0B0C0D4E0F0G1B3D0E4B2D10A1E4A10D9A2C');
// console.log('---decode---');
// console.log(decoder('0A0B1A2A4A4B'));
// console.log(decoder('0A0B2C3A2A4A6B6'));
console.log(decoder('0A0B0C0D4E0F0G1B3D0E4B2D10A1E4A10D9A2C'), 'ABCDDEFGABCDEDBBDEAAEDAEDCDABC');
// my: ABCDDEFGABCDEDBBDEAAEDAEDCDABC
// an: ABCDDEFGABCDEDBBDEAAEDAEDCDABC
//                       _     _

