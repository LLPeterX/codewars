/* 
6kyu - Simple Fun #180: Repeat Adjacent
https://www.codewars.com/kata/58b8dccecf49e57a5a00000e/train/javascript
*/

function repeatAdjacent(s) {
  return (s.replace(/(.)\1+/g, ' ').match(/(\s{2,})/g) || []).length;
}


console.log(repeatAdjacent("ccccoodeffffiiighhhhhhhhhhttttttts"), 3)
console.log(repeatAdjacent("soooooldieeeeeer"), 0)
console.log(repeatAdjacent("ccccoooooooooooooooooooooooddee"), 1)
console.log(repeatAdjacent("chaaallengee"), 1)
console.log(repeatAdjacent("wwwwaaaarrioooorrrrr"), 2)
console.log(repeatAdjacent("gztxxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmmitttttttlllllhkppppp"), 2)

// best

/* 
function repeatAdjacent(s) {
  return (s.match(/((.)\2+(?!\2)){2,}/g)||[]).length
}
*/