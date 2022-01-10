/* 
7kyu - Baby shark lyrics generator
https://www.codewars.com/kata/5d076515e102162ac0dc514e/train/javascript
Create a function, as short as possible, that returns this lyrics.
Your code should be less than 300 characters. Watch out for the three points at the end of the song
*/
/* 
function babySharkLyrics() {
  let a = ['Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa'], d = 'doo doo doo doo doo doo';
  let r = a.map(e => `${e} shark, ${d}\n`.repeat(3) + `${e} shark!\n`).join``;
  r += `Let's go hunt, ${d}\n`.repeat(3) + "Let's go hunt!\nRun away,…";
  return r;
}
 */

function babySharkLyrics() {
  let d = 'doo doo doo doo doo doo';
  return ['Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa'].map(e => `${e} shark, ${d}\n`.repeat(3) + `${e} shark!\n`).join`` + `Let's go hunt, ${d}\n`.repeat(3) + "Let's go hunt!\nRun away,…";
}

console.log(babySharkLyrics());
// 262

// best
/* 
function babySharkLyrics(){
  names = ["Baby shark", "Mommy shark", "Daddy shark", "Grandma shark", "Grandpa shark", "Let's go hunt"];
  return names.map((name)=> `${name},${" doo".repeat(6)}\n`.repeat(3) + `${name}!\n`).join("") + "Run away,…";
}
*/

/* 
babySharkLyrics=_=>[...[`Baby`,`Mommy`,`Daddy`,`Grandma`,`Grandpa`].map(v=>v+` shark`),`Let's go hunt`].map(v=>`${v},${` doo`.repeat(6)}\n`.repeat(3)+v+`!\n`).join``+`Run away,…`
// 178
*/