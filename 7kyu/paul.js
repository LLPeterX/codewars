/* 
7kyu - Paul's Misery
https://www.codewars.com/kata/57ee31c5e77282c24d000024/train/javascript

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

-kata = 5
-Petes kata = 10
-life = 0
-eating = 1
*/

function paul(x) {
  const points = {
    kata: 5,
    "Petes kata": 10,
    life: 0,
    eating: 1
  };
  let sum = x.reduce((sum, v) => sum + points[v], 0);
  if (sum < 40) return 'Super happy!';
  else if (sum < 70) return 'Happy!';
  else if (sum < 100) return 'Sad!';
  return 'Miserable!';
}

console.log(paul(['life', 'eating', 'life']), 'Super happy!');
console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']), 'Super happy!');
console.log(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']), 'Happy!');

// cool

/* 
const paul = x =>
  (val => val < 40 ? `Super happy!` : val < 70 ? `Happy!` : val < 100 ? `Sad!` : `Miserable!`)
  (x.reduce((pre, val) => pre + {kata: 5, 'Petes kata': 10, life: 0, eating: 1}[val], 0));
*/