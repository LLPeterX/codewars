/* 
7kyu - Even and Odd !
https://www.codewars.com/kata/594adadee075005308000122/train/javascript

iven a number N, can you fabricate the two numbers NE and NO such that NE is formed by even digits of N and NO is formed by odd digits of N? Examples:

input	NE	NO
126453	264	153
3012	2	31
4628	4628	0
*/

function evenAndOdd(num, e = "", o = "") {
  for (let d of [...("" + num)]) if (+d % 2) o += d; else e += d;
  return [+e, +o];
}

console.log(evenAndOdd(126453), [264, 153], `For input 126453`);
console.log(evenAndOdd(3012), [2, 31], `For input 3012`);
console.log(evenAndOdd(4628), [4628, 0], `For input 4628`);