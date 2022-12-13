/* 
7kyu - Is this a valid Chess960 position?
https://www.codewars.com/kata/61488fde47472d000827a51d/train/javascript

См. https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D1%85%D0%BC%D0%B0%D1%82%D1%8B-960

* - Белые и чёрные фигуры располагаются соответственно на первом и восьмом рядах, 
  расстановка белых идентична расстановке чёрных;
* - Белые и чёрные пешки располагаются соответственно на втором и седьмом рядах;
* Слоны каждой из сторон — разнопольные; 
* Ладьи каждой из сторон располагаются по разные стороны от короля, 
 чтобы обеспечить возможность рокировки (правила которой отличаются от классических).

R - ладья
N - конь
B - слон
Q - ферзь
K - король

Задача: вернуть true, если фигуры расставлены верно
*/

function isValidChess960(pieces) {
  let b1 = pieces.indexOf('B'), b2 = pieces.lastIndexOf('B');
  let r1 = pieces.indexOf('R'), r2 = pieces.lastIndexOf('R');
  let k = pieces.indexOf('K');
  return b1 % 2 != b2 % 2 && k > r1 && k < r2;
}

console.log(isValidChess960("RNBQKBNR"), true);
console.log(isValidChess960("QNNBBRKR"), true);
console.log(isValidChess960("QRNNBBRK"), false);
console.log(isValidChess960("QNBNBRKR"), false);