/* 
7kyu - sPoNgEbOb MeMe
https://www.codewars.com/kata/5982619d2671576e90000017/train/javascript

You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

Examples:

spongeMeme("stop Making spongebob Memes!") // => 'StOp mAkInG SpOnGeBoB MeMeS!'
spongeMeme("colored teens cant Be successful in tech") // =>'CoLoReD TeEnS CaNt bE SuCcEsSfU
*/

function spongeMeme(sentence) {
  let res = sentence[0].toUpperCase(), up = true;
  for (let i = 1; i < sentence.length; i++) {
    if (sentence[i - 1] !== ' ' && sentence[i] !== ' ') {
      up = !up;
    }
    res += up ? sentence[i].toUpperCase() : sentence[i].toLowerCase();
  }
  return res;
}

console.log(spongeMeme("stop Making spongebob Memes!"), 'StOp mAkInG SpOnGeBoB MeMeS!')
console.log(spongeMeme("colored teens cant Be successful in tech"), 'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh')

//best

/* 
function spongeMeme(sentence) {
return sentence.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
} 
*/