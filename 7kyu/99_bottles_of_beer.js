/* 
7kyu - 99 Bottles of Beer
https://www.codewars.com/kata/52a723508a4d96c6c90005ba

песенка как массив строк
*/

const strCount = (n) => (n > 1 ? `${n} bottles` : n === 1 ? "1 bottle" : "no more bottles") + " of beer";
const sing = () => {
  let result = [];
  for (let i = 99; i > 0; i--) {
    result.push(`${strCount(i)} on the wall, ${strCount(i)}.`);
    result.push(`Take one down and pass it around, ${strCount(i - 1)} on the wall.`);
  }
  result.push("No more bottles of beer on the wall, no more bottles of beer.", "Go to the store and buy some more, 99 bottles of beer on the wall.");
  return result;
};

console.log(sing());