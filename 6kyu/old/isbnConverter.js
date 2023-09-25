/* 
6kyu - Convert ISBN-10 to ISBN-13
https://www.codewars.com/kata/61ce25e92ca4fb000f689fb0/train/javascript

Method
- Take the ISBN ("1-85326-158-0").
- Remove the last character, which can be a number or "X".
- Add the prefix number (978) and a hyphen (-) to the beginning.
- Take the 12 digits, then alternately multiply each digit from left to right by 1 or 3.
- Add up all 12 numbers you got.
- Take the number and perform a modulo 10 division.
- If the result is 0, the check digit is 0. If it isn't 0, then subtract the result from 10. In this case, that is the check digit.
- Add the check digit to the end of the result from step 3.
- Return the 13-digit ISBN in the appropriate format:
- "prefix number - original ISBN except the last character - check digit"
- "978 - 1 - 85326 - 158 - 9"
*/

function isbnConverter(isbn) {
  let isbn13 = "978-" + isbn.slice(0, isbn.length - 1), sum = 0;
  for (let i = 0, mult = 1; i < isbn13.length; i++) {
    if (isbn13[i] !== '-') {
      sum += mult * isbn13[i];
      mult = mult === 1 ? 3 : 1;
    }
  }
  sum %= 10;
  isbn13 += sum ? 10 - sum : 0;
  return isbn13;
}

console.log(isbnConverter("1-85326-158-0"), "978-1-85326-158-9");
console.log(isbnConverter("0-14-143951-3"), "978-0-14-143951-8");
console.log(isbnConverter("0-02-346450-X"), "978-0-02-346450-8");
console.log(isbnConverter("963-14-2164-3"), "978-963-14-2164-4");
console.log(isbnConverter("1-7982-0894-6"), "978-1-7982-0894-6");

//best

/* 
function isbnConverter(isbn) {
  const s = '978' + isbn.replace(/-/g,'').slice(0,-1)
  const m = [...s].reduce( (v,d,i)=> v + +d*(i&1?3:1), 0) % 10
  return `978-${ isbn.slice(0,-1) }${ m && 10-m }`;
}
*/