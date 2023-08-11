/* 
7kyu - Next Element Generator
https://www.codewars.com/kata/61fab7a6a0e59f000ef08feb
*/

function* nextElementGenerator(array) {
  let i = 0;
  while (true) {
    yield array[(i++) % array.length];
  }
}

const generator = nextElementGenerator([1, 2, 3]);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// best
/* 
function* nextElementGenerator(array) {
  while (true) {
    yield* array;
  }
}
*/