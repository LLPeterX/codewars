/* 
6kyu - Generic numeric template formatter
https://www.codewars.com/kata/59901fb5917839fe41000029/train/javascript

Your goal is to create a function to format a number given a template; 
if the number is not present, use the digits 1234567890 to fill in the spaces.

A few rules:

* the template might consist of other numbers, special characters or the like: 
  you need to replace only alphabetical characters (both lower- and uppercase);
* if the given or default string representing the number is shorter than the template, 
  just repeat it to fill all the spaces.

A few examples:

numericFormatter("xxx xxxxx xx","5465253289") === "546 52532 89"
numericFormatter("xxx xxxxx xx") === "123 45678 90"
numericFormatter("+555 aaaa bbbb", "18031978") === "+555 1803 1978"
numericFormatter("+555 aaaa bbbb") === "+555 1234 5678"
numericFormatter("xxxx yyyy zzzz") === "1234 5678 9012"
*/

function numericFormatter(template, number = "1234567890") {
  let result = "";
  for (let i = 0, j = 0; i < template.length; i++) {
    // if (/[a-z]/i.test(template[i])) {
    //   result += number[j % number.length];
    //   j++;
    // } else {
    //   result += template[i];
    // }
    result += (/[a-z]/i.test(template[i])) ? number[j++ % number.length] : template[i];
  }
  return result;
}

console.log(numericFormatter("xxx xxxxx xx", "5465253289"), "546 52532 89");
console.log(numericFormatter("xxx xxxxx xx"), "123 45678 90");
console.log(numericFormatter("+555 aaaa bbbb", "18031978"), "+555 1803 1978");
console.log(numericFormatter("+555 aaaa bbbb"), "+555 1234 5678");
console.log(numericFormatter("xxxx yyyy zzzz"), "1234 5678 9012");

// best
/* 
const numericFormatter = (template, str = '1234567890', i = 0) =>
  template.replace(/[a-z]/gi, () => str[i++ % str.length])
*/