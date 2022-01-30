/* 
7kyu - Birthday II - Presents
https://www.codewars.com/kata/5805f0663f1f9c49be00011f/train/javascript

Дана строка X и число Y. В зависимости от значений вернуть:

* x == goodpresent --> return x with num of passes added to each charCode (turn to charCode, add y to each, turn back)
* x == crap || x == empty --> return string sorted alphabetically
* x == bang --> возвращаемая строка превращается в коды символов, каждый код уменьшается на Y и суммируется до одной цифры
* x == badpresent --> return 'Take this back!'
* x == dog, return 'pass out from excitement y times' (where y is the value given for y).

*/

/* 
function present(x, y) {
  //console.log(x, y);
  switch (x) {
    case 'goodpresent':
      return [...x].map(e => String.fromCharCode(e.charCodeAt() + y)).join('');
    case 'crap':
      return "acpr";
    case 'empty':
      return x;
    case 'bang':
      return [...x].map(e => e.charCodeAt() - y).reduce((sum, v) => sum + v, 0);
    case 'badpresent':
      return 'Take this back!';
    case 'dog':
      return `pass out from excitement ${y} times`;
  }
  return x;
}
 */
function present(x, y) {
  return {
    goodpresent: (y) => [...x].map(e => String.fromCharCode(e.charCodeAt() + y)).join(''),
    crap: (y) => "acpr",
    empty: (y) => x,
    bang: (y) => [...x].map(e => e.charCodeAt() - y).reduce((sum, v) => sum + v, 0),
    badpresent: (y) => 'Take this back!',
    dog: (y) => `pass out from excitement ${y} times`
  }[x](y);
}

console.log(present('badpresent', 3), 'Take this back!');
console.log(present('goodpresent', 9), 'pxxmy{n|nw}');
console.log(present('crap', 10), 'acpr');
console.log(present('bang', 1), 404);