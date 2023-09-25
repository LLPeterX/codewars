/* 
6kyu - The Mysterious Wall
https://www.codewars.com/kata/5939b753942a2700860000df/train/javascript
*/

function buildAWall(x, y) {
  if (!Number.isInteger(x) || !Number.isInteger(y) || x < 1 || y < 1) return null;
  if (x * y > 10000) return "Naah, too much...here's my resignation.";
  let b2 = '■■', b1 = '■', m = '|';
  let res = [];
  for (let row = 0; row < x; row++) {
    if (row % 2) {
      res.push([b1, ...Array(y - 1).fill(b2), b1]);
    } else {
      res.push(Array(y).fill(b2));
    }
  }
  return JSON.stringify(res.reverse().map(r => r.join(m)).join("\n"));
}

//console.log(buildAWall(4, 5), '\n=>\n', JSON.stringify("■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■"));
console.log(buildAWall(10, 7), "■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■");

// best

/* 
function buildAWall(x, y) {

  if ([x, y].some(z => z !== +z || z < 1 || z % 1)) 
    return null;
  
  if (x * y > 10000) 
    return "Naah, too much...here's my resignation.";
  
  const a = "\n■" + '|■■'.repeat(y - 1) + '|■'
  ,     b = "\n■■" + '|■■'.repeat(y - 1)
  ,     c = (a + b).repeat(x / 2 | 0);
  
  return (x % 2 ? b + c : c).slice(1);
  
}
*/

/* 
function buildAWall(x = 0, y = 0) {
  if (x !== ~~x || y !== ~~y || x <= 0 || y <= 0) return null;
  if (x * y > 10000) return "Naah, too much...here's my resignation.";
  
  let full = [...Array(y)].map(e => "■■").join`|`;
  let half = full.slice(1) + "|■";
  
  return [...Array(x)].map((_,i) => i % 2 ? half : full).reverse().join`\n`;
}
*/