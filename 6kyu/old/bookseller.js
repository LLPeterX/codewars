/* 
6kyu - Help the bookseller !
https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript

Продавец классифицирует книги.
1) Код, состоящий из кода категории (A-Z) + символы
2) пробел + число количество этих книг.
Пример: L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]

Дан список L и перечень категорий М.
Задача: вернуть массив количества книг указанных категорий: (A : 20) - (B : 114) - (C : 50) - (W : 0)

*/

function stockList(listOfArt, listOfCat) {
  if (listOfArt.length === 0 || listOfCat.length === 0) return "";
  let counts = listOfCat.reduce((o, v) => { o[v] = 0; return o; }, {});
  counts = listOfArt.reduce((o, item) => {
    let [str, v] = item.split(' ');
    let id = str[0];
    if (o.hasOwnProperty(id)) {
      o[id] += +v;
    }
    return o;
  }, counts);
  return Object.entries(counts).map(e => `(${e[0]} : ${e[1]})`).join(' - ');
}

console.log(stockList(["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"]));
// (A : 20) - (B : 114) - (C : 50) - (W : 0)

// best

/* 
function stockList(listOfArt, listOfCat) {
  if (!listOfArt.length || !listOfCat.length) return ''
  return listOfCat.map(w => {
    const s = listOfArt.reduce((a, b) => a + (b.charAt(0) === w ? +b.split(' ')[1] : 0), 0)
    return `(${w} : ${s})`
  }).join(' - ')
}
*/


/* 
stockList=(a,b,c=a.map(a=>a.split` `))=>a.length?b.map(i=>[i,c.reduce((a,[b,c])=>a+(b[0]==i?+c:0),0)]).map(([a,b])=>`(${a} : ${b})`).join` - `:''
*/