/* 
7kyu - Find the calculation type
https://www.codewars.com/kata/5aca48db188ab3558e0030fa/train/javascript
*/

const calcType = (a, b, res) => Object.entries({ "addition": (a, b) => a + b, "subtraction": (a, b) => a - b, "multiplication": (a, b) => a * b, "division": (a, b) => a / b }).find(t => t[1](a, b) === res)[0];
//const types = { "addition": (a, b) => a + b, "subtraction": (a, b) => a - b, "multiplication": (a, b) => a * b, "division": (a, b) => a / b  }
//return Object.entries({ "addition": (a, b) => a + b, "subtraction": (a, b) => a - b, "multiplication": (a, b) => a * b, "division": (a, b) => a / b }).find(t => t[1](a, b) === res)[0];
//}

console.log(calcType(1, 2, 3), 'addition');
console.log(calcType(9, 5, 1.8), 'division');

//best
/*
const calcType = (a, b, res) =>
  ({[a + b]: `addition`,
    [a - b]: `subtraction`,
    [a * b]: `multiplication`,
    [a / b]: `division`
  })[res];
*/