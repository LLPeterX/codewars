/* 
6kyu - Frequencies of musical notes
https://www.codewars.com/kata/5f2f0754a28d9b0010f17e72

Есть 12 нот: C C# D D# E F F# G G# A A# B

"Октава" — это "интервал между одним музыкальным тоном и другим с удвоенной частотой".
Это означает, что частота каждой ноты ровно в два раза превышает частоту той же ноты октавой ниже.
Более высокое число N соответствует более высокой октаве и более высокой частоте в 2 ^ n раз. 

Вам будет дана строка, описывающая ноту и октаву, например: "G#5".
Ваша задача — вычислить частоту данной ноты в Гц. Стандартная частота А4 — 440 Гц.
Если вы знаете частоту одной ноты, вы можете вычислить частоту любой другой ноты по формуле 
f(искомая) = f(известная) * 2^(D/12), где D — расстояние искомой ноты от известной (в музыкальной гамме).

Например, G#5 имеет частоту 830,61 Гц, потому что расстояние G# от A по шкале равно -1, 
а его октава на одну октаву выше, чем A4, поэтому 440 * 2^(-1/12) * 2 ^ 1 = 830,61
Вы также можете просмотреть его так, как будто G # 5 находится в 11 шагах от A4, учитывая также октавы, 
поэтому 440 Гц * 2 ^ (11/12) = 830,61 Гц.
*/

function frequencyOfNote(note) {
  let scale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  let [, noteName, octave] = note.match(/([CDEFGAB]#?)(-?\d+)/);
  let noteDiff = scale.indexOf(noteName) - 9;
  //let freq = +(440 * Math.pow(2, noteDiff / 12) * Math.pow(2, octave - 4)).toFixed(2);
  //return [noteName, +octave, noteDiff, freq];
  return +(440 * Math.pow(2, noteDiff / 12) * Math.pow(2, octave - 4)).toFixed(2);
}

console.log(frequencyOfNote("A4"));
console.log(frequencyOfNote("G#5"));
console.log(frequencyOfNote("A-1"));

// best
/* 
function frequencyOfNote(note){
  const o = 'C C# D D# E F F# G G# A A# B'.split` `
  let x = o.indexOf(note.match(/[A-G]#?/)[0]) - 9
  let y = note.match(/-?\d+/)[0] - 4
  return 440*2**(x/12)*2**y
}
*/