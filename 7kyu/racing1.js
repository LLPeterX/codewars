/* 
7kyu - Racing 1: Simplified Drag Race
https://www.codewars.com/kata/5a40f5b01f7f70ed7600001e
*/

function dragRace(len, anna, bob) {
  const annaTime = len / anna.speed + anna.reactionTime;
  const bobTime = len / bob.speed + bob.reactionTime;
  return annaTime == bobTime ? "It's a draw" : annaTime < bobTime ? "Anna is the winner" : "Bob is the winner";
}

console.log(dragRace(100, { speed: 20, reactionTime: 1 }, { speed: 30, reactionTime: 3 }), "Anna is the winner");
console.log(dragRace(150, { speed: 20, reactionTime: 1 }, { speed: 30, reactionTime: 3 }), "Bob is the winner");
console.log(dragRace(120, { speed: 20, reactionTime: 1 }, { speed: 30, reactionTime: 3 }), "It's a draw");