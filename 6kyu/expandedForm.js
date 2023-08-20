/* 
6kyu - Write Number in Expanded Form - Part 2
https://www.codewars.com/kata/58cda88814e65627c5000045/train/javascript

You will be given a number and you will need to return it as a string in expanded form :
expanded_from(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
expanded_from(1.24); // should return "1 + 2/10 + 4/100"
expanded_from(7.304); // should return "7 + 3/10 + 4/1000"
expanded_from(0.04); // should return "4/100"
*/

function expandedForm(num) {
  let s = String(num);
  let k = s.indexOf('.');
  if (k < 0) {
    k = s.length;
    s + ".0";
  }
  let i = k - 1, j = k + 1, di = 1, dj = 10, res = [];
  while (i >= 0 || j < s.length) {
    if (i >= 0 && s[i] !== '0') {
      res.unshift(s[i] * di);
    }
    di *= 10;
    i--;
    if (j < s.length && s[j] !== '0') {
      res.push(`${s[j]}/${dj}`);
    }
    dj *= 10;
    j++;
  }
  return res.join(' + ');
}

console.log(expandedForm(807.304), '800 + 7 + 3/10 + 4/1000');
console.log(expandedForm(1.24), '1 + 2/10 + 4/100');
console.log(expandedForm(4.28), '4 + 2/10 + 8/100');
console.log(expandedForm(7.304), '7 + 3/10 + 4/1000');
console.log(expandedForm(0.04));

// best
/* 
function expandedForm(num) {
  var [int, dec] = (''+num).split('.')

  return int.split('').map((x, y, a) => x + '0'.repeat(a.length - y - 1))
    .concat(dec.split('').map((x, y, a) => `${x}/1${'0'.repeat(y + 1)}`))
    .filter(x => !x.startsWith('0'))
    .join(' + ')
}
*/