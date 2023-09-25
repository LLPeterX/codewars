/* 
6kyu - Most profit from stock quotes
https://www.codewars.com/kata/597ef546ee48603f7a000057/train/javascript

*/

function getMostProfitFromStockQuotes(quotes) {
  let maxProfit = 0;
  while (quotes.length) {
    let maxValue = Math.max(...quotes);
    let i = quotes.lastIndexOf(maxValue);
    maxProfit = quotes.slice(0, i).reduce((sum, v) => sum += maxValue - v, maxProfit);
    quotes.splice(0, i + 1);
  }
  return maxProfit;
}

console.log(getMostProfitFromStockQuotes([1, 2, 3, 4, 5, 6])); // 15
console.log(getMostProfitFromStockQuotes([6, 5, 4, 3, 2, 1])); // 0
console.log(getMostProfitFromStockQuotes([1, 6, 5, 10, 8, 7])); // 18
console.log(getMostProfitFromStockQuotes([1, 2, 10, 3, 2, 7, 3, 2])); // 26


//best
/*
function getMostProfitFromStockQuotes(quotes) {
  let top=-Infinity;
  return quotes.reduceRight((p,v)=>{
    if(top<v) top=v;
    return p+top-v;
  }, 0);
}
*/

/*
function getMostProfitFromStockQuotes(quotes) {
  let r = 0, m = 0;
  for (let i = quotes.length - 1; i >= 0; i--) {
    r += Math.max(0, m - quotes[i]);
    m = Math.max(m, quotes[i]);
  }
  return r;
}
*/