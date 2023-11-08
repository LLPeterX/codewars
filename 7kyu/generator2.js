/* 
7kyu - Multiplication - Generators #2
https://www.codewars.com/kata/5637ead70013386e30000027/train/javascript

Your generator must take one parameter `a` then everytime 
the generator is called you must return a string 
in the format of: `'a x b = c'` where c is the answer. 
Also, the value of `b`, which starts at 1, must increment by 1 each time!
*/

function* generator(a) {
  for (let b = 1; ; b++) {
    yield `${a} x ${b} = ${a * b}`;
  }
}

var gen = generator(1);
console.log(gen.next().value, '1 x 1 = 1', '1 x 1 = 1')
console.log(gen.next().value, '1 x 2 = 2', '1 x 2 = 2')
console.log(gen.next().value, '1 x 3 = 3', '1 x 3 = 3')
console.log(gen.next().value, '1 x 4 = 4', '1 x 4 = 4')
console.log(gen.next().value, '1 x 5 = 5', '1 x 5 = 5')