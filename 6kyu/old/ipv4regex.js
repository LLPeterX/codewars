/* 
6kyu - Regexp Basics - is it IPv4 address?
https://www.codewars.com/kata/567fe8b50c201947bc000056
*/

// from: https://stackoverflow.com/questions/5284147/validating-ipv4-addresses-with-regexp
String.prototype.ipv4Address = function () {
  return /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(this)
}