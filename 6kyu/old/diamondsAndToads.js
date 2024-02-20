/* 
6kyu - Diamonds and Toads
https://www.codewars.com/kata/57fa537f8b0760c7da000407/train/javascript
*/

function diamondsAndToads(sentence, fairy) {
  const res = { good: { ruby: 0, crystal: 0 }, evil: { python: 0, squirrel: 0 } }[fairy];

  for (let letter of sentence) {
    if (fairy === 'good') {
      if (letter === 'r') res.ruby++;
      else if (letter === 'R') res.ruby += 2;
      else if (letter === 'c') res.crystal++;
      else if (letter === 'C') res.crystal += 2;
    } else {
      if (letter === 'p') res.python++;
      else if (letter === 'P') res.python += 2;
      else if (letter === 's') res.squirrel++;
      else if (letter === 'S') res.squirrel += 2;
    }
  }
  return res;
}


// best
/* 
function diamondsAndToads(s,good){
  const ct=c=>s.split(c).length-1+(s.split(c.toUpperCase()).length-1)*2
  return good=="good"?{ruby: ct("r"), crystal: ct("c")}:{python:ct("p"), squirrel:ct("s")}
}
*/