/* 
6kyu IPv4 to int32
https://www.codewars.com/kata/52ea928a1ef5cfec800003ee/train/javascript
 */
function ipToInt32(ip){
   //return ip.split('.').reverse().reduce((sum,v,i) => sum + v*Math.pow(256,i),0);
   return ip.split('.').reverse().reduce((sum,v,i) => sum + v*(256**i),0);
}

console.log(ipToInt32("128.32.10.1"),2149583361); // 2149583361

// console.log(1 + 10*256 + 32*256*256 + 128*256*256*256);
// console.log(Math.pow(256,0));

// my best!
//другие решения
/* 
function ipToInt32(ip){
    ip = ip.split('.');
    return  ((ip[0] << 24) + (ip[1] << 16) + (ip[2] << 8) + (ip[3] << 0))>>>0;
}
*/

/* 
function ipToInt32(ip){
   return ip.split(".").reduce(function(int,v){ return int*256 + +v } )
}
*/

/* 
let ipToInt32 = ip => ip.split(".").reduce((a, b) => a << 8 | b) >>> 0;
*/
