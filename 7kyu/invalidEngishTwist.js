/* 
https://www.codewars.com/kata/5b04be641839f1a0ab000151
*/
function shiritori(words) {
  if(words.length<1 || words[0]=='') {
    return [];
  }
  let result=[words[0]];
  for(let i=1; i<words.length; i++) {
     if(words[i]!='' && words[i-1].slice(-1) === words[i][0]) {
      result.push(words[i]);
     } else {
       break;
     }
   }
   return result;
}

console.log(shiritori(["dog","goose","elephant","tiger","rhino","orc","cat"]),
["dog","goose","elephant","tiger","rhino","orc","cat"]);
console.log(shiritori(["dog","goose","tiger","cat", "elephant","rhino","orc"]),["dog","goose"]);
console.log(shiritori(["","","","","",""]));
console.log(shiritori(["ab","bc","","de","","",""])); // [ab, bc]
console.log(shiritori([ '', 'tiger', 'rhino', 'orc', 'chinese' ])); // []
console.log(shiritori([ 'english' ])); // []


