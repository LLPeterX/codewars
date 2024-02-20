/* 
5kyu - Luck Check
https://www.codewars.com/kata/5314b3c6bb244a48ab00076c/train/javascript

In some countries of former Soviet Union there was a belief about lucky tickets. A transport ticket of any sort was believed to posess luck if sum of digits on the left half of its number was equal to the sum of digits on the right half. Here are examples of such numbers:

003111    #             3 = 1 + 1 + 1
813372    #     8 + 1 + 3 = 3 + 7 + 2
17935     #         1 + 7 = 3 + 5  // if the length is odd, you should ignore the middle number when adding the halves.
56328116  # 5 + 6 + 3 + 2 = 8 + 1 + 1 + 6
*/

function luckCheck(ticket) {
  let digits = [...ticket];
  if (digits.some(d => /\D/.test(d))) {
    throw Error('Invalid input');
  }
  if (digits.length % 2 !== 0) {
    digits.splice(~~digits.length / 2, 1);
  }
  let sumLeft = 0, sumRight = 0;
  for (let i = 0; i < digits.length / 2; i++) {
    sumLeft += ~~digits[i];
    sumRight += ~~digits[digits.length / 2 + i];
  }
  return sumLeft === sumRight;
}

console.log(luckCheck('683000'));

// best

/* 
function luckCheck(ticket) {
  if (!ticket || !/^\d+$/.test(ticket)) throw new Error("Ticket numbers are wrong formatted");
  
  const nums = [...ticket].map(Number);
  let sum = 0;
  
  for (let i = 0, l = nums.length; i < l / 2; i++) {
    sum = sum + nums[i] - nums[l - i - 1];
  }
  
  return !sum;
}
*/

/* 
function luckCheck(ticket){
  if (/\D/.test(ticket)) throw new Error('Invalid ticket number') 
  const [left, right] = [ticket.slice(0, Math.floor(ticket.length/2)), ticket.slice(Math.ceil(ticket.length/2))]
  const sum = a => [...a].reduce((tot, v) => tot + +v, 0)
  return sum(left) === sum(right)
}
*/