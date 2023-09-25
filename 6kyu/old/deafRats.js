/* 
6kyu - The Deaf Rats of Hamelin
https://www.codewars.com/kata/598106cb34e205e074000031/train/javascript

Гамельн играет музыку, чтобы вывести крыс. Но некоторые крысы глухие и идут не в ту сторону.
Сколько глухих крыс?
*/

// первый рабочий вариант. Жопой чую - можно решить короче.
function deafs(str, id) {
  let count = 0;
  for (let i = 0; i < str.length; i += 2) {
    if (str.slice(i, i + 2) === id)   count++;
  }
  return count;
}


function countDeafRats(town) {
  let [left, right] = town.replace(/\s/g, '').split('P');
  return deafs(left, 'O~') + deafs(right, '~O');
}



console.log(countDeafRats("~O~O~O~O P"), 0);
console.log(countDeafRats("P O~ O~ ~O O~"), 1);
console.log(countDeafRats("~O~O~O~OP~O~OO~"), 2);
//                                  ____ = 2 
//console.log(countDeafRats("O~~OO~~OO~~OO~P~OO~~OO~~OO~~O"), 8);
//                         __  __  __  __ __  __  __  __  => 8

// best
/* 
var countDeafRats = function(town) {
  // Your code here
  if(town != null){
    [left,right]=town.split('P');
        var a=left+right.split('').reverse().join('');
        var b=(a.match(/O~|~O/gi)||[]).filter(v=>v=='O~').length;
         return b;
  }
  return 0;
}
*/

/* 
var countDeafRats = function(town) {
  return [...town.replace(/ +/g,'')].reduce((a,c,i) => a+(i%2==0 && c=='O'), 0);
}
*/

/* 
var countDeafRats = function(town) {
  const [a,b] = town.split('P')
  const l = (a.match(/(?<=^|\s|O)(O~)+/g)||[]).join('').length/2
  const r = (b.match(/(?<=^|\s|~)(~O)+/g)||[]).join('').length/2
  return l+r
}
*/