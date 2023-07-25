/* 
7kyu - Tram Capacity
https://www.codewars.com/kata/5b190aa7803388ec97000054/train/javascript

Tram line has n stops, numbered from 1 to n.
At the i-th stop ai passengers exit the tram, while bi passengers enter it. 
The tram is empty before it arrives at the first stop.

Your task:
Calculate the tram's minimum capacity such that the number of people 
inside the tram never exceeds this capacity at any time.
Note that at each stop all exiting passengers exit before any entering passenger enters the tram.

*/

function tram(stops, descending, onboarding) {
  let count = capacity = 0;
  for (let i = 0; i < stops; i++) {
    count += onboarding[i] - descending[i];
    capacity = Math.max(count, capacity);
  }
  return capacity;
}

