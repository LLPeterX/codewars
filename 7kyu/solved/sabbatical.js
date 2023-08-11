/* 
7kyu - The Office VI - Sabbatical
https://www.codewars.com/kata/57fe50d000d05166720000b1/
 */

function sabb(s, val, happiness) {
  const sab = 'sabbatical';
  return [...s].filter(c => sab.includes(c)).length + val + happiness > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}

console.log(sabb('Can I have a sabbatical?', 5, 5));
console.log(sabb('Why are you shouting?', 7, 2), 'Back to your desk, boy.');
console.log(sabb('What do you mean I cant learn to code??', 8, 9), 'Sabbatical! Boom!');
console.log(sabb('Please calm down', 9, 1), 'Back to your desk, boy.');

//best
/*
function sabb(x, val, happ) {
  return (x.match(/[sabbatical]/gi) || []).length + val + happ > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}
*/