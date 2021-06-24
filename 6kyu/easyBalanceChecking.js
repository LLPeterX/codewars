/* 
6kyu - Easy Balance Checking
https://www.codewars.com/kata/59d727d40e8c9dd2dd00009f/train/javascript
*/

function balance(book) {
  const rows = book.split(/\n|\r/g);
  const originalBalance = parseFloat(rows[0]).toFixed(2);
  let currentBalance = +originalBalance, expenses = 0, count = 0;
  const outData = [`Original Balance: ${originalBalance}`];
  rows.slice(1).map(item => {
    let m = item.match(/(\d+) ([A-Za-z]+).*?(\d+\.?\d*).*?/);
    if (m) {
      m[3] = (+m[3]).toFixed(2);
      let sum = +m[3];
      currentBalance -= sum;
      expenses += sum;
      count++;
      console.log(`  item=${item} m3=${m[3]} sum=${sum}`);
      outData.push(m.slice(1, 4).join(' ') + ` Balance ${currentBalance.toFixed(2)}`);
    }

  });
  outData.push(`Total expense  ${expenses.toFixed(2)}`);
  outData.push(`Average expense  ${(expenses / count).toFixed(2)}`);
  return outData.join('\r\n');
}

var b1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`
var b1sol = `Original Balance: 1000.00\r
125 Market 125.45 Balance 874.55\r
126 Hardware 34.95 Balance 839.60\r
127 Video 7.45 Balance 832.15\r
128 Book 14.32 Balance 817.83\r
129 Gasoline 16.10 Balance 801.73\r
Total expense  198.27\r
Average expense  39.65`

var b2 = `1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`

var b2sol = `Original Balance: 1233.00\r
125 Hardware 24.80 Balance 1208.20\r
123 Flowers 93.50 Balance 1114.70\r
127 Meat 120.90 Balance 993.80\r
120 Picture 34.00 Balance 959.80\r
124 Gasoline 11.00 Balance 948.80\r
123 Photos 71.40 Balance 877.40\r
122 Picture 93.50 Balance 783.90\r
132 Tyres 19.00 Balance 764.90\r
129 Stamps 13.60 Balance 751.30\r
129 Fruits 17.60 Balance 733.70\r
129 Market 128.00 Balance 605.70\r
121 Gasoline 13.60 Balance 592.10\r
Total expense  640.90\r
Average expense  53.41`

console.log(balance(b2));

//best
/*
у меня зашибись, но...

const balance = book => {
  book = book.replace(/[^a-z\d.\s]/gi, ``).split(`\n`).filter(Boolean);
  let original = +book.shift();
  let total = 0;
  book = book.map(val => `${val} Balance ${original - (total += +val.match(/\S+$/))}`.replace(/[\d.]+/g, (val, idx) => idx ? (+val).toFixed(2) : val));
  book.unshift(`Original Balance: ${original.toFixed(2)}`);
  book.push(`Total expense  ${total.toFixed(2)}`);
  book.push(`Average expense  ${(total / (book.length - 2)).toFixed(2)}`);
  return book.join(`\r\n`);
};
*/