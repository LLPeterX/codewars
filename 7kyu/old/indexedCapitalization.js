/* 
7kyu Indexed capitalization
https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript

Дана строка.
Привести все символы, заданные в массиве индексов, в врехний регистр
*/

function capitalize(s,arr){
  arr.forEach(i => {
    s = s.slice(0,i) + (s[i] ? s[i].toUpperCase(): "") + s.slice(i+1);

  });
  return s;
}

console.log(capitalize("abcdef",[1,2,5]),'aBCdeF');
console.log(capitalize("abcdef",[1,2,5,100]),'aBCdeF');
console.log(capitalize("codewars",[1,3,5,50]),'cOdEwArs');
console.log(capitalize("abracadabra",[2,6,9,10]),'abRacaDabRA');
console.log(capitalize("codewarriors",[5]),'codewArriors');
console.log(capitalize("indexinglessons",[0]),'Indexinglessons');

//best
/* 
function capitalize(s,arr){
  return [...s].map((x,i)=>arr.includes(i)?x.toUpperCase():x).join('')
};
*/

/* 
function capitalize(s,arr){
  return arr.reduce((a,b) => {
    if (a[b]) {
      a[b] = a[b].toUpperCase();
    }
    return a;
  }, [...s]).join('');
}
*/