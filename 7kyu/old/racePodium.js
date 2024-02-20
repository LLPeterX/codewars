/* 
7kyu - Race Ceremony
https://www.codewars.com/kata/62cecd4e5487c10028996e04/train/javascript


Given the numbers of blocks available, return an array with the heights of 2nd, 1st, 3rd places platforms.
* The first place platform has the minimum height possible
* The second place platform has the closest height to first place
*  All platforms have heights greater than zero.
*/


function racePodium(blocks) {
  let p1, p2, p3;
  p2 = Math.ceil(blocks / 3);
  p1 = p2 + 1;
  p3 = blocks - p1 - p2;

  if (p3 === 0) {
    p3 = 1;
    --p2;
  }
  return [p2, p1, p3];
}

