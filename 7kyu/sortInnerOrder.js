/* 
7kyu - Srot the inner ctonnet in dsnnieedcg oredr
https://www.codewars.com/kata/5898b4b71d298e51b600014b/train/javascript

#Srot the inner ctnnoet in dsnnieedcg oredr

You have to sort the inner content of every word of a string in descending order.
The inner content is the content of a word without first and the last char.
*/

function sortTheInnerContent(words) {
  return words
    .split(' ')
    .map(word => {
      //let inner = word.length>2 ? [...word.slice(1, -1)].sort((a, b) => b.localeCompare(a)).join`` : "";
      //return word[0] + inner + (word.length>1?word.slice(-1):"");
      return word[0] + (word.length > 2 ? [...word.slice(1, -1)].sort((a, b) => b.localeCompare(a)).join`` : "") +
        (word.length > 1 ? word.slice(-1) : "")
    })
    .join(' ');
}

console.log(sortTheInnerContent("sort the inner content in descending order"), "srot the inner ctonnet in dsnnieedcg oredr");
console.log(sortTheInnerContent("wait for me"), "wiat for me");
console.log(sortTheInnerContent("this kata is ww easy"), "tihs ktaa is esay");

// best

/* 
function sortTheInnerContent(words){
  return words.replace(/\B\w+(?=\w)/g, function(match){
    return match.split('').sort().reverse().join('');
  });
}
*/