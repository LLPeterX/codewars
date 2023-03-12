/* 
8kyu - Simple Change Machine
https://www.codewars.com/kata/57238766214e4b04b8000011/train/javascript

Создать разменную машину.
Автомат принимает определенный диапазон монет и банкнот, 
возвращает сдачу монетами 20 и 10 пенсов в минимальном количестве штук. 
Например, 50 пенсов вернут две части по 20 пенсов и одну 10 пенсов. 

Машина всегда будет пытаться вернуть сдачу, например, если вы введете 20 пенсов, 
она вернет "10p 10p". 

Автомат принимает следующие монеты и купюры:  £5, £2, £1, 50p, 20p
Любые монеты и купюры, не принятые автоматом, будут возвращены. 
Если положить банкноту в 20 фунтов, она будет возвращена, а не разобрана на сдачу. 

Эта разменная машина запрограммирована на прием и выдачу строк, а не чисел. 
Изменение будет возвращено как одна строка с разменом, разделенные одиночными пробелами и без запятых. 
Значения строки будут убывающими.
*/
/* 
function changeMe(moneyIn) {
  let count10, count20;
  let m = moneyIn.match(/(£|p)(\d+)$/);
  if (!m) return moneyIn;
  let [, currency, amount] = m;
  amount = +amount;
  if (currency === '£') {
    if (amount != 5 && amount !== 2 && amount != 1) return moneyIn;
    amount *= 100;
    count20 = Math.floor(amount / 20);
    count10 = amount - count20 * 20;
  } else {
    if (amount != 50 && amount != 20) return moneyIn;
    if (amount === 50) {
      count10 = 1;
      count20 = 2;
    } else {
      count10 = 2;
      count20 = 0;
    }
  }
  return ("20p ".repeat(count20)).trim() + ((count10 > 0) ? ' ' + count10 : "");

}
 */
function changeMe(moneyIn) {
  const change = {
    '£5': ('20p '.repeat(25)).trim(),
    '£2': ('20p '.repeat(10)).trim(),
    '£1': ('20p '.repeat(5)).trim(),
    '50p': "20p 20p 10p",
    '20p': "10p 10p"
  }
  return change[moneyIn] || moneyIn;
}

console.log(changeMe("£1"), '>', "20p 20p 20p 20p 20p");
console.log(changeMe("50p"), '>', "20p 20p 10p");
console.log(changeMe("20p"), '>', "10p 10p");