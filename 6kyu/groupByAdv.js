/* 
6kyu - GroupBy Advanced
https://www.codewars.com/kata/652e9d603a9be5122adbfdbf

The Map.groupBy static method just groups the elements by keys.

But we need to go deeper :-) JavaScript's big brother Java has similar method.

It implement a cascaded "group by" operation on input elements of type T, 
grouping elements according to a classification function, 
and then performing a reduction operation on the values 
associated with a given key using the specified downstream callback and initial value.

Your task is to implement the groupBy function.
*/

function groupBy(array,
  classifier,
  downstream,
  accumulatorSupplier) {

  const map = new Map();
  for (let e of array) {
    let key = classifier(e);
    if (map.has(key)) {
      map.set(key, [...map.get(key), e]);
    } else {
      map.set(key, [e]);
    }
  }
  for (let [key, mapValue] of map.entries()) {
    map.set(key, mapValue.reduce((acc, e) => downstream(acc, e), accumulatorSupplier()));
  }
  return map;
}

const employees = [
  { name: "James", income: 1000, profession: "developer", age: 23, },
  { name: "Robert", income: 1100, profession: "qa", age: 34, },
  { name: "John", income: 1200, profession: "designer", age: 32, },
  { name: "Mary", income: 1300, profession: "designer", age: 22, },
  { name: "Patricia", income: 1400, profession: "qa", age: 23, },
  { name: "Jennifer", income: 1500, profession: "developer", age: 45, },
  { name: "Max", income: 1600, profession: "developer", age: 27, },
];

const profession2totalIncome = groupBy(
  employees,
  employee => employee.profession, // group by profession
  (acc, employee) => acc + employee.income, // sum up incomes
  () => 0, // provide an initial value for map's value
);
console.log(profession2totalIncome);

const profession2names = groupBy(
  employees,
  employee => employee.profession,
  (acc, employee) => [...acc, employee.name],
  () => [],
);

console.log(profession2names);

// best

/* 
function groupBy(
  array,
  classifier,
  downstream,
  accumulatorSupplier,
) {
  return array.reduce((accMap, item) => {
    const key = classifier(item);

    if (!accMap.has(key)) {
      accMap.set(key, accumulatorSupplier())
    }

    accMap.set(key, downstream(accMap.get(key), item));

    return accMap;
  }, new Map());
}
*/