/* 
8kyu Holiday VIII - Duty Free
https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript

Сколько бутылок виски в duty-free нужно будет купить, чтобы экономия по сравнению с
обычной ценой покрыла расходы на отпуск.

Дано: нормальная цена, % скидки, стоимость отпуска.

Пример: норм.цена=$10, скидка 10%. На каждой бутылке вы экномите $1.
Тогда при стоимости отпуска $500 потребуется 500 бутылок
*/

function dutyFree(normPrice, discount, hol){
   //normPrice * n * discount/100 = hol
   // n = hol/normPrice/discount*100
   return Math.floor(hol/normPrice/discount*100);
}

console.log(dutyFree(12, 50, 1000), 166);
console.log(dutyFree(17, 10, 500), 294);
console.log(dutyFree(24, 35, 3000), 357);

