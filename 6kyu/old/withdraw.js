/* 
6kyu - Simple Fun #165: Withdraw
https://www.codewars.com/kata/58afce23b0e8046a960000eb/train/javascript

Банкомат может выдать только купюры номиналом 100, 50, 20
Сколько купюр каждого номнала можно получить для заданной суммы N ? (40...10000)
Банкомат выдает мин. кол-во купюр каждого номинала (100, 50, 20).

Сумму всегда можно выдать номналами (100, 50, 20).
*/




// from: https://github.com/Automedon/CodeWars-6-kyu-Soluitions/blob/master/Simple%20Fun%20%23165:%20Withdraw.js
function withdraw(n) {
  let result = [0, 0, 0];
  while (n >= 20) {
    if (n % 50 === 0) break;
    n -= 20;
    result[2]++;
  }
  while (n >= 100) {
    n -= 100;
    result[0]++;
  }
  while (n >= 50) {
    n -= 50;
    result[1]++;
  }
  return result;
}




console.log(withdraw(40), [0, 0, 2])
console.log(withdraw(250), [2, 1, 0])
console.log(withdraw(260), [2, 0, 3])
console.log(withdraw(230), [1, 1, 4])
console.log(withdraw(60), [0, 0, 3])

// best
/* 
function withdraw(n) {
    const bills = [0, 0, 0];
    while (n % 50) {
        bills[2]++;
        n -= 20;
    }

    bills[0] = Math.floor(n / 100);
    bills[1] = Math.floor((n % 100) / 50);

    return bills;
}
*/

/* 
function withdraw(n) {
  for (var i=0; i<=100; ++i)
  for (var j=0; j<=100; ++j)
  for (var k=0; k<=100; ++k)
    if (k*100+j*50+i*20==n)
      return [k,j,i];
}
*/