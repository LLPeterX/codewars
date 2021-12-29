/* 
7kyu - Remove Screws
https://www.codewars.com/kata/5710a50d336aed828100055a/train/javascript

ohn is a worker, his job is to remove screws from a machine. There are 2 types of screws: slotted (-) and cross (+). John has two screwdrivers, one for each type of screw.

The input will be a (non-empty) string of screws, e.g. : "---+++"

When John begins to work, he stands at the first screw, with the correct screwdriver in his hand, and another in his tool kit. He works from left to right, removing every screw. When necessary, he switches between the screwdriver in his hand and the one in his tool kit.

Each action takes a set amount of time:

remove one screw : 1 second
move to the next screw: 1 second
switch screwdrivers: 5 seconds
Your task is to return the total time taken to remove all the screws, in seconds.
*/

function sc(screws) {
  let sw1 = screws.split('-+').length, sw2 = screws.split('+-').length;
  return screws.length * 2 - 1 + (sw1 + sw2 - 2) * 5;
}

console.log(sc("---+++"), 16);
console.log(sc("-+-+-+"), 36);
console.log(sc("-+-+-----------"), 49);
console.log(sc("-+-+-++++++++++"), 54);

// best
/* 
function sc(screws){
  return screws.split('').reduce((time, screw, i) => screw == screws[i+1] ? time + 2 : time + 7, 1) - 7;
}
*/

/* 
function sc(screws){
  return screws.length * 2 - 1 + screws.match(/-(?=\+)|\+(?=-)/g || []).length * 5;
}
*/