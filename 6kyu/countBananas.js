/* 
6kyu - Basket of Fruits
https://www.codewars.com/kata/59eca716da62db9152001bac

There are 6 types of fruits in the basket: Apples, Pears, Oranges, Lemons, Bananas and Tomatoes.
Your task: given a total number of fruits as an argument (always positive), 
return the highest possible number of Bananas, while following ALL the rules below:

- There are 17 more Oranges than Apples.
- There are 40% less Pears than Oranges.
- There are 5/6 more Lemons than Pears. = WTF???
- There are 3x less Apples than Bananas.

There might be some Tomatoes left in the basket after you sort them 
(we dont want the Tomatoes).

If there are not enough total fruits to follow the rules, return "false".

*/

function countBananas(total) {
  let a = p = o = l = 0;
  for (let b = ~~(total - total / 3 - 17); b > 0; b--) {
    a = b / 3;
    o = a + 17;
    p = o * 0.6;
    l = p + p * 5 / 6;
    if ([a, o, p, l].some(n => !Number.isInteger(n)) || (a + b + o + p + l > total)) continue;
    return b;
  }
  return false;
}

console.log(countBananas(81), 9);
console.log(countBananas(135), 39); // OK
console.log(countBananas(268), 99); // OK
console.log(countBananas(22), false); // OK
console.log(countBananas(620), 249); // FAIL !!!
console.log(countBananas(5325), 2349); // FAIL !!!

// best
/* 
const countBananas = total =>  total < 66 ? false : 30 * ((total - 66) / 67 | 0) + 9
*/

/* 
function countBananas(total){
  if (total < 66) return false;
  for (let b=Math.floor((total-45.9)*3/6.7+0.0000000002); b>8; b--) {
    if ((6.7/3*b+45.9).toFixed(10)%1 === 0) return b;
  }
}
*/