/* 
6kyu - Parse bank account number
https://www.codewars.com/kata/597eeb0136f4ae84f9000001/train/javascript

Returns the bank account number parsed from specified string.

 You work for a bank, which has recently purchased an ingenious machine to assist in reading letters and faxes sent in by branch offices.
 The machine scans the paper documents, and produces a string with a bank account that looks like this:

 _     _  _     _  _  _  _  _
| |  | _| _||_||_ |_   ||_||_|
|_|  ||_  _|  | _||_|  ||_| _|
 Each string contains an account number written using pipes and underscores.
 Each account number should have at least one digit, all of which should be in the range 0-9.

 Your task is to write a function that can take bank account string and parse it into actual account numbers.
*/

function parseBankAccount(bankAccount) {
  const rules = [
    [' ||', '_ _', ' ||'], // 0
    ['   ', '   ', ' ||'], // 1
    ['  |', '___', ' | '], // 2
    ['   ', '___', ' ||'], // 3
    [' | ', ' _ ', ' ||'], // 4
    [' | ', '___', '  |'], // 5
    [' ||', '___', '  |'], // 6
    ['   ', '_  ', ' ||'], // 7
    [' ||', '___', ' ||'], // 8
    [' | ', '___', ' ||'] // 9
  ];
  let result = 0;
  let strArray = bankAccount.split('\n');
  for (let i = 0; i < strArray[0].length; i += 3) {
    let strCol1 = strArray[0][i] + strArray[1][i] + strArray[2][i];
    let strCol2 = strArray[0][i + 1] + strArray[1][i + 1] + strArray[2][i + 1];
    let strCol3 = strArray[0][i + 2] + strArray[1][i + 2] + strArray[2][i + 2];
    result = result * 10 + rules.findIndex((e) => e[0] === strCol1 && e[1] == strCol2 && e[2] == strCol3);
  }
  return result;
}
