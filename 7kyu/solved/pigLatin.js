/* 
https://www.codewars.com/kata/57fe90ae08d102a2ba0011e6/train/javascript
Дана фраза. Каждое слово:
- переместить первую букву в конец
- добавить "ay"
 */

function pigLatin(phrase){

 return phrase.split(' ').map(word => word.toLowerCase().slice(1)+word.toLowerCase()[0]+"ay").join(' ');
  
}

console.log(pigLatin('The cat ran away with the spoon'));

//best

/* 

const pigLatin = s => s.split` `.map(e => e.slice(1) + e[0].toLowerCase() + 'ay').join` `;

let pigLatin = phrase => phrase.replace(/(\S)(\S*)/g, '$2$1ay').toLowerCase();

function pigLatin(s){
  return s.toLowerCase().replace(/\w+/g,m=>m.slice(1)+m[0]+'ay')  
}

*/