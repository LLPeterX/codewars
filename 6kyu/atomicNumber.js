/* 
6kyu - Ideal electron distribution
https://www.codewars.com/kata/59175441e76dc9f9bc00000f/train/javascript

You are a khmmadkhm scientist and you decided to play with electron distribution among atom's shells. You know that basic idea of electron distribution is that electrons should fill a shell until it's holding the maximum number of electrons.

Rules:

- Maximum number of electrons in a shell is distributed with a rule of 2n^2 (n being position of a shell).
- For example, maximum number of electrons in 3rd shell is 2*3^2 = 18.
- Electrons should fill the lowest level shell first.
- If the electrons have completely filled the lowest level shell, the other unoccupied electrons will fill the higher level shell and so on.

*/

function atomicNumber(num) {
  let distribution = [],
    count = 0,
    n;
  for (let i = 1; count < num; i++) {
    n = 2 * i ** 2;
    count += n;
    distribution.push(n);
  }
  if (count > num) {
    distribution.pop();
    distribution.push(num - count + n);
  }
  return distribution;
}

console.log(atomicNumber(1), [1]);
console.log(atomicNumber(11), [2, 8, 1], 'atomicNumber(11)');
console.log(atomicNumber(22), [2, 8, 12], 'atomicNumber(22)');
console.log(atomicNumber(23), [2, 8, 13], 'atomicNumber(23)');
console.log(atomicNumber(47), [2, 8, 18, 19], 'atomicNumber(47)');
console.log(atomicNumber(50), [2, 8, 18, 22], 'atomicNumber(50)');
console.log(atomicNumber(52), [2, 8, 18, 24], 'atomicNumber(52)');
console.log(atomicNumber(60), [2, 8, 18, 32], 'atomicNumber(60)');
console.log(atomicNumber(61), [2, 8, 18, 32, 1], 'atomicNumber(61)');
