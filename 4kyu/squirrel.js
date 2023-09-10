/* 
4kyu - One Line Task: Squirrel And Tree
https://www.codewars.com/kata/59016379ee5456d8cc00000f

Белка взбирается ввех по дереву по спирали.
Каждый виток белка поднимается на h метров.
Высота дерева - H метров
Длина окружности - S метров

Найти длину пути белки до верхушки дерева

Дина кода макс. 52 симв.
*/

// function L(h, H, S) {
//   //let l = Math.sqrt(h * h + S * S) * H / h;
//   //return l;
//   return +((h * h + S * S) ** 0.5 * H / h).toFixed(4)

// }

squirrel = (h, H, S) => +((h * h + S * S) ** 0.5 * H / h).toFixed(4);

// final solution:
// squirrel=(h,H,S)=>+((h*h+S*S)**0.5*H/h).toFixed(4)



console.log(squirrel(4, 16, 3), 20)
console.log(squirrel(8, 9, 37), 42.5869)

//best
/* 
quirrel=(h,H,S)=>+Math.hypot(H,H*S/h).toFixed(4)
*/