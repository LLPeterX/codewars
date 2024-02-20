/* 
7kyu - Well of Ideas - Harder Version
https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/train/javascript
*/

function well(x) {
  let goods = (JSON.stringify(x).match(/good/gi) || []).length;
  return goods > 2 ? 'I smell a series!' : goods > 0 ? 'Publish!' : 'Fail!';
}

