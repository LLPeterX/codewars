/* 
7kyu - Negation of a Value
https://www.codewars.com/kata/58f6f87a55d759439b000073/train/javascript

negationValue("!", false); //=> true
negationValue("!!!!!", true); //=> false
negationValue("!!", []); //=> true
*/

function negationValue(string, value) {
  let res = Boolean(value);;
  // for (let i = 0; i < string.length; i++) {
  //   res = !res;
  // }
  // return res;
  return string.length % 2 ? !res : res;
}


console.log(negationValue("!", false), true, "Wrong!");
console.log(negationValue("!", true), false, "Wrong!");
console.log(negationValue("!!!", []), false, "Wrong!");
console.log(negationValue("!!!!!!!!", 0), false);

// best

/* 
function negationValue(s, v) {
  return s.length%2?!v:!!v
}
*/

/* 
const negationValue = (string, value) => string.length % 2 == !value;
*/