/* 
6kyu - Character Counter and Bars Graph
https://www.codewars.com/kata/5826773bfad36332bf0002f9/train/javascript
*/

function countCharsBarGraph(text, maxw) {
  let countObj = [...text.toLowerCase()]
    .filter(c => /[a-z]/i.test(c))
    .reduce((o, c) => { o[c] = (o[c] || 0) + 1; return o; }, {});
  let maxCount = Math.max(...Object.values(countObj));
  return Object.entries(countObj)
    .sort((a, b) => b[1] === a[1] ? a[0].localeCompare(b[0]) : b[1] - a[1])
    .map(([char, count]) => `${char}:${'#'.repeat(count * maxw / maxCount)}`).join("\n");
}

