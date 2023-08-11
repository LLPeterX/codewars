/* 
7kyu Parts of a list
https://www.codewars.com/kata/56f3a1e899b386da78000732

Разбить массив на пары строк
*/

function partlist(arr) {
  let res=[];
  for(let i=1; i<arr.length; i++) {
    res.push( [arr.slice(0,i).join(' '), arr.slice(i).join(' ')]);
  }
  return res;
}



console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"])); // [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 

// best
/* 
var partlist=a=>a.map((v,i)=>[a.slice(0,i).join(' '),a.slice(i).join(' ')]).slice(1)
*/