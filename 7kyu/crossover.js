/* 
7kyu - Genetic Algorithm Series - #3 Crossover
https://www.codewars.com/kata/567d71b93f8a50f461000019/train/javascript


*/

const crossover = (chromosome1, chromosome2, index) => {
  let a = chromosome1.slice(0, index), b = chromosome2.slice(0, index);
  for (let i = index; i < chromosome1.length; i++) {
    a += chromosome2[i];
    b += chromosome1[i];
  }
  return [a, b];

};
console.log(crossover('110', '001', 2));
console.log(crossover('110', '001', 2)[0] === '111' && crossover('110', '001', 2)[1] === '000');
console.log(crossover('111000', '000110', 3)[0] === '111110' && crossover('111000', '000110', 3)[1] === '000000');

// best
/* 
const crossover = (chromosome1, chromosome2, index) => {
  return [
    chromosome1.substring(0, index) + chromosome2.substring(index),
    chromosome2.substring(0, index) + chromosome1.substring(index)
  ]
};
*/