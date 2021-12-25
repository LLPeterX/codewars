/* 
6kyu - Shortest Time
https://www.codewars.com/kata/5953c6f8af7ac14fd4000021/train/javascript

ohn is a programmer. He treasures his time very much. He lives on the n floor of a building. Every morning he will go downstairs as quickly as possible to begin his great work today.

There are two ways he goes downstairs: walking or taking the elevator.

When John uses the elevator, he will go through the following steps:

1. Waiting the elevator from m floor to n floor;
1a. Or take the stairs to m floor;
2. Waiting the elevator open the door and go in;
3. Waiting the elevator close the door;
4. Waiting the elevator down to 0 floor;
5. Waiting the elevator open the door and go out;
(the time of go in/go out the elevator will be ignored)
Given the following arguments:

n: An integer. The floor of John(0-based).
m: An integer. The floor of the elevator(0-based).
speeds: An array of integer. It contains four integer [a,b,c,d]
        a: The seconds required when the elevator rises or falls 1 floor
        b: The seconds required when the elevator open the door
        c: The seconds required when the elevator close the door
        d: The seconds required when John walks to n-1 or n+1 floor
*/

function shorterestTime(n, m, [a, b, c, d]) {
  if (n === 0) return 0;
  let onElevator = (Math.abs(n - m) * a) + b + c + (n * a) + b,
    onFoot = d * n,
    onElevAndFoot = (Math.abs(n - m) * d) + b + c + (m * a) + b;
  return Math.min(onElevator, onFoot, onElevAndFoot);
}
