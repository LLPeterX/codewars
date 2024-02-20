/* 
5kyu - Part 1: Evil Programming Government Restrictions
https://www.codewars.com/kata/5255892719453db6d2000a23/train/javascript

Ваше правительство запретило использовать цифры везде.
Задача: вернуть строку  'I can write numbers like, 1, 2, 3.'
В коде не должно быть цифр
*/

var anarchy = function () {
  let one = 'A'.charCodeAt() - '@'.charCodeAt(), b = one + one, c = b + one;
  return `I can write numbers like, ${one}, ${b}, ${c}.`;
}

console.log(anarchy(), "I can write numbers like, 1, 2, 3.")

// best

/* 
var anarchy = function () {
  var foo = ["a", "b", "c", "d"];
  var one = foo.indexOf("b");
  var two = foo.indexOf("c");
  var three = foo.indexOf("d");
  return "I can write numbers like, "  + one + ", " + two + ", " + three + ".";
}
*/

/* 
var anarchy = function () {
  var a = ![];
  return 'I can write numbers like, '+ ++a +', '+ ++a +', '+ ++a +'.';
}
*/

/* 
var anarchy = function () {
  return `I can write numbers like, ${true+false}, ${true+true}, ${true+true+true}.`
}
*/