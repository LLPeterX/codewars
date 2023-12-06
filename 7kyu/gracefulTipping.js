/* 
7kyu - Graceful Tipping
https://www.codewars.com/kata/5eb27d81077a7400171c6820/train/javascript
*/

function gracefulTipping(bill) {
  let sum = Math.ceil(bill * 1.15);
  if (sum < 10) return sum;
  let elegant = 5 * (10 ** (~~Math.log10(sum) - 1));
  while (sum % elegant !== 0) sum++;
  return sum;
}


// best

/* 
function gracefulTipping(bill) {
  const withRawTip = bill * 1.15;
  const multiple = Math.ceil(5 * Math.pow(10, Math.floor(Math.log10(withRawTip)) - 1));
  return Math.ceil(withRawTip / multiple) * multiple;
}
*/
