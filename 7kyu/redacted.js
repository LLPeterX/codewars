/* 
7kyu - Redacted!
https://www.codewars.com/kata/5b662d286d0db722bd000013/train/javascript

Даны 2 документа.
Один цезурирован символами 'X', второй - оригинал
Нужно определить - это одни и те же документы?
*/

// Вариант с regExp не получается

/* function redacted(doc1, doc2) {
  let reStr = doc1.replace(/X+/g, (match) => `(\\b.{${match.length}}\\b)`);
  //let reStr = doc1.replace(/X+/g, (match) => `(\\b.{${match.length}}\\b)`);
  //console.log(reStr);
  return new RegExp(reStr).test(doc2);
}
 */

function redacted(doc1, doc2) {
  if (doc1.length != doc2.length) {
    return false;
  }
  for (let i = 0; i < doc1.length; i++) {
    if (!(doc1[i] === doc2[i] || (doc1[i] === 'X' && doc2[i] != '\n'))) {
      return false;
    }
  }
  return true;

}

var doc1 = "TOP SECRET:\nThe missile launch code for Sunday XXXXXXXXXX is:\nXXXXXXXXXXXXXXXXX";
var doc2 = "TOP SECRET:\nThe missile launch code for Sunday 5th August is:\n7-ZERO-8X-ALPHA-1";
console.log(redacted(doc1, doc2)); // true - OK
doc1 = "The name of the mole is Professor XXXXX";
doc2 = "The name of the mole is Professor Dinglemouse";
console.log(redacted(doc1, doc2)); // false - OK 
var doc1 = "XXXXXXXX XXXXXXX XXXXXXXXXXXXXXXXXXX\nXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXX XXXXXXXXXXXXX XXXXX";
var doc2 = "Area-51. Medical Report. 23/Oct/1969\nE.T. subject 4 was given an asprin after reporting sick for duty today";
console.log(redacted(doc1, doc2)); // true (!!!)
var doc1 = "This is a XXXX. Will you pass it?";
var doc2 = "This is a test. Will you fail it?";
console.log(redacted(doc1, doc2)); // false ("pass"/"fail")
var doc1 = "Line1\nXXXXX";
var doc2 = "Line1\nLine2";
console.log(redacted(doc1, doc2)); // false


/*
let re =   'The name of the mole is Professor (\\b.{5}\\b)';
let str =  "The name of the mole is Professor Dinglemouse";
let str2 = "The name of the mole is Professor Dingl";
console.log(new RegExp(re).test(str)); // true, а надо false
console.log(new RegExp(re).test(str2)); // true, а надо false
 */

//best
/*
redacted=(a,b)=>a.split``.every((e,i)=>e==b[i]||e=='X'&&b[i]!='\n')&&a.length==b.length
*/

/*
const redacted = (doc1, doc2) =>
   doc1.length == doc2.length &&
   [...doc2].filter((e,i)=> e=='\n' ? doc1[i] == e : e == doc1[i] || doc1[i] =='X').length == doc1.length;
*/