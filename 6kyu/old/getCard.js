/* 
6kyu - Bingo Card
https://www.codewars.com/kata/566d5e2e57d8fae53c00000c/train/javascript

Заполнить таблицу лото 5x5:
- 5 numbers from the B column in the range 1 to 15
- 5 numbers from the I column in the range 16 to 30
- 4 numbers from the N column in the range 31 to 45
- 5 numbers from the G column in the range 46 to 60
- 5 numbers from the O column in the range 61 to 75

Вернуть массив строк в формате bingо:
[ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
The numbers must be in the order of their column: B, I, N, G, O.
Within the columns the order of the numbers is random.

*/


/* function getCard() {
  let result = [];
  ['B', 'I', 'N', 'G', 'O'].forEach((l, i) => {
    let col = [];
    let from = i * 15 + 1;
    let to = (i + 1) * 15;
    while (col.length < 5) {
      let num = from + Math.floor(Math.random() * (to - from));
      if (!col.includes(num)) col.push(num);
    }
    if (l === 'N') col.splice(2, 1);
    result.push(...col.map(c => `${l}${c}`));
  });
  return result;
}
 */

function getCard() {
  return [...'BINGO'].reduce((r, l, i) => {
    let col = [], from = i * 15 + 1, to = (i + 1) * 15;
    while (col.length < 5) {
      let num = from + Math.floor(Math.random() * (to - from));
      if (!col.includes(num)) col.push(num);
    }
    if (l === 'N') col.splice(2, 1);
    r.push(...col.map(c => `${l}${c}`));
    return r;
  }, []);
}

console.log(getCard());

// best
/* 
function getCard() {
  var arr=[];
  for (var i=0; i<5; ++i)
    arr.push('B'+(Math.random()*14+1));
  for (var i=0; i<5; ++i)
    arr.push('I'+(Math.random()*14+16));
  for (var i=0; i<4; ++i)
    arr.push('N'+(Math.random()*14+31));
  for (var i=0; i<5; ++i)
    arr.push('G'+(Math.random()*14+46));
  for (var i=0; i<5; ++i)
    arr.push('O'+(Math.random()*14+61));
  return arr; 
}
*/

/* 
function getCard()
{
  return [...'BINGO'].reduce((a, b, i) => {
    let s = new Set;
    while (s.size < 5) s.add(~~(Math.random() * 15 + 1 + i * 15))
    let nums = [...s]
    return a.concat([...Array(b == 'N' ? 4 : 5)].map(_ => b + nums.pop()))
  }, [])
}
*/