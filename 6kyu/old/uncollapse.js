/* 
6kyu - Uncollapse Digits
https://www.codewars.com/kata/5a626fc7fd56cb63c300008c
 */

function uncollapse(digits) {
  return digits.split(/(zero|one|two|three|four|five|six|seven|eight|nine)/).filter(e => e !== '').join(' ');
}

console.log(uncollapse("three"), "three");
console.log(uncollapse("eightsix"), "eight six")
console.log(uncollapse("fivefourseven"), "five four seven")
console.log(uncollapse("ninethreesixthree"), "nine three six three")
console.log(uncollapse("foursixeighttwofive"), "four six eight two five")

console.log(uncollapse('zeronineoneoneeighttwoseventhreesixfourtwofive'));

console.log(uncollapse('onefivefivefivefivesixeight'));

// best
/*
function uncollapse(digits){
  return (digits.match(/zero|one|two|three|four|five|six|seven|eight|nine/g) || []).join` `
}
*/

/*
function uncollapse(digits){
  return digits.replace(/(zero|one|two|three|four|five|six|seven|eight|nine)/gm,'$1 ').trim();
}
*/

/*
function uncollapse(digits){
  return digits.replace(/(?<=zero|one|two|three|four|five|six|seven|eight|nine|ten')/g, ' ').trim()
}
*/

/*
function uncollapse(digits){
  const regex = ( /zero|one|two|three|four|five|six|seven|eight|nine/g );
  let str = digits.match(regex);
  return str.join(' ');
}
*/