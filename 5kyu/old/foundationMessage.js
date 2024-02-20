/* 
5kyu - Mission: Hidden Message
https://www.codewars.com/kata/58d5f464ba74621747000068

Дано письмо из нескольких предложений.
* Длина каждого слова первого предложения указывает на слово, 
  которое нужно взять из следующего предложения. 
  Т.е если в первом предложении есть 2 слова из 3 и 7 букв, то надо взять
  третье слово из второго предложения и седьмое - из третьего. 
  Тогда мы закончим с первым предложением скрытого сообщения.

* Аналогично со вторым предложением - считать в следующих предложениях.

* Знаки (.?!) - разделители предложений.

* знаки препинания не учитываются
* Знаки препинания, кроме апострофов, не переносятся в декодированное сообщение.
* Слова с апострофами считаются как одно слово

Вывод
* В каждом предложении декодированного скрытого сообщения первое слово должно быть написано 
  с большой буквы (остальные должны быть строчными) и заканчиваться точкой.
* После точки должен быть пробел
* Если пустая строка, вернуть пустую строку

*/

/* 
Какой-то косяк со вторым тестом. См. Yesterday.docx
*/
function foundationMessage(message) {
  const text = message.replace(/[^a-z!?\d\s.']/gi, '').split(/[.?!]/g).map(s => s.trim().split(/\s+/));
  const result = [];
  for (let i = si = 0; i < text.length; i++) {
    let sentence = [];
    for (let j = 0; j < text[i].length; j++) {
      let l = text[i][j].replace(/'/g, '').length - 1;
      si++;
      if (text[si] && text[si][l]) sentence.push(text[si][l]);
    }
    i = si++;
    if (sentence.length) result.push(sentence);
  }
  return result.map(sen => sen.map((word, i) => i ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ') + ".").join(' ');
}

// best

/* 
const words = s => s.match(/[\w']+/g);
const count = s => s.replace(/'/g, "").length;
const cap   = s => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase();

function foundationMessage(string) {
  const lines = string.split(/[.?!]/)[Symbol.iterator]();
  const res = [];
  for (const line of lines) if (line)
    res.push(cap(words(line).map(word => words(lines.next().value)[count(word) - 1]).join(" ")) + ".");
  return res.join(" ");
}
*/