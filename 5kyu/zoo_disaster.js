/* 
5kyu - The Hunger Games - Zoo Disaster!
https://www.codewars.com/kata/5902bc7aba39542b4a00003d

antelope eats grass
big-fish eats little-fish
bug eats leaves
bear eats big-fish
bear eats bug
bear eats chicken
bear eats cow
bear eats leaves
bear eats sheep
chicken eats bug
cow eats grass
fox eats chicken
fox eats sheep
giraffe eats leaves
lion eats antelope
lion eats cow
panda eats leaves
sheep eats grass

Дан список животных.
Определить, кто кого ест

Выход: массив строк:
0 - исходная строка
1 - разделенная запятыми строка того, как выглядит зоопарк, когда все едят.
2... - строки в виде "A eat B" и т.п.

* Животные могут есть только то, что находится рядом с ними
* Животные всегда едят НАЛЕВО, прежде чем есть СПРАВА.
* Любые другие вещи, которые не перечислены выше) ничего не едят и не являются едой.
*/

const diet = [
  ['antelope', 'grass'],
  ['big-fish', 'little-fish'],
  ['bug', 'leaves'],
  ['bear', 'big-fish'],
  ['bear', 'bug'],
  ['bear', 'chicken'],
  ['bear', 'cow'],
  ['bear', 'leaves'],
  ['bear', 'sheep'],
  ['chicken', 'bug'],
  ['cow', 'grass'],
  ['fox', 'chicken'],
  ['fox', 'sheep'],
  ['giraffe', 'leaves'],
  ['lion', 'antelope'],
  ['lion', 'cow'],
  ['panda', 'leaves'],
  ['sheep', 'grass'],


];

function whoEatsWho(zoo) {
  function canEat(eater, neighbour) {
    return diet.some(([a, f]) => a === eater && f === neighbour);
  }
  let animals = zoo.split(','), massacre = [], eaten;
  do {
    eaten = false;
    for (let i = 0; i < animals.length; i++) {
      let eater = animals[i];
      let leftFellow = animals[i - 1],
        rightFellow = animals[i + 1];
      if (canEat(eater, leftFellow)) {
        massacre.push(`${eater} eats ${leftFellow}`);
        animals.splice(i - 1, 1);
        eaten = true;
        break
      } else if (canEat(eater, rightFellow)) {
        massacre.push(`${eater} eats ${rightFellow}`);
        animals.splice(i + 1, 1);
        eaten = true;
        break;
      }
    }
  } while (eaten);
  return [zoo, ...massacre, animals.join(',')];
}

var input = "fox,bug,chicken,grass,sheep";
var expected = [
  "fox,bug,chicken,grass,sheep",
  "chicken eats bug",
  "fox eats chicken",
  "sheep eats grass",
  "fox eats sheep",
  "fox"
];
console.log(whoEatsWho(input), expected);


//best

/* 
var whoEatsWho = function(zoo) {
  let answer = [zoo];
  let animals = {
    antelope: ['grass'],
    'big-fish': ['little-fish'],
    'little-fish': [],
    bug: ['leaves'],
    bear: ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
    chicken: ['bug'],
    cow: ['grass'],
    fox: ['chicken', 'sheep'],
    giraffe: ['leaves'],
    lion: ['antelope', 'cow'],
    panda: ['leaves'],
    sheep: ['grass'],
    grass: [],
    leaves: [],
  };
  zoo = zoo.split(',');
  for(var i = 0; i < zoo.length - 1; i++) {
    let firstAnimal = zoo[i];
    let secondAnimal = zoo[i+1];
    if(Object.keys(animals).indexOf(firstAnimal) !== -1 && Object.keys(animals).indexOf(secondAnimal) !== -1) {
      if(animals[firstAnimal].indexOf(secondAnimal) !== -1) {
        answer.push(`${zoo[i]} eats ${zoo[i+1]}`);
        zoo.splice(i+1, 1);
        i = -1;
      } else if(animals[secondAnimal].indexOf(firstAnimal) !== -1) {
        answer.push(`${zoo[i+1]} eats ${zoo[i]}`);
        zoo.splice(i, 1);
        i = -1;
      }
    }
  }
  answer.push(zoo.toString());
  return answer;
}
*/