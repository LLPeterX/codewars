/* 
7kyu How many days are we represented in a foreign country?
https://www.codewars.com/kata/58e93b4706db4d24ee000096

Коллеги ездят за границу. Нужно определить количество дней, в течении которых наша компания представлена за границей.
Считается каждый день, когда один или несколько коллег находятся в стране.

Напишите функцию, которая получает список пар и возвращает количество дней, в течение которых компания представлена ​​в другой стране.
Первое число пары - это номер дня прибытия, а второе - день отъезда, т.е. 1 января - это число 1, а 31 декабря - 365
*/

function daysRepresented(trips) {
  let days = Array(365).fill(0);
  trips.forEach(t => {
    for(let day = t[0]; day<=t[1]; day++) {
      days[day] = 1;
    }
  });
  return days.filter(v=>v).length;
}

console.log(daysRepresented([[10, 17], [200, 207]])); // 16
console.log(daysRepresented([[10,15],[25,35]])); // 17
console.log(daysRepresented([[2,8], [220,229],[10,16]])); // 24
console.log(daysRepresented( [[2,8], [6,16],[17,26]])); // 25  (у меня 28)
console.log(daysRepresented( [ [ 267, 283 ],
  [ 6, 45 ],
  [ 116, 124 ],
  [ 71, 82 ],
  [ 195, 226 ],
  [ 71, 98 ] ])); // 126  (у меня 138)