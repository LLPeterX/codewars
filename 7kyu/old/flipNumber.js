/* 
7kyu - Reversing Fun
https://www.codewars.com/kata/566efcfbf521a3cfd2000056

You are going to be given a string. 
Your job is to return that string in a certain order that I will explain below:

Let's say you start with this: 012345

The first thing you do is reverse it:543210
Then you will take the string from the 1st position and reverse it again:501234
Then you will take the string from the 2nd position and reverse it again:504321
Then you will take the string from the 3rd position and reverse it again:504123

Continue this pattern until you have done every single position, 
and then you will return the string you have created. 
For this particular number, you would return:504132
*/

function flipNumber(str) {
  let result = "";
  let arr = [...str];
  while (arr.length) {
    arr = arr.reverse();
    result += arr[0];
    arr = arr.slice(1);
  }
  return result;
}

console.log(flipNumber('012345'));

// cool
/* 
const flipNumber = n => n.length < 2 ? n : n.slice(-1) + n[0] + flipNumber(n.slice(1, -1));
*/

/* 
const flipNumber = n =>
  (arr => [...n].reduce(pre => pre + arr.reverse().shift(), ``))
  ([...n])
*/

/* 
function flipNumber(n)
{
  if (n.length === 1)
    return n;
  
  n = n.split('').reverse().join('');
  return n[0] + flipNumber(n.substr(1));
}
*/