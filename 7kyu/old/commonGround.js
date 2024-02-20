/* 
7kyu - Dinner Plans
https://www.codewars.com/kata/57212c55b6fa235edc0002a2/train/javascript

Compare the proposals with the following function:
function commonGround(s1, s2)

The parameters s1 and s2 are the strings representing 
what each of the generals said. 
You should output a string containing the words in s1 that also occur in s2.

Each word in the resulting string shall occur once, 
and the order of the words need to follow the order of the first occurence 
of each word in s2.

If they are saying nothing in common, kill both samurai and blame a ninja. (output "death")
*/

function commonGround(s1, s2) {
  let w1 = s1.split(' '), w2 = s2.split(' '), result = [];
  for (let w of w1) {
    let k = w2.indexOf(w);
    if (k >= 0 && !result.find(e => e.w == w)) result.push({ w, k });
  }
  return result.length ? result.sort((a, b) => a.k - b.k).map(e => e.w).join(' ') : 'death';
}

console.log(commonGround("eat chicken", "eat chicken and rice"), 'eat chicken')
console.log(commonGround("eat a burger and drink a coke", "drink a coke"), 'drink a coke')
console.log(commonGround("i like turtles", "what are you talking about"), 'death')

// best

/* 
const commonGround = (s1, s2) =>
  s2.split(` `).filter(val => s1.includes(val)).join(` `) || `death`;
*/