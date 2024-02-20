/* 
5kyu - Base64 Encoding
https://www.codewars.com/kata/5270f22f862516c686000161/train/javascript


Extend the String object that converts the value of the String 
to and from Base64 using the ASCII (UTF-8 for C#) character set.
*/

/* 
atob() & btoa() now deprecated.
Solution from https://stackoverflow.com/questions/68849233/convert-a-string-to-base64-in-javascript-btoa-and-atob-are-deprecated
*/

String.prototype.toBase64 = function () {
  return Buffer.from(this).toString('base64');
}
String.prototype.fromBase64 = function () {
  return Buffer.from(this, 'base64').toString('ascii');
}


console.log('this is a string!!'.toBase64(), 'dGhpcyBpcyBhIHN0cmluZyEh');
console.log('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64(), 'this is a string!!');