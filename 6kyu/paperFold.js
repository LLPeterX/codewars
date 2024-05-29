/* 
6kyu - The PaperFold sequence
https://www.codewars.com/kata/5d26721d48430e0016914faa/train/javascript
*/

let fold = [];
function createPaperFold() {
  let result = [1];
  while (result.length < 1_000_000) {
    let prefix = [...result];
    let suffix = prefix.map((n) => 1 - n).reverse();
    result = [...prefix, 1, ...suffix];
  }
  return result;
}

function* paperFold() {
  if (fold.length === 0) fold = createPaperFold();
  for (let i = 0; ; i++) yield fold[i];
}

// ----- tests ----
const take = (n) =>
  function* (gen) {
    while (n-- > 0) yield gen.next().value;
  };
console.log(Array.from(take(20)(paperFold())), '=>', [1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1]);

// best

/* 
function* paperFold() {
  yield* [1,1,0,1];
  let gen = paperFold(); gen.next(); gen.next();
  while ( true ) yield* [ 1, gen.next().value, 0, gen.next().value ];
}
*/

/* 
// darkmain
function* paperFold() {
  let i = 1
  while (true) {
    yield ~~((i & (i & -i) << 1) === 0)
    i += 1
  }
}
*/

/* 
// BigPugLabs
function* paperFold() {
  let n = 1
  while (true) {
    let m = n++
    while (m%2 == 0) m /=2
    yield [null,1,null,0][m%4]
  }
}
*/
