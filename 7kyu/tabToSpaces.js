/* 
7kyu - Tabs to spaces
https://www.codewars.com/kata/5779474882d7d0a10f000005/train/javascript
*/

function tabToSpaces(text) {
  return text.split("\n").map(line => {
    let k;
    while ((k = line.indexOf("\t")) >= 0) {
      line = line.slice(0, k) + ' '.repeat(4 - k % 4) + line.slice(k + 1);
    }
    return line;
  }).join("\n");
}

// best

/* 
function tabToSpaces(s) {
  return s.replace(/[^\t\n]*\t/g,m=>m.slice(0,-1)+' '.repeat(4-(m.length-1)%4))
}

*/

/* 
const tabToSpaces = s => {
  while (s.indexOf('\t') > -1) {
    s = s
      .split`\n`
      .map(e => e.replace(/\t/, ' '.repeat(4 - (e.indexOf('\t') % 4))))
      .join`\n`;
  }
  return s;
}
*/