/* 
6kyu - Death by Coffee
https://www.codewars.com/kata/57db78d3b43dfab59c001abe/train/javascript

Я с гордостью объявляю об открытии формулы измерения продолжительности жизни любителей кофе!
Для:
 - h: номер здровия (YYYYMMDD)
 - CAFE: чашка обычного кофе
 - DECAF: чашка кофе без кафеина

Для определения предела:
- пейте кофе (т.е. увеличивайте h) до тех пор, пока какая-либо часть числа здоровья не будет включать DEAD.
- Если испытуемый может выжить, выпив пять тысяч чашек, и при этом не умереть, 
  кофе не окажет на него вредного воздействия.

Учитывая дату рождения испытуемого, верните массив, описывающий пределы 
его потребления кофе в течение жизни.  

- Пределы равны 0, если кофе не оказывает вредного воздйствия
- Надо выпить хотя бы одну чашку кофе.

Пример: h=19500119 => [2645, 1162]
*/

function coffeeLimits(y, m, d) {
  let h = Number(`${y}${("" + m).padStart(2, '0')}${("" + d).padStart(2, '0')}`);
  let cafe, decaf;
  for (cafe = 0, i = h; cafe < 5000; cafe++, i += 0xCAFE) {
    if (i > h && i.toString(16).includes('dead')) break;
  }
  console.log(` cafe=${cafe}`);
  if (cafe === 5000) cafe = 0;
  for (decaf = 0, i = h; decaf < 5000; decaf++, i += 0xDECAF) {
    //console.log(` check i=${i} ${i.toString(16)}`);
    if (i > h && i.toString(16).includes('dead')) break;
  }
  console.log(` decaf=${decaf}`);
  if (decaf === 5000) decaf = 0;
  return [cafe, decaf];
}

console.log(coffeeLimits(1950, 1, 19), [2645, 1162]);
console.log(coffeeLimits(1965, 9, 4), [0, 0]);
console.log(coffeeLimits(1965, 12, 11), [111, 0]);
console.log(coffeeLimits(1880, 3, 1), [0, 3909]);

// best

/* 
var coffeeLimits = function(y, m, d) {
  let h = y * 10000 + m * 100 + d
  
  return [0xcafe, 0xdecaf].map(x => {
    for (let i = 1; i <= 5000; ++i)
      if (/dead/.test((h + i * x).toString(16))) return i
    return 0
  })
}
*/

/* 
const coffeeLimits = (y, m, d, resC=0, resD=0) => {  
    let cof = +(""+y+("0"+m).slice(-2)+("0"+d).slice(-2));
    let dec = cof;   
    for (let i = 1; i < 0x1388; i++) {
        cof += 0xcafe;
        dec += 0xdecaf;      
        if (/dead/.test(cof.toString(16))&&!resC) resC = i;
        if (/dead/.test(dec.toString(16))&&!resD) resD = i;
    }
    return [ resC, resD ];
}
*/