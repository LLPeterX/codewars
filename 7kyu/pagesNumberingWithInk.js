/* 
7kyu - Simple Fun #24: Pages Numbering with Ink
https://www.codewars.com/kata/5886da134703f125a6000033/train/javascript

You work in a company that prints and publishes books. 
You are responsible for designing the page numbering mechanism in the printer. 
You know how many digits a printer can print with the leftover ink.

Now you want to write a function to determine what the last page of the book 
is that you can number given the current page and numberOfDigits/number_of_digits left.

A page is considered numbered if it has the full number printed on it 
(e.g. if we are working with page 102 but have ink only for two digits 
  then this page will not be considered numbered).

It's guaranteed that you can number the current page, and that you can't number the last one in the book.
*/

function pagesNumberingWithInk(current, numberOfDigits) {
  while (true) {
    let len = (`${current}`).length;
    numberOfDigits -= len;
    if (numberOfDigits < len) break;
    current++;
  }
  return current;
}

console.log(pagesNumberingWithInk(1, 5), 5)
console.log(pagesNumberingWithInk(21, 5), 22)
console.log(pagesNumberingWithInk(8, 4), 10)
console.log(pagesNumberingWithInk(21, 6), 23)
console.log(pagesNumberingWithInk(76, 250), 166)
console.log(pagesNumberingWithInk(80, 1000), 419)

// best
/* 
const pagesNumberingWithInk = (current, numberOfDigits) =>
  numberOfDigits < `${current}`.length ? current - 1 : pagesNumberingWithInk(current + 1, numberOfDigits - `${current}`.length);
*/

/* 
function pagesNumberingWithInk(m, n) {
  while (n >= 0) {
    n -= ~~Math.log10(m) + 1;
    m++;
  }
  return m - 2;
}
*/