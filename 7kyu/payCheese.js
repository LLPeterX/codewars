/* 
7kyu - Sweet Dreams are Made of Cheese
https://www.codewars.com/kata/5ab7ee556a176b1043000047/train/javascript

* Mr Leicester employs 4 staff, who together make 10 wheels of cheese every 6 minutes.
* Worker pay is calculated on how many wheels of cheese they produce in a day.
* Mr Leicester pays his staff according to the UK living wage, which is currently £8.75p an hour. There are 100 pence (p) to the UK pound (£).
*/

/* 
4 рабочих
з/п = 8.75/час
6мин - 10 сыра
кол-во сыра в день - в input (5 чисел)

сколько минут работали сотрудники в день, чтобы произвести 750 сыра?
x=6*750/10 = 450 минут = 7.5 часов (5-й 6*600/10/60 = 6)
т.е. за неделю 7.5*4 + 6 = 36
налог = 8.75*36 = 315 * 4 рабочих = 315*4 = 1260; OK

с округлением (574*5)
x=574*0.6 = 344.4 минуты * 5 = 1722 мин = 28.7 часов => 29 часов
29*8,75*4=1015


*/
function payCheese(arr) {
  return `£${Math.ceil(arr.reduce((minutes, t) => minutes + 0.6 * t, 0) / 60) * 8.75 * 4}`;
}

console.log(payCheese([750, 750, 750, 750, 600]), "£1260");
console.log(payCheese([700, 750, 700, 750, 600]), "£1225");
// Don't forget to round up at the end of the week
console.log(payCheese([574, 574, 574, 574, 574]), "£1015");