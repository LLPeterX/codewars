/* 
7kyu - Upstream/Downstream
https://www.codewars.com/kata/58162692c2a518f03a000189/train/javascript

Chingel is practicing for a rowing competition to be held on this saturday. 
He is trying his best to win this tournament for which he needs to figure out 
how much time it takes to cover a certain distance.

Input:
-total distance of the journey, 
- speed of the boat 
- whether he is going downstream or upstream. 
  The speed of the stream and direction of rowing will be given as a string. Check example test cases!

Output:
The output returned should be the time taken to cover the distance.
If the result has decimal places, round them to 2 fixed positions.
*/

function time(distance, boatSpeed, stream) {
  let [direction, streamSpeed] = stream.split(' ');
  return +(distance / (boatSpeed + (direction === 'Upstream' ? -1 : 1) * streamSpeed)).toFixed(2);
}

console.log(time(24, 10, "Downstream 2"), 2);
console.log(time(24, 14, "Upstream 2"), 2);
console.log(time(54, 28, "Downstream 3"), 1.74);