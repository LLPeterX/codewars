/* 
7kyu - Converting integer to currency format
https://www.codewars.com/kata/54e9554c92ad5650fe00022b/train/javascript

123456 --> "123,456"
*/

function toCurrency(price) {
  //return price.toLocaleString('en-US'); // too easy!
  let res = [], str = String(price);
  while (str.length > 2) {
    res.unshift(str.slice(-3));
    str = str.slice(0, -3);
  }
  if (str) res.unshift(str);
  return res.join(',');
}

console.log(toCurrency(123456), "123,456");
console.log(toCurrency(1234), "1,234");
console.log(toCurrency(123), "123");
console.log(toCurrency(123456789012), "123,456,789,012");