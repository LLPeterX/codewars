/* 
https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript
Есть 2 группы враждебных букв. Каждая буква имеет силу.

Напишите функцию, которая принимает строку fight и  возвращающую выигравшею сторону. 

*/

function alphabetWar2(fight)
{
  const leftStr = "sbpw", rightStr = "zdqm";
  let leftCount=0, rightCount=0, k;
  for(let i=0; i<fight.length; i++) {
    if((k = leftStr.indexOf(fight[i]))>=0) {
      leftCount += (k+1);
    } else if((k=rightStr.indexOf(fight[i]))>=0) {
      rightCount += (k+1);
    }
  }
  console.log([fight,leftCount, rightCount]);
  return leftCount > rightCount ? "Left side wins!" : rightCount > leftCount ? "Right side wins!" : "Let's fight again!";
}
function alphabetWar(fight)
{
  const str = "sbpwzdqm";
  let leftCount=0, rightCount=0,k;
  for(let i=0; i<fight.length; i++) {
    k=str.indexOf(fight[i]);
    if(k>=0) { if(k<4) leftCount += (k+1); else rightCount += (k-4+1); }
  }
  //console.log([fight,leftCount, rightCount]);
  return leftCount > rightCount ? "Left side wins!" : rightCount > leftCount ? "Right side wins!" : "Let's fight again!";
}

console.log(alphabetWar("z")); // right
console.log(alphabetWar("zdqmwpbs")); // again
console.log(alphabetWar("ssszzz")); // again
console.log(alphabetWar("zzzzs")); // right
console.log(alphabetWar("wwwwww")); // left
console.log(alphabetWar("pimzle")); // right

//best
/* 
alphabetWar = (fight) => ["Right side wins!","Let's fight again!","Left side wins!"][ Math.sign([...fight].reduce((r, cv) => r + 'sbpw'.indexOf(cv) - 'zdqm'.indexOf(cv),0)) + 1 ]
*/