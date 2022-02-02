/* 
7kyu - Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript


*/

function countLanguages(list) {
  // return list.reduce((obj, e) => {
  //   if (obj[e.language]) {
  //     obj[e.language]++;
  //   } else {
  //     obj[e.language] = 1;
  //   }
  //   return obj;
  // }, {});
  return list.reduce((obj, e) => { obj[e.language] = obj[e.language] + 1 || 1; return obj; }, {});
}

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

console.log(countLanguages(list1));

// best
/* 
const countLanguages = list =>
  list.reduce((pre, val) => (pre[val.language] = -~pre[val.language], pre), {});
*/

/* 
function countLanguages(list) { 
  return list.reduce((allLanguages, { language }) => ({...allLanguages, [language]: (allLanguages[language] || 0) + 1}), {})
}
*/
