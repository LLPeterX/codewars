/* 
6kyu - The Wrong-Way Cow
https://www.codewars.com/kata/57d7536d950d8474f6000a06/train/javascript
*/

function findWrongWayCow(field) {
  const cowPos = {};
  let dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  for (let y = 0; y < field.length; y++) {
    for (let x = 0; x < field[0].length; x++) {
      if (field[y][x] === 'c') {
        for (let [dx, dy] of dirs) {
          if (x + dx >= 0 && x + dx < field[0].length && y + dy >= 0 && y + dy < field.length) {
            if (field[y + dy][x + dx] === 'o') {
              let key = [dx, dy].toString();
              if (cowPos[key]) {
                cowPos[key] = [...cowPos[key], [x, y]];
              } else {
                cowPos[key] = [x, y];
              }
            }
          }
        }
      }
    }
  }
  return Object.values(cowPos).filter(e => e.length === 2)[0];
}

var field1 = [
  "cow.cow.cow.cow.cow".split(''),
  "cow.cow.cow.cow.cow".split(''),
  "cow.woc.cow.cow.cow".split(''),
  "cow.cow.cow.cow.cow".split('')
];
console.log(findWrongWayCow(field1), [6, 2]);

var field2 = [
  "c..........".split(''),
  "o...c......".split(''),
  "w...o.c....".split(''),
  "....w.o....".split(''),
  "......w.cow".split('')
];
console.log(findWrongWayCow(field2), [8, 4]);

// best
/* 
let findWrongWayCow = function(m) {
  let h = m.length, w = m[0].length, u = [], d = [], l = [], r = [];
  for (let i=0; i+2<h; i++) for (let j=0; j<w; j++) if (m[i][j]=='c' && m[i+1][j]=='o' && m[i+2][j]=='w') u.push([j,i]);
  for (let i=h-1; i>1; i--) for (let j=0; j<w; j++) if (m[i][j]=='c' && m[i-1][j]=='o' && m[i-2][j]=='w') d.push([j,i]);
  for (let j=0; j+2<w; j++) for (let i=0; i<h; i++) if (m[i][j]=='c' && m[i][j+1]=='o' && m[i][j+2]=='w') l.push([j,i]);
  for (let j=w-1; j>1; j--) for (let i=0; i<h; i++) if (m[i][j]=='c' && m[i][j-1]=='o' && m[i][j-2]=='w') r.push([j,i]);
  return [u,d,l,r].filter(d=>d.length==1)[0][0];
}
*/

/* 
const rotate = a => a[0].map( (_,i) => [].concat(...a.map( v => v.filter( (_,j) => i===j ) ).reverse()) ) ;
const unRotate = ( [x,y], length ) => [y,length-x] ;
const _solution = (field, width=field[0].length) =>
  ( field => field.replace( /[^c]/g, "").length===1
    ? [ field.indexOf("c")%width, Math.floor(field.indexOf("c")/width) ]
    : null
  )
  ( field.map(v=>v.join("")).join("").replace( /cow/g, "..." ) )
;
*/