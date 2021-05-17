/* 
7kyu - Find the vowels
*/

function vowelIndices(word){
  let res=[];
  word.split``.forEach((e,i) => {
    if('aeiouy'.indexOf(e.toLowerCase())>=0) {
      res.push(i+1);
    }
  });
  return res;
}

console.log(vowelIndices("mmm"), []);
console.log(vowelIndices("apple"), [1,5]);
console.log(vowelIndices("super"), [2,4]);
console.log(vowelIndices("orange"), [1,3,6]);
console.log(vowelIndices("supercalifragilisticexpialidocious"), [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);

//best
/* 
function vowelIndices(word,a=[]){
  return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a)
}
*/

/* 
const vowelIndices = (word) => [...word].map((el, i) => el.match(/[aeiouy]/ig) ? i+1 : '').filter(el => el)
*/