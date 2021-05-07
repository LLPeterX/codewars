/* 
7kyu ATM
https://www.codewars.com/kata/5635e7cb49adc7b54500001c

В банкомате есть достаточное кол-во купюр номиналом [10, 20, 50, 100, 200, 500] dollars.
Вы запрашиваете некую сумму.
Вернуть минимальное кол-во банкнот
*/

function solve(n) {
  if (n % 10) {
    return -1;
  }
  let nom = [500, 200, 100, 50, 20, 10], count = 0;
  for (let x of nom) {
    count += Math.floor(n / x);
    n = n % x;
  }
  return count;
}

console.log(solve(770), 4, "Wrong result for 770");
console.log(solve(550), 2, "Wrong result for 550");
console.log(solve(10), 1, "Wrong result for 10");
console.log(solve(1250), 4, "Wrong result for 1250");
console.log(solve(125), -1);

// best (my best)
/* 
H=Q=>(Q/5|0)+(Q%5/2|0)+(1&Q%5)
solve=Q=>Q%10?-1:H(Q/100)+H(Q%100/10)
*/

/* 
const solve=n=>n%10?-1:n?1+solve(n-[500,200,100,50,20,10].filter(x=>x<=n)[0]):0
*/