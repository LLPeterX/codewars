/* 
6kyu - IPv4 Parser
https://www.codewars.com/kata/556d120c7c58dacb9100008b/train/javascript

Problem Statement
Write a function that takes two string parameters, an IP (v4) address and a subnet mask, and returns two strings: the network block, and the host identifier.

The function does not need to support CIDR notation.

Description
A single IP address with subnet mask actually specifies several addresses: a network block, and a host identifier, and a broadcast address. These addresses can be calculated using a bitwise AND operation on each bit.
*/

//const ip4ToNumber = (addr) => addr.split('.').reduce((s, v, i) => s + v * 8 ** (3 - i), 0);
function ipv4Parser(ip, mask) {
  const ipArr = ip.split('.'),
    maskArr = mask.split('.');
  let block = [],
    hostId = [];
  for (let i = 0; i < 4; i++) {
    let n = ipArr[i] & maskArr[i];
    if (n == ipArr[i]) {
      block.push(ipArr[i]);
      hostId.push(0);
    } else {
      block.push(n);
      hostId.push(ipArr[i] - n);
    }
  }
  return [block.join('.'), hostId.join('.')];
}

console.log(ipv4Parser('192.168.50.1', '255.255.255.0'));
console.log(ipv4Parser('65.196.188.53', '0.0.0.0'));
console.log(ipv4Parser('192.168.50.153', '255.255.255.224'));

// best (svk)
/* 
function ipv4Parser(ip, mask){
  ip = ip.split('.'); mask = mask.split('.');
  var block = mask.map((x, i) => x & ip[i]),
      host = block.map((x, i) => x ^ ip[i]);
  return [block.join('.'), host.join('.')];
}
*/
