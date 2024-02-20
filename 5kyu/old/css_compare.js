/* 
5kyu - Simple CSS selector comparison
https://www.codewars.com/kata/5379fdfad08fab63c6000a63/train/javascript

Your task is to calculate the weights of two selectors 
and determine which of them will beat the other one.

  compare("body p", "div"); // returns "body p"
  compare(".class", "#id"); // returns "#id"
  compare("div.big", ".small"); // returns "div.big"
  compare(".big", ".small"); // returns ".small" (because it appears later)

- Selector with more #id selectors wins
- If both are same, the winner is selector with more .class selectors
- If both are same, selector with more elements wins
- If all of above values are same, the winner is selector that appear last

*/



/*
// first variant
function getWeight(str) {
  const w = {}, arr = [...str];
  w.idCount = arr.filter(c => c === '#').length;
  w.classCount = arr.filter(c => c === '.').length;
  w.elemsCount = (str.match(/\w+/g) || []).length;
  return w;
}

function compare(a, b) {
  let wa = getWeight(a), wb = getWeight(b);
  console.log(`input: a=${a}, b=${b}`);
  console.log(' wa=', wa);
  console.log(' wb=', wb);
  if (wa.idCount > wb.idCount) return a;
  if (wb.idCount > wa.idCount) return b;
  if (wa.classCount > wb.classCount) return a;
  if (wb.classCount > wa.classCount) return b;
  if (wa.elemsCount > wb.elemsCount) return a;
  if (wb.elemsCount > wa.elemsCount) return b;
  return b;
}
*/
// simplify

const getWeight = (str) => [...str].filter(c => c === '#').length * 100000 + [...str].filter(c => c === '.').length * 100 + (str.match(/\w+/g) || []).length;
function compare(a, b) {
  let wa = getWeight(a), wb = getWeight(b);
  console.log(' wa=', wa);
  console.log(' wb=', wb);

  return wa == wb ? b : wa > wb ? a : b;
}


// console.log(compare("body p", "div"), "body p", "Test case #1 (should return a)");
// console.log(compare(".class", "#id"), "#id", "Test case #2 (should return b)");
// console.log(compare("div.big", ".small"), "div.big", "Test case #3 (should return a)");
// console.log(compare(".big", ".small"), ".small", "Test case #4 (should return b)");

// let a = '#id';
// let b = '.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.c10.c11.c12.c13.c14.c15.c16.c17.c18.c19.c20.c21.c22.c23.c24.c25.c26.c27.c28.c29.c30.c31.c32.c33.c34.c35.c36.c37.c38.c39.c40.c41.c42.c43.c44.c45.c46.c47.c48.c49.c50.c51.c52.c53.c54.c55.c56.c57.c58.c59.c60.c61.c62.c63.c64.c65.c66.c67.c68.c69.c70.c71.c72.c73.c74.c75.c76.c77.c78.c79.c80.c81.c82.c83.c84.c85.c86.c87.c88.c89.c90.c91.c92.c93.c94.c95.c96.c97.c98.c99.c100.c101.c102.c103.c104.c105.c106.c107.c108.c109.c110.c111.c112.c113.c114.c115.c116.c117.c118.c119.c120.c121.c122.c123.c124.c125.c126.c127.c128.c129.c130.c131.c132.c133.c134.c135.c136.c137.c138.c139.c140.c141.c142.c143.c144.c145.c146.c147.c148.c149.c150.c151.c152.c153.c154.c155.c156.c157.c158.c159.c160.c161.c162.c163.c164.c165.c166.c167.c168.c169.c170.c171.c172.c173.c174.c175.c176.c177.c178.c179.c180.c181.c182.c183.c184.c185.c186.c187.c188.c189.c190.c191.c192.c193.c194.c195.c196.c197.c198.c199.c200.c201.c202.c203.c204.c205.c206.c207.c208.c209.c210.c211.c212.c213.c214.c215.c216.c217.c218.c219.c220.c221.c222.c223.c224.c225.c226.c227.c228.c229.c230.c231.c232.c233.c234.c235.c236.c237.c238.c239.c240.c241.c242.c243.c244.c245.c246.c247.c248.c249.c250.c251.c252.c253.c254.c255.c256'
// console.log(compare(a, b));

// best
/* 
function compare(a,b){
  var tokens, exp = /(#\w+)|(\.\w+)|(\w+)/g;
  var i, precedence = [0, 0, 0];
  while (tokens = exp.exec(a)) 
    precedence = precedence.map(function (value, i) { return value + !!tokens[i + 1] });
  while (tokens = exp.exec(b))
    precedence = precedence.map(function (value, i) { return value - !!tokens[i + 1] });
  for (i = 0; i < 3; i++) {
    if (precedence[i] > 0) return a;
    if (precedence[i] < 0) return b;
  } 
  return b;
}
*/

/* 
function compare(a,b){
  function d(h,c){ return c ? (c.match(h) || []).length : d(h,b) - d(h,a)}
  return (d(/#/g) || d(/\./g) || d(/(^| )\w/g)) < 0 ? a : b;
}
*/