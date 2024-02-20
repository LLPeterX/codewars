/* 
7kyu - Simple Fun #205: Split Exp
https://www.codewars.com/kata/58fd9f6213b00172ce0000c9/train/javascript

You are given a decimal number n as a string. 
Transform it into an array of numbers (given as strings again), 
such that each number has only one nonzero digit and their sum equals n.

Each number in the output array should be written without any leading and trailing zeros.
*/

function splitExp(n) {

  function convertInt(str) {
    str = str.replace(/^0+/g, '');
    if (!str) return [];
    let result = [];
    for (let i = 0; i < str.length; i++) {
      let strNum = str[i] + '0'.repeat(str.length - i - 1);
      if (+strNum) result.push(strNum);
    }
    return result;
  }

  function convertFract(str) {
    if (!str) return [];
    let i = [...str].findIndex(x => x > 0);
    if (i < 0) return [];
    let result = [];
    result.push('.' + '0'.repeat(i) + str[i]);
    i++;
    for (; i < str.length; i++) {
      let strNum = '0'.repeat(i) + str[i];
      if (+strNum) result.push(`.${strNum}`);
    }
    return result;
  }

  let [intPart, farctPart] = n.split('.');
  return convertInt(intPart).concat(convertFract(farctPart));
}

console.log(splitExp("7970521.5544"), [
  "7000000",
  "900000",
  "70000",
  "500",
  "20",
  "1",
  ".5",
  ".05",
  ".004",
  ".0004"]);

console.log(splitExp("1.0000000000"), ["1"])
console.log(splitExp("7496314"), [
  "7000000",
  "400000",
  "90000",
  "6000",
  "300",
  "10",
  "4"])

console.log(splitExp("0"), [])

console.log(splitExp("6"), ["6"])

console.log(splitExp("1.0000000000"), ["1"])

console.log(splitExp("0000000000.1"), [".1"])

console.log(splitExp("0.99"), [
  ".9",
  ".09"])

console.log(splitExp("1.000009"), [
  "1",
  ".000009"])

console.log(splitExp("1010101"), [
  "1000000",
  "10000",
  "100",
  "1"])

console.log(splitExp("1234567890.1234567890"), [
  "1000000000",
  "200000000",
  "30000000",
  "4000000",
  "500000",
  "60000",
  "7000",
  "800",
  "90",
  ".1",
  ".02",
  ".003",
  ".0004",
  ".00005",
  ".000006",
  ".0000007",
  ".00000008",
  ".000000009"])