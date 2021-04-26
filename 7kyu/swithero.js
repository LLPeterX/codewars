/* 
7kyu  Switcheroo
https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript

Дана строка, состоящая из 'a', 'b', 'c'. Поменять 'a' на 'b', а 'b' - на 'a'. 'c' не трогать
*/
function switcheroo(char){
  let res="";
  for(let c of char) if(c==='a') res+='b'; else if(c==='b') res+='a'; else res+=c;
  return res;
}

console.log(switcheroo('abc')); // bac
// best
/* 
const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a") 
*/