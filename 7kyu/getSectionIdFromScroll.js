/* 
7kyu - Which section did you scroll to?
https://www.codewars.com/kata/5cb05eee03c3ff002153d4ef/train/javascript
*/

function getSectionIdFromScroll(scrollY, sizes) {
  let ranges = [], last = 0;
  for (let s of sizes) {
    ranges.push([last, s - 1 + last]);
    last += s;
  }
  return ranges.findIndex(e => scrollY >= e[0] && scrollY <= e[1]);
}

console.log(getSectionIdFromScroll(299, [300, 200, 400, 600, 100]), 0); // [0-299],[300-499],[500-899]
console.log(getSectionIdFromScroll(300, [300, 200, 400, 600, 100]), 1);
console.log(getSectionIdFromScroll(1600, [300, 200, 400, 600, 100]), -1);

// best
/*
function getSectionIdFromScroll(y, s){
   var t=0;
   return s.findIndex(e=>(t+=e)>y);
}
*/

/*
const getSectionIdFromScroll = (scrollY, sizes) =>
  sizes.findIndex(val => (scrollY -= val) < 0);
*/