/* 
6kyu - SHA256
https://www.codewars.com/kata/587fb57e12fc6eadf200009b

Create a function that converts a given ASCII string to its hexadecimal SHA-256 hash.
sha256("Hello World!") => "7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069"

solution from https://habr.com/ru/company/selectel/blog/530262/
*/

const { createHash } = require('crypto');

function sha256(string) {
  return createHash('sha256').update(string).digest('hex');
}

