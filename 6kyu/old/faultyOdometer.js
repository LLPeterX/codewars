/* 
6kyu - Simple Fun #178: Faulty Odometer
https://www.codewars.com/kata/58b8d22560873d9068000085

You are given a car odometer which displays the miles traveled as an integer.

The odometer has a defect, however: it proceeds from digit 3 to digit 5 always skipping the digit 4. 
This defect shows up in all positions (ones, tens, hundreds, etc).
Your task is to calculate the real distance, according The number the odometer shows.
*/

function faultyOdometer(n) {
  return [..."" + n].map(Number).reverse().reduce((x, v, i) => x + (v > 4 ? (v - 1) * (9 ** i) : v * (9 ** i)), 0);
}

//best

/* 
function faultyOdometer(n) {
  return n?n%10-(n%10>4)+9*faultyOdometer(n/10|0):0
}
*/

/* 
function faultyOdometer(n) {
  return String(n)
    .split('')
    .map((digit) => {
      const number = Number(digit)

      return number >= 5 ? number - 1 : number
    })
    .reduce((sum, item) => sum * 9 + item, 0)
}
*/