/* 
7kyu - Simple Fun #326: The Shortest Time
https://www.codewars.com/kata/5950a4bfc6bf4f433f000031/train/javascript
*/

function shortestTime(n, m, [a, b, c, d]) {
  let stairsTime = d * (n - 1);
  let elevatorTime = a * Math.abs(n - m) + a * (n - 1) + b * 2 + c;
  //console.log(`  ${a * Math.abs(n - m)} + ${2 * b} + ${n * a} + ${c}`);
  //return [stairsTime, elevatorTime];
  return Math.min(stairsTime, elevatorTime);
}


console.log(shortestTime(5, 6, [1, 2, 3, 10]), 12)
console.log(shortestTime(1, 6, [1, 2, 3, 10]), 0)
console.log(shortestTime(5, 5, [1, 2, 3, 10]), 11)
console.log(shortestTime(2, 2, [1, 2, 3, 10]), 8)
console.log(shortestTime(2, 2, [2, 3, 4, 10]), 10)
console.log(shortestTime(5, 4, [1, 2, 3, 10]), 12)
console.log(shortestTime(5, 4, [2, 3, 4, 5]), 20)
console.log(shortestTime(74, 71, [5, 2, 16, 43]), 400) // FAIL = 
console.log(shortestTime(82, 99, [33, 31, 26, 58]), 3322) // FAIL =

// best

/* 
const shortestTime = (n,m,[ve,to,tc,vw]) => Math.min( (n-1)*vw, (Math.abs(m-n)+(n-1))*ve+to+tc+to ) ;
*/