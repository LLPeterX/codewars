/* 
6kyu - IP Address to Number
https://www.codewars.com/kata/541a354c39c5efa5fa001372/train/javascript
*/

const ipToNum = (ip) => ip.split('.').reduce((s, v) => ((s << 8) + (+v)), 0) >>> 0;

// function numToIp(num) {
//   return `${(num >> 24) & 0xFF}.${(num >> 16) & 0xFF}.${(num >> 8) & 0xFF}.${num & 0xFF}`;
// }

const numToIp = (num) => `${(num >> 24) & 0xFF}.${(num >> 16) & 0xFF}.${(num >> 8) & 0xFF}.${num & 0xFF}`;

console.log(ipToNum('192.168.1.1'), 3232235777);
console.log(ipToNum('10.0.0.0'), 167772160);
console.log(ipToNum('176.16.0.1'), 2953838593);

console.log(numToIp(3232235777), '192.168.1.1');
console.log(numToIp(167772160), '10.0.0.0');
console.log(numToIp(2953838593), '176.16.0.1');