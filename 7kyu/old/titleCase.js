/* 
7kyu - Title Case
https://www.codewars.com/kata/5202ef17a402dd033c000009


*/

function titleCase(title, minorWords) {
  if (!title) return "";
  let ex = minorWords ? minorWords.split(' ') : [];
  return title.split(' ').map((word, i) => {
    let k = ex.findIndex(w => w.toLowerCase() === word.toLowerCase());
    return (k < 0 || i == 0) ? word[0].toUpperCase() + word.slice(1).toLowerCase() : ex[k].toLowerCase();
  }).join(' ');
}
console.log(titleCase(''), '')
console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox')