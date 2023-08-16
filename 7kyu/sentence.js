/* 
7kyu - String Reordering
https://www.codewars.com/kata/5b047875de4c7f9af800011b/train/javascript
*/

function sentence(List) {
  //return List.map(o => Object.entries(o)) //.sort((a,b)=>a[0]-b[0]).map(s=>s[1]).join(' ');
  let z = List.reduce((a, o) => { a = a.concat(Object.entries(o)); return a; }, []);
  return z.sort((a, b) => a[0] - b[0]).map(e => e[1]).join(' ');
}

let List = [
  { '4': 'dog' }, { '2': 'took' }, { '3': 'his' },
  { '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }
];

console.log(sentence(List), 'Vatsan took his dog for a spin');

// best

/* 
function sentence(a) {
  return a.sort((a,b)=>Object.keys(a)-Object.keys(b)).map(x=>x[+Object.keys(x)]).join` `
}
*/

/* 
function sentence(List) {
  return List
    .map(e => Object.entries(e)[0])
    .sort(([a], [b]) => a - b)
    .map(([a, b]) => b)
    .join(" ");
}
*/