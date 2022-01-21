/* 
6kyu - Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?
https://www.codewars.com/kata/57fb44a12b53146fe1000136

Вес каждого восклицательного знака равен 2; вес каждого вопросительного знака равен 3
Заданы 2 сроки. Они сбалансированы?
*/

function balance(left, right) {
  let leftBal = [...left].reduce((s, v) => s + (v == '!' ? 2 : 3), 0),
    rightBal = [...right].reduce((s, v) => s + (v == '!' ? 2 : 3), 0);
  return (leftBal == rightBal) ? "Balance" : leftBal < rightBal ? "Right" : "Left";
}

console.log(balance("!!", "??"), "Right")
console.log(balance("!??", "?!!"), "Left")
console.log(balance("!?!!", "?!?"), "Left")
console.log(balance("!!???!????", "??!!?!!!!!!!"), "Balance")