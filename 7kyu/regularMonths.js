/* 
7kyu - Simple Fun #101: Regular Months
https://www.codewars.com/kata/58981e716551af31b100063f/train/javascript

Стремясь быть более инновационным, ваш начальник ввел странную новую традицию: 
в первый день каждого месяца вам разрешается работать из дома.
Вам нравится когда день выпадает на понедельник.
Вы и ваши коллеги стали называть эти месяцы обычными месяцами.
Поскольку вы любите работать из дома, вы решили узнать ближайший следующий месяц,
учитывая, что currMonth только начался.

Month lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
Please, note that in leap years February has 29 days.

For currMonth = "02-2016", the output should be "08-2016".

[input]: string currMonth  in the format mm-yyyy


*/

function regularMonths(currMonth) {
  let [m, y] = currMonth.split('-');
  //let d = new Date(`${y}-${m}-01`), dNext;
  let d = new Date(y, m, 1), dNext;
  do {
    dNext = new Date(d.setMonth(d.getMonth() + 1));
  } while (dNext.getDay() !== 1);
  return `${String(dNext.getMonth() + 1).padStart(2, '0')}-${dNext.getFullYear()}`;
}

console.log(regularMonths("02-2016"), "08-2016")
console.log(regularMonths("05-2027"), "11-2027")
console.log(regularMonths("09-2099"), "02-2100")
console.log(regularMonths("01-1970"), "06-1970")
console.log(regularMonths("07-2024"), "09-2025")

