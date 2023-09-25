/* 
6kyu - Help Suzuki purchase his Tofu!
https://www.codewars.com/kata/57d4ecb8164a67b97c00003c/train/javascript

You will be given a string of items representing the box.
Sort through the items in the box finding the coins and putting aside anything else.

box = 'mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon'

Return the following in your solution. 

[count of mon coins in box, 
 count of monme coins in box,
 sum of all coins value in box, 
 minimum number of coins needed for Tofu]
*/

function buyTofu(cost, box) {
  let c60 = c1 = 0;
  let items = box.split(' ');
  for (let item of items) {
    if (item === 'mon') {
      c1++;
    } else if (item === 'monme') {
      c60++;
    }
  }
  let boxSum = c1 + c60 * 60;
  if (cost > boxSum) return 'leaving the market';
  let n60 = Math.min(~~(cost / 60), c60);
  let n1 = cost - n60 * 60;
  if (n1 > c1) return 'leaving the market';
  return [c1, c60, boxSum, n60 + n1];
}

let v1 = "mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon";
console.log(buyTofu(124, v1), [45, 5, 345, 6])
