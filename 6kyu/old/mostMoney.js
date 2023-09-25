/* 
6kyu - Who has the most money?
https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/javascript

You're going on a trip with some students and it's up to you to keep track 
of how much money each Student has. 

A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}
As you can tell, each Student has some fives, tens, and twenties. 
Your job is to return the name of the student with the most money. 
If every student has the same amount, then return "all".

Notes:

* Each student will have a unique name
* There will always be a clear winner: either one person has the most, or everyone has the same amount
* If there is only one student, then that student has the most money
*/

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}
// ------------------------------------

function mostMoney(students) {
  if (students.length < 2) return students[0].name;
  let maxMoney = sameCount = 0;
  let studentName;
  for (let s of students) {
    let amount = s.fives * 5 + s.tens * 10 + s.twenties * 20;
    if (amount > maxMoney) {
      studentName = s.name;
      maxMoney = amount;
    } else if (amount === maxMoney) {
      sameCount++;
    }
  }
  return sameCount === students.length - 1 ? 'all' : studentName;
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);
const george = new Student("George", 0, 3, 0);

// "What happens if one student has the most money?"
console.log(mostMoney([andy, stephen, eric, david, phil]), "Eric")
console.log(mostMoney([cam, geoff, andy, stephen, eric, david, phil]), "Eric")
console.log(mostMoney([george, geoff]), "all")
console.log(mostMoney([george]), "George")


let st2 = [
  new Student('Steven', 7, 9, 9),
  new Student('James', 8, 5, 9),
  new Student('Kenneth', 10, 0, 9),
  new Student('Andrew', 9, 9, 5),
  new Student('Mary', 10, 1, 0),
  new Student('Barbara', 1, 0, 8),
  new Student('Anthony', 4, 3, 4),
  new Student('Daniel', 2, 8, 1),
  new Student('Thomas', 9, 1, 8),
  new Student('Christopher', 0, 6, 1)
];

console.log(mostMoney(st2), "steven")

// best

/* 
function mostMoney(s) {
  s.sort((x,y)=>sum(y)-sum(x));
  if(s.length>1 && sum(s[0])==sum(s[1]))return 'all';
  return s[0].name;
}

const sum = (s) => (s.fives*5)+(s.tens*10)+(s.twenties*20);
*/