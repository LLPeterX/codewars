/* 
https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript

Продавец классифицирует книги.
1) Код, состоящий из кода категории (A-Z) + символы
2) пробел + число количество этих книг.
Пример: L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]

Дан список L и перечень категорий М.
Задача: вернуть массив количества книг указанных категорий: (A : 20) - (B : 114) - (C : 50) - (W : 0)

*/

function stockList(listOfArt, listOfCat){
  if(listOfArt=="" || listOfCat=="") return "";
  return listOfCat.map(cat => {
    let count = listOfArt.reduce((sum,v)=> {
       let [code, amount] = v.split(' ');
       return code[0] === cat[0] ? sum + (+amount) : sum;
    },0);
    return `(${cat} : ${count})`;
  }).join(' - ');
}

console.log(stockList(["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"]));

// пиздец
/* 
stockList=(a,b,c=a.map(a=>a.split` `))=>a.length?b.map(i=>[i,c.reduce((a,[b,c])=>a+(b[0]==i?+c:0),0)]).map(([a,b])=>`(${a} : ${b})`).join` - `:''
*/