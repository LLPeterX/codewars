/* 
https://www.codewars.com/kata/57e8f757085f7c7d6300009a/train/javascript
*/
function planeSeat(a){
  const fwdPos = (x) => {
    if(x<21) { return "Front"; }
    else if(x<41) {return "Middle";}
    else if(x<61) {return "Back";}
    return null;
  };
  const sidePos = (x) => {
    let c = x.charCodeAt(0);
    if(c<68 && c>=65) {  return "Left";} 
    else if(c<71) {return "Middle"; }
    else if(c<76 && x!='I' && x!='J') { return "Right"; }
    return  null;
  };
  let [,fwd, side] = a.match(/(\d+)(\D+)/);
  console.log(` fwd=${fwd} side=${side}`);
  return fwdPos(+fwd) && sidePos(side) ? `${fwdPos(+fwd)}-${sidePos(side)}` :  'No Seat!!';
}

console.log(planeSeat('2B'), 'Front-Left');
console.log(planeSeat('20B'), 'Front-Left');
console.log(planeSeat('58I'), 'No Seat!!');

//best
/* 
function planeSeat(a){
  const number = parseInt(a);
  const letter = a[a.length - 1];
  if (number > 60 || letter == 'I' || letter == 'J') return 'No Seat!!';
  return `${number > 20 ? number > 40 ? 'Back-' : 'Middle-' : 'Front-'}${letter > 'C' ? letter > 'F' ? 'Right' : 'Middle' : 'Left'}`;
}

const planeSeat = a =>
  parseInt(a) > 60 || !`ABCDEFGHK`.includes(a.slice(-1)) ? `No Seat!!` :
    `${[`Front`, `Middle`, `Back`][(parseInt(a) - 1) / 20 ^ 0]}-${[`Left`, `Middle`, `Right`][`ADGBEHCFK`.indexOf(a.slice(-1)) % 3]}`;
*/

