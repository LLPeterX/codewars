/* 
6kyu - Proof Read
https://www.codewars.com/kata/583710f6b468c07ba1000017/train/javascript

You've just finished writing the last chapter for your novel 
when a virus suddenly infects your document. 
It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters. 
Write a function which will:

a) remove the spelling errors in 'ei' words. 
  (Example of 'ei' words: their, caffeine, deceive, weight)

b) only capitalise the first letter of each sentence. 
  Make sure the rest of the sentence is in lower case.

Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.


*/

function proofread(str) {
  const sentences = str.split(/\.\s/);
  return sentences.map((s, i) => {
    //console.log(` sent ${i} = ${s}`);
    return s.split(' ').map((w, j) => {
      if (w) {
        let newWord = j === 0 ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w.toLowerCase();
        newWord = newWord.replace(/ie/ig, 'ei');
        return newWord;
      } else {
        return "";
      }
    }).join(' ');
  }).join('. ');
}

console.log(proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT."));
//console.log(proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT."), "Their deceit was inconceivable. She seized the moment.");
console.log(proofread("HIs nieghBOur wAs oVerwieGht."), "His neighbour was overweight.");
console.log(proofread("SHe rEcieveD a pIegNor."), "She received a peignor.");

// best

/* 
function proofread(str) { 
  return str.toLowerCase()
    .replace(/ie/g, "ei")
    .replace(/(^|\. )(.)/g, (_, a, b) => a + b.toUpperCase())
}

*/

/* 
function proofread(str) {
    return str.toLowerCase().replace(/ie/gi, 'ei').replace(/(?<=^|\. )[a-z]/g,c=>c.toUpperCase())
}
*/