/* 
7kyu - Old Greg's Binary Fingers
https://www.codewars.com/kata/565f1bd8f97d3e59c400014a/train/javascript

Бинарный счет на пальцах:
0 Thumb (большой) - 1
1 Index - (указательный) - 2
2 Middle - (средний) - 4
3 Ring - безымянный - 8
4 Pinkie (мизинец) - 16

Дано двоичное число в виде строки. Вернуть массив пальцев
*/

function binaryFingers(binString) {
  const fingers = ['Thumb', 'Index', 'Middle', 'Ring', 'Pinkie'];
  return [...binString].reverse().map((n, i) => +n ? fingers[i] : false).filter(Boolean).reverse();
}



console.log(binaryFingers(''), []);
console.log(binaryFingers('101'), ['Middle', 'Thumb']);
console.log(binaryFingers('11111'), ['Pinkie', 'Ring', 'Middle', 'Index', 'Thumb']);

// best
/* 
const binaryFingers = binString => {
  binString = `00000${binString}`.substr(-5);
  return ['Pinkie','Ring','Middle','Index','Thumb'].filter((v, i) => +binString[i]);
}
*/