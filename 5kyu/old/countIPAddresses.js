/* 
5kyu https://www.codewars.com/kata/526989a41034285187000de4
Даны 2 адреса IP.
Подсчитать кол-во адресов в диапазоне.
*/

function ipsBetween(start, end){
  const ip2num = (ip) => {
   let n = ip.split('.');
   return n[0]*16777216 + n[1]*65536 + n[2]*256 + (+n[3]);
 };
 return ip2num(end) - ip2num(start);
}