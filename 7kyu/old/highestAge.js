/* 
7kyu - Algorithmic predicament- Bug Fixing #9
https://www.codewars.com/kata/55d3b1f2c1b2f0d3470000a9/train/javascript

Oh no! Timmy's algorithm has gone wrong! Help Timmy fix his algorithm!


Your task is to fix Timmy's algorithm so it returns the group name with the highest total age.

You will receive two groups of `people` objects, 
with two properties `name` and `age`. 
The name property is a string, and the age property is a number.

Your goal is to calculate the total age of all people 
with the same name in both groups and return the name 
of the person with the highest total age. 
If two names have the same total age, return the first alphabetical name.


*/

// original code:
/*
function highestAge(group1, group2) {
  var highestName = { name: '', age: -1 },
    newGroup = [],
    combGroup = group1.concat(group2);

  for (var i = 0; i <= combGroup.length; i++)
    if (newGroup.indexOfProp('name', combGroup[i].name) != -1)
      newGroup.push(combGroup[i])
    else
      newGroup[newGroup.indexOfProp('name', combGroup[i].name)].age = combGroup[i].age;

  newGroup = newGroup.sort((p, c) => p.name > c.name ? -1 : p.name < c.name ? 1 : 0)

  for (var i = 0; i <= newGroup.length; i++) {
    if (newGroup[i].age < highestName.age || newGroup[i].name < highestName.name)
      highestName = newGroup[i];
  }

  return highestName.name;
}

Array.prototype.indexOfProp = function (prop, value) {
  for (var i = 0; i <= this.length; i++) {
    if (this[i][prop] == value)
      return i;
  }
  return 0
}
*/
// shorter variant:
/*
function highestAge(group1, group2) {
  // var highestName = { name: '', age: -1 },
  //   newGroup = {},
  let combGroup = group1.concat(group2);
  let newGroup = combGroup.reduce((o, g) => { o[g.name] = (o[g.name] || 0) + g.age; return o; }, {});
  return Object.entries(newGroup).sort((a, b) => a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1])[0][0];

  // for (var i = 0; i <= combGroup.length; i++)
  //   if (newGroup.indexOfProp('name', combGroup[i].name) != -1)
  //     newGroup.push(combGroup[i])
  //   else
  //     newGroup[newGroup.indexOfProp('name', combGroup[i].name)].age = combGroup[i].age;

  // newGroup = newGroup.sort((p, c) => p.name > c.name ? -1 : p.name < c.name ? 1 : 0)
  // for(let g of combGroup) {

  // }

  // for (var i = 0; i <= newGroup.length; i++) {
  //   if (newGroup[i].age < highestName.age || newGroup[i].name < highestName.name)
  //     highestName = newGroup[i];
  // }

  // return highestName.name;
}
*/

// final:

function highestAge(group1, group2) {
  let comboGroup = [...group1, ...group2].reduce((combo, people) => { combo[people.name] = (combo[people.name] || 0) + people.age; return combo; }, {});
  return Object.entries(comboGroup).sort((a, b) => a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1])[0][0];
}


console.log(highestAge([{ name: 'kay', age: 1 }, { name: 'john', age: 13 }, { name: 'kay', age: 76 }], [{ name: 'john', age: 1 }, { name: 'alice', age: 77 }]), 'alice', 'Return the name of the highest total age');
console.log(highestAge([{ name: 'kay', age: 1 }, { name: 'john', age: 13 }, { name: 'kay', age: 76 }], [{ name: 'john', age: 1 }, { name: 'alice', age: 76 }]), 'kay', 'Return the name of the highest total age');
console.log(highestAge([{ name: 'kay', age: 1 }, { name: 'john', age: 130 }, { name: 'kay', age: 76 }], [{ name: 'john', age: 1 }, { name: 'alice', age: 76 }]), 'john', 'Return the name of the highest total age');

// best

// как, по идее, надо было решить задачу
/* 
function highestAge(group1, group2) {
    var highestName = { name: '', age: -1 },
        newGroup = [],
        combGroup = group1.concat(group2);

    for (var i = 0; i < combGroup.length; i++) {
        let index = newGroup.indexOfProp('name', combGroup[i].name);
        if (index == -1) {
            newGroup.push(combGroup[i]);
        } else {
            newGroup[index].age += combGroup[i].age;
        }
    }

    newGroup.sort((p, c) => p.name.localeCompare(c.name));

    for (var i = 0; i < newGroup.length; i++) {
        if (newGroup[i].age > highestName.age)
            highestName = newGroup[i];
    }

    return highestName.name;
}

Array.prototype.indexOfProp = function (prop, value) {
    for (var i = 0; i < this.length; i++) {
        if (this[i][prop] == value)
            return i;
    }
    return -1;
}
*/