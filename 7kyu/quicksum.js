/* 
7kyu - Quicksum
https://www.codewars.com/kata/569924899aa8541eb200003f/train/javascript

A Quicksum is the sum of the products of each character’s position 
in the packet times the character’s value. 
A space has a value of zero, while letters have a value equal 
to their position in the alphabet.
*/
function quicksum(packet) {
  if (!/^[A-Z ]+$/.test(packet)) return 0;
  return [...packet].reduce((s, c, i) => s + (c == ' ' ? 0 : (c.charCodeAt() - 64) * (i + 1)), 0);
}


console.log(quicksum("ACM"), 46)
console.log(quicksum("MID CENTRAL"), 650)
console.log(quicksum("BBC"), 15)
console.log(quicksum("???"), 0)
console.log(quicksum("axg "), 0)
console.log(quicksum("234 234 WEF ASDF AAA 554211 ???? "), 0)
console.log(quicksum("A C M"), 75)

//console.log('A'.charCodeAt());