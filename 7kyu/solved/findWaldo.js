/* 
7kyu - Where's Waldo?
https://www.codewars.com/kata/638244fb08da6c61361d2c40/train/javascript

*/

/* function findWaldo(crowd) {
  //find symbol of Waldo
  let waldoChar = Array.from(crowd.join``.split('').reduce((s, v) => {
    s.set(v, (s.get(v) || 0) + 1); return s;
  }, new Map())).find(a => a[1] === 1)[0];
  let index = crowd.join``.split("").indexOf(waldoChar);
  return [~~(index / crowd[0].length), index % crowd[0].length];
}
 */

function findWaldo(crowd) {
  const i = crowd.join``.split("").indexOf(Array.from(crowd.join``.split('').reduce((s, v) => {
    s.set(v, (s.get(v) || 0) + 1); return s;
  }, new Map())).find(a => a[1] === 1)[0]);
  return [~~(i / crowd[0].length), i % crowd[0].length];
}

const crowd1 = [
  "             ",           // Air
  "         w   ",           // Air with a bird
  "   w         ",           // Air with a bird
  "~~~~~~~~~~~~~",           // Sea
  ".~..~~.~~~..~",           // Waves on beach
  "...P......P..",           // Beach with some people
  "......P..P...",           // Beach with some people
  "..PW........."            // Beach with Waldo and presumably a friend next to him
];

console.log(findWaldo(crowd1)); // [7,3]

const crowd2 = [
  "                              ",           // Air
  "                              ",           // Air
  "            _                 ",           // Top of pyramid
  "          _____               ",           // Layer of pyramid
  "        _________             ",           // Layer of pyramid
  "  B  _______________   G   GG "            // Ground layer of pyramid with several people, including Waldo
];

console.log(findWaldo(crowd2)); // [5,2]

// best

/* 
findWaldo
=s=>{d={}
,s.map((e
,i)=>[...
e].map((c
,j)=>(d[c
]=d[c]||[
]).push([
+i,+j])))
for (e in
d)if(!d[e
][-~'W'])   //  <- Waldo is here!
return d[
e].pop()}
*/

/* 
function findWaldo(crowd) {
  let count = new Map();
  for (let y = 0; y < crowd.length; y++) {
    for (let x = 0; x < crowd[y].length; x++) {
      count.set(crowd[y][x], (count.get(crowd[y][x]) || 0) + 1)
    }
  }
  for (let y = 0; y < crowd.length; y++) {
    for (let x = 0; x < crowd[y].length; x++) {
      if (count.get(crowd[y][x]) == 1) {
        return [y, x];
      }
    }
  }
}
*/

/* 
function findWaldo(crowd) {
  const c = crowd.reduce((r, row) => [...row].reduce((r, x) => (r[x] = r[x] + 1 || 1, r), r), {});
  const waldo = Object.entries(c).find(x => x[1] === 1)[0];
  const y = crowd.findIndex(row => row.includes(waldo));
  const x = crowd[y].indexOf(waldo);
  return [y, x];
}
*/

/* 
findWaldo=a=>[a[z='findIndex'](r=>~(x=[...r][z](c=>(0+a).split(c).length<3))),x]
*/