/* 
7kyu - Music Theory: Find the Melodic Interval Between Two Notes
https://www.codewars.com/kata/63fa8aafe6be1f57ad81729a

Даны две ноты от A0 до C8. Вернуть интервал, разделяющий их, в виде положительного целого числа.
  Музыканты часто обозначают высоту тона, используя комбинацию названия ноты и октавы, 
  используя в качестве эталона стандартную фортепианную клавиатуру.


Есть 7 нот с именами C, D, E, F, G, A, B. 
Эти имена повторяются в следующей октаве по всей клавиатуре.

Самая низкая нота на фортепиано — A0. 
Номер октавы увеличивается до C, поэтому первые три ноты — A0, B0 и C1. // сука, почему не C0??
Октавы пронумерованы вплоть до C8, самой высокой ноты на фортепиано.


Интервалы названы по расстоянию, включая первую ноту, между нижней и верхней нотами. 
Интервал измеряется не полутонами или целыми тонами, а скорее названиями нот.

Так, например, расстояние между C4 и E4 равно 3, потому что оно включает C4, D4 и E4. 
Интервал между A6 и E6 = 4, потому что включает E6, F6, G6 и A6. 
Обратите внимание, что расстояние между одной и той же нотой равно 1.


getInterval('F4', 'B4') should return 4.
getInterval('G3', 'G4') should return 8. // ???
getInterval('A7', 'B6') should return 7.
*/


function getInterval(note1, note2) {
  // generate all notes with octaves
  const notes = Array.from({ length: 63 }, (_, i) => `${'CDEFGAB'[i % 7]}${~~(i / 7)}`)
  return Math.abs(notes.indexOf(note1) - notes.indexOf(note2)) + 1;

}

console.log(getInterval('F4', 'B4'), 4)
console.log(getInterval('G3', 'G4'), 8)
console.log(getInterval('A7', 'B6'), 7)

// best

/* 
function ord([note,octave]) { return 7 * octave + "CDEFGAB".indexOf(note); }
function getInterval(one,other) { return Math.abs( ord(one) - ord(other) ) + 1 ; }
*/

/* 
function getInterval(note1, note2) {
  const octaves = parseInt(note2[1]) - parseInt(note1[1]);
  const orderOfNotes = Array.from('CDEFGAB');
 
  return Math.abs(orderOfNotes.indexOf(note2[0]) - orderOfNotes.indexOf(note1[0]) + 7 * octaves) + 1;
}
*/

/* 
function getInterval(note1, note2) {
  const noteArr = [
    "C0", "D0", "E0", "F0", "G0", "A0", "B0",
    "C1", "D1", "E1", "F1", "G1", "A1", "B1",
    "C2", "D2", "E2", "F2", "G2", "A2", "B2",
    "C3", "D3", "E3", "F3", "G3", "A3", "B3",
    "C4", "D4", "E4", "F4", "G4", "A4", "B4",
    "C5", "D5", "E5", "F5", "G5", "A5", "B5",
    "C6", "D6", "E6", "F6", "G6", "A6", "B6",
    "C7", "D7", "E7", "F7", "G7", "A7", "B7",
    "C8", "D8", "E8", "F8", "G8", "A8", "B8",
    "C9", "D9", "E9", "F9", "G9", "A9", "B9",
                  ];
  
  return Math.abs(noteArr.indexOf(note1) - noteArr.indexOf(note2)) + 1;
}
*/