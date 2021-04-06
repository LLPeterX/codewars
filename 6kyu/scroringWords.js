/* 
6kyu Highest Scoring Word
https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

Дана строка с маленикими буквами.
Найти слово с наибольшей оценкой. 
Оценка = сумма положений букв в алфавите (a=1, b=2 и т.п.)
Если 2 слова с одинаковой оценкой, вернуть первое в строке
*/

function high(x){
  let scores = []; // array of [word, score, index]
  x.split(' ')
   .forEach((w,i) => {
     if(!scores.includes(item => item[0] === w)) {
       scores.push([w, w.split('').reduce((s,c) => s+c.charCodeAt(0)-96,0), i]);
     }
  });
  return scores.sort((a,b) => {
    if(a[1] === b[1]) {
      return a[2]-b[2];
    } else {
      return b[1]-a[1];
    }
  })[0][0];
  //return scores[0][0];
}

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano'); 
console.log(high('take me to semynak'), 'semynak'); 
console.log(high('aa b'), 'aa'); 


// best
/* 
function high(x){
  //transform the input string into array & define a string of alphabetical latin characters
  var arr = x.split(' ');
  var str = 'abcdefghijklmnopqrstuvwxyz';
  //Iterate through the array with input words to find the one with the greatest sum
  var newArr = arr.map(function(word){
    var sum = 0;
    for (var i = 0; i < word.length; i++) {
      sum += str.indexOf(word[i]);
    }
    return sum;
  });
  //Return the word with the greatest sum
  return arr[newArr.indexOf(Math.max(...newArr))];
}
*/

/* 
function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
*/