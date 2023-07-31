/* 
6kyu - Ordinal Numbers
https://www.codewars.com/kata/52dda52d4a88b5708f000024/train/javascript

Вернуть число с суффиксом [th, st, nd ...]
However, when the last two digits of the number are 11, 12, or 13, th is used instead of st,nd,rd respectively.
*/

// function ordinal(number, brief) {
//   return /.*(11|12|13)$/.test("" + number) ? "th" : (brief ? ["th", "st", "d", "d"] : ["th", "st", "nd", "rd"])[number > 3 && number < 21 || number % 10 > 3 ? 0 : number % 10];
// }

const ordinal = (number, brief) => /.*(11|12|13)$/.test("" + number) ? "th" : (brief ? ["th", "st", "d", "d"] : ["th", "st", "nd", "rd"])[number > 3 && number < 21 || number % 10 > 3 ? 0 : number % 10];

console.log(ordinal(0), "th");
console.log(ordinal(1), "st");
console.log(ordinal(11), "th");
console.log(ordinal(111), "th");
console.log(ordinal(121), "st");
console.log(ordinal(20), "th");
console.log(ordinal(52), "nd");
console.log(ordinal(903, true), "d");

// best

/* 
function ordinal(number, brief) {
  var n = ['th','st','nd','rd'],
      m = number % 100,
      k = ( n[( m - 20 ) % 10] || n[m] || n[0] );
  return (brief && k[1] == 'd') ? 'd' : k;
}
*/