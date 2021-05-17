/* 
6kyu - Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?
https://www.codewars.com/kata/58381907f8ac48ae070000de

Дан массив объектов.
Вернуть true, если если количество участников с language X не более чем в 2 раза превышает количество 
участников с другими language

*/
function isLanguageDiverse(list) {
  let lang={};
  for(let l of list) {
    lang[l.language] = lang[l.language] ? lang[l.language]+1 : 1;
  }
  let arr = Object.values(lang).sort((a,b)=>a-b);
  return arr[arr.length-1]/arr[0]<=2;
}

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

var list3 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];
console.log(isLanguageDiverse(list1));
console.log(isLanguageDiverse(list3));

//best
/* 
function isLanguageDiverse(list) {
  list = list.map(dev => dev.language);
  const num = [...new Set(list)].map(el => list.filter(e => e === el).length);
  return Math.max(...num) / Math.min(...num) <= 2;
}
*/