/* 
7kyu - PRNG: Linear Congruential Generator
https://www.codewars.com/kata/594979a364becbc1ab00003a/train/javascript

The Linear Congruential Generator (LCG) is one of the oldest pseudo random number generator functions.

The algorithm is as follows:

Xn+1=(aXn + c) mod m
where:

- a is the multiplier (we'll be using 2)
- c is the increment (we'll be using 3)
- m is the modulus (we'll be using 10)
- X0 is the seed.

Your task
Define a method random/Random in the class LCG that provides the next random number 
based on a seed. You never return the initial seed value.
*/

class LCG {
  constructor(x) {
    this.a = 2;
    this.c = 3;
    this.m = 10;
    this.x = x;
  }
  random() {
    return this.generate().next().value;
  }

  *generate() {
    this.x = (this.x * this.a + this.c) % 10;
    yield this.x / 10;
  }
}

const lcg = new LCG(5);
console.log(lcg.random(), .3);
console.log(lcg.random(), .9);
console.log(lcg.random(), .1);
console.log(lcg.random(), .5);

// best

/* 
class LCG {
  constructor(x) {
    this.a = 2;
    this.c = 3;
    this.m = 10;
    this.x = x;
  }
  random() {
    const result = (this.a * this.x + this.c) % this.m;
    this.x = result;
    return result / 10;
  }
}
*/