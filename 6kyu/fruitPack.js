/* 
6kyu - Tim's Fruit Shop Challenge
https://www.codewars.com/kata/652643925c042100247fffc6/train/javascript

Tim runs a fruit shop, and he has a unique way of processing orders. 
Customers send orders in a specific format: 
they specify the number of fruit units they want, 
followed by a lowercase letter (a-z) representing the fruit itself. 
For example, '30a4b' means 30 apples and 4 bananas.

Tim's task is to organize these orders into packages. Here's how he does it:

* Every 10 units of a fruit go into a box, represented by {a}.
* Every 5 boxes are stacked into a pallet, represented by [a].
* Any remaining units are put into a bag, enclosed by ().

Then he prepares every order in a 3 tier shelf (list) 
with the pallets on the lower tier, 
the boxes on medium tier and the bags on the upper tier. 
the items will be pushed to the right and the empy space filled with '-'

Input
A list containing all the orders for the day. 
It will be a list of strings. 
Each order(string) containing maximun one repetition of each fruit 
(letter from a to z) preceded by the corresponding amount. 
The list will contain at least one amount item combination

output
A list containing a list for each shelf containing a list for each tier
*/

function fruitPack(orders) {

  const pack = (count, fruit, brackets) => count < 1 ? "" : `${brackets[0]}${fruit}${brackets[1]}`.repeat(count);

  const result = [];
  for (let order of orders) {
    let shelf = ["", "", ""];
    let orderParts = order.match(/(\d+\D+)/ig);
    for (let part of orderParts) {
      let [, count, fruit] = part.match(/(\d+)(\D+)/);
      count = parseInt(count);
      let c50 = Math.floor(count / 50);
      let c10 = Math.floor((count - c50 * 50) / 10);
      let c1 = count - c50 * 50 - c10 * 10;
      if (c50 > 0) shelf[2] += pack(c50, fruit, '[]');
      if (c10 > 0) shelf[1] += pack(c10, fruit, '{}');
      if (c1 > 0) shelf[0] += `(${fruit.repeat(c1)})`;
    }
    let maxWidth = Math.max(shelf[0].length, shelf[1].length, shelf[2].length);
    result.push(shelf.map(row => row.padStart(maxWidth, '-')));
  }
  return result;
}

// console.log(fruitPack(["63a21b"]), '\n=>\n', [
//   [
//     '-(aaa)(b)',
//     '{a}{b}{b}',
//     '------[a]'
//   ]
// ]);


// console.log(fruitPack(['10a']), [
//   [
//     '---',
//     '{a}',
//     '---'
//   ]
// ]);

console.log(fruitPack(['10a3b', '64j1k92i']), [
  [
    '(bbb)',
    '--{a}',
    '-----'
  ],
  [
    '--(jjjj)(k)(ii)',
    '{j}{i}{i}{i}{i}',
    '---------[j][i]'
  ]
]);

