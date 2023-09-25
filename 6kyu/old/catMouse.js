/* 
6kyu - Cat and Mouse - Harder Version
https://www.codewars.com/kata/57ee2a1b7b45efcf700001bf/train/javascript
*/

function catMouse(x, j) {
  let cat = -1, dog = -1, mouse = -1;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'C') cat = i;
    else if (x[i] === 'm') mouse = i;
    else if (x[i] === 'D') dog = i;
  }
  if (cat < 0 || mouse < 0 || dog < 0) return "boring without all three";
  // check if Dog is between Cat and Mouse
  if (!((dog > mouse && dog < cat) || (dog > cat && dog < mouse))) {
    // if so, then remove dog
    dog += x.length * Math.sign(cat - mouse);
  }
  if (mouse < cat) {
    mouse = cat - mouse;
    dog = cat - dog;
    cat = 0;
  }
  let d = mouse - cat;
  if (d > j) return "Escaped!";
  if (dog > cat && dog < mouse && d <= j) return "Protected!"
  return "Caught!";
}

// console.log(catMouse('..D.....Cm', 13), "Caught!");
// console.log(catMouse('............C.............D..m...', 8), "Escaped!");
// console.log(catMouse('m.C...', 5), "boring without all three");
// console.log(catMouse('.m.D.....C....', 13), "Protected!");
// console.log(catMouse('.............m..D..........C...', 14), "Protected!");
// console.log(catMouse('...........m...........C.......D.', 3), "Escaped!");
console.log(catMouse('.....Dm........C.....................', 12), "Caught!");


// best
/* 
function catMouse(x, j){
  var index = {};
  for(var l = x.length-1; l >=0; --l){
    index[x[l]] = l;
  }
  var {C,D,m} = index;
  if(Number.isNaN(C+D+m)) return 'boring without all three'
  if(Math.abs(m-C) <= j){
    if((D > C && D < m) || (D > m && D < C)) return 'Protected!'
    return 'Caught!'
  }
  return 'Escaped!'
}
*/

/* 
function catMouse(str, j){
  const index = {};
  for (let i = str.length - 1; i >= 0; --i) index[str[i]] = i;
  
  let {C, m, D} = index;
  
  if (!(m + C + D > 0)) return 'boring without all three';
  if (C > m) m = [C, C = m][0];
  if (m - C > j) return 'Escaped!';
  return D > C && D < m ? 'Protected!' : 'Caught!';
}
*/