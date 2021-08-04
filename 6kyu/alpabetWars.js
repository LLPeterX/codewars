/* 
6kyu - Alphabet war - airstrike - letters massacre
https://www.codewars.com/kata/5938f5b606c3033f4700015a
*/

function alphabetWar(fight) {
  const leftLetters = { w: 4, p: 3, b: 2, s: 1 };
  const rightLetters = { m: 4, q: 3, d: 2, z: 1 };
  let armageddon = fight.replace(/(.?\*+.?)/g, '');
  if (armageddon.length === 0) {
    return "Let's fight again!";
  } else {
    const leftPower = [...armageddon].reduce((sum, v) => sum + (leftLetters[v] || 0), 0);
    const rightPower = [...armageddon].reduce((sum, v) => sum + (rightLetters[v] || 0), 0);
    if (leftPower === rightPower) return "Let's fight again!";
    return `${leftPower >= rightPower ? "Left" : "Right"} side wins!`;
  }
}

console.log(alphabetWar("z"), "Right side wins!");
console.log(alphabetWar("****"), "Let's fight again!");
console.log(alphabetWar("z*dq*mw*pb*s"), "Let's fight again!");
console.log(alphabetWar("zdqmwpbs"), "Let's fight again!");
console.log(alphabetWar("zz*zzs"), "Right side wins!");
console.log(alphabetWar("sz**z**zs"), "Left side wins!");
console.log(alphabetWar("z*z*z*zs"), "Left side wins!");
console.log(alphabetWar("*wwwwww*z*"), "Left side wins!");
console.log(alphabetWar("*wav**zmwea*w"), "Left side wins!"); // ничья

// best
/*
function alphabetWar(fight){
   fight = fight.replace(/[a-z]\*[a-z]|[a-z]\*|\*[a-z]/g,"")
    var l = 0;
    var r = 0;
    fight.split("").forEach(i=>"1sbpw".indexOf(i)>0?l+="1sbpw".indexOf(i):l)
    fight.split("").forEach(j=>"1zdqm".indexOf(j)>0?r+="1zdqm".indexOf(j):r)
    if(l==r){return "Let's fight again!"}
    return l>r ? "Left side wins!" : "Right side wins!";
}
*/

/*
const map = {w:-4, p:-3, b:-2, s:-1, m:4, q:3, d:2, z:1}

function alphabetWar(fight){
  var res = fight.replace(/[^*]?\*[^*]?/g, '').split('').reduce((a,b) => a + (map[b] || 0), 0);
  return res ? (res < 0 ? 'Left' : 'Right') + ' side wins!' : 'Let\'s fight again!';
}
*/

/*
const alphabetWar = fight =>
  (val => !val ? `Let's fight again!` : `${val < 0 ? `Lef` : `Righ`}t side wins!`)
  ([...fight.replace(/\w?\*\w?/g, ``)].reduce((pre, val) => pre + ({'w': -4, 'p' : -3, 'b': -2, s: -1, 'm': 4, 'q': 3, 'd': 2, 'z': 1}[val] || 0), 0));
*/

/*
const alphabetWar = s => {
  s = s.replace(/(.|^)(\*+(.|$))+/g, '');
  const count = (s, powers) => s.split``.reduce((sum, e) => sum + Math.max(powers.indexOf(e), 0), 0);
  const leftPowers = [,'s','b','p','w'];
  const rightPowers = [,'z','d','q','m'];
  const left = count(s, leftPowers);
  const right = count(s, rightPowers);
  return left === right ? 'Let\'s fight again!' : `${left > right ? 'Left' : 'Right'} side wins!`;
};
*/