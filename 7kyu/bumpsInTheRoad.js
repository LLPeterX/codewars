/* 
7kyu Bumps in the Road
https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript

Дана строка. Если в ней "n" больше 15, то вернуть "Car Dead", иначе - "Woohoo!"

*/

function bump(x){
  return x.split('').filter(r => r==='n').length > 15 ? "Car Dead" : "Woohoo!";
  //return x.match(/n/g).length > 15 ? "Car Dead" : "Woohoo!";
}


console.log(bump("n"), "Woohoo!");
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
console.log(bump("______n___n_"), "Woohoo!");