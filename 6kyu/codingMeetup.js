/* 
6kyu - Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
https://www.codewars.com/kata/5829ca646d02cd1a65000284

Дан массив объектов.
Вернуть true, если зарегистрированы разработчики всех возрастных групп
 */

function getAgeIndex(age) {
  if(age<20) return 0;
  if(age>=100) return 9;
  return Math.floor(age/10)-1;
}
function isAgeDiverse(list) {
  let res = new Array(10).fill(0);
  list.forEach(e => {
   res[getAgeIndex(e.age)]++;
  });
  return res.filter(e => e>0).length === 10;

}
//console.log(getAgeIndex(69));

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
var list2 = [
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
];

var list3 = [
  { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Python' },
  { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' }
];

console.log(isAgeDiverse(list1), true);
console.log(isAgeDiverse(list2), false);
console.log(isAgeDiverse(list3), false);


// best
/* 
function isAgeDiverse(list) {
  return list.some(h => h.age >= 100) 
  ? [10,20,30,40,50,60,70,80,90].every(e => list.some(x => x.age - e >= 0 && x.age - e <= 9))
  : false;
}
*/