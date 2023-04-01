/* 
7kyu - Money, Money, Money
https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript

У мистера Скруджа есть сумма денег «P», которую он хочет инвестировать. 
Прежде чем он это сделает, он хочет знать, сколько лет «Y» эта сумма «P» 
должна храниться в банке, чтобы она составила желаемую сумму денег «D».

Сумма хранится в течение Y лет в банке, где проценты I выплачиваются ежегодно. 
После уплаты налогов «Т» за год новая сумма реинвестируется.

налогом облагается только начисленные проценты за год.


*/

function calculateYears(principal, interest, tax, desired) {
  let year = 0;
  while (principal < desired) {
    principal += principal * interest * (1 - tax);
    year++;
  }
  return year;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100), 3)
console.log(calculateYears(1000, 0.01625, 0.18, 1200), 14)
console.log(calculateYears(1000, 0.05, 0.18, 1000), 0)