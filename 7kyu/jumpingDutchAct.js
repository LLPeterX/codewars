/* 
7kyu - Shortest Code : Jumping Dutch act

Чувак прыгает из здания:
- если этаж >6, то умирает (Pa!)
- если <=6, то дохнет сразу, а кричит каждый этаж "Aa~"

sc(2) => "Aa~ Pa! Aa!"
Код должен быть < 90 символов
*/

function sc_old(f) {
  return f < 2 ? "" : "Aa~ ".repeat(f - 1) + "Pa!" + (f > 6 ? "" : " Aa!");
}

const sc = f => f < 2 ? "" : "Aa~ ".repeat(f - 1) + "Pa!" + (f > 6 ? "" : " Aa!");



console.log(sc(2), '-', "Aa~ Pa! Aa!");
console.log(6, sc(6), '-', "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!");
console.log(7, sc(7), '-', "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!");
console.log(10, sc(10), '-', "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!");
console.log(sc(1), '-', "");
console.log(sc(-1), '-', "");