/* 
5kyu - Write out numbers
https://www.codewars.com/kata/52724507b149fa120600031d

Create a function that transforms any positive number to a string 
representing the number in words. 
The function should work for all numbers between 0 and 999,999.
*/


function number2words(n) {
  const w1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const w10 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const w20 = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  let result = [], k, s = "", n1 = n;
  if (n === 0) return "zero";
  if (n >= 100000) {
    k = ~~(n / 100000);
    result.push(w1[k]);
    result.push('hundred');
    n -= 100000 * k;
  }
  if (n >= 1000 || Math.log10(n1) - Math.log10(n) > 1) {
    k = ~~(n / 1000);
    if (k < 10) {
      s = k ? w1[k] : "";
    } else if (k < 20) {
      s = w10[k % 10];
    } else {
      s = k % 10 ? `${w20[~~(k / 10)]}-${w1[k % 10]}` : `${w20[~~(k / 10)]}`;
    }
    s && result.push(s);
    result.push('thousand')
    n -= k * 1000;
  }

  if (n >= 100) {
    k = ~~(n / 100);
    result.push(`${w1[k]} hundred`);
    n -= k * 100;
  }

  if (n >= 20) {
    k = ~~(n / 10);
    if (n % 10 === 0) {
      result.push(w20[k]);
    } else {
      result.push(`${w20[k]}-${w1[n % 10]}`);
    }
    n = 0;
  }
  if (n >= 10) {
    result.push(w10[n % 10]);
    n = 0;
  }

  if (n > 0) {
    result.push(w1[n]);
  }
  return result.join(' ');
}

// console.log(number2words(1), ' ==>', "one");
// console.log(number2words(9), ' ==>', "nine");
// console.log(number2words(0), ' ==>', "zero");
// console.log(number2words(10), ' ==>', "ten");
// console.log(number2words(17), ' ==>', "seventeen");
// console.log(number2words(20), ' ==>', "twenty");
// console.log(number2words(21), ' ==>', "twenty-one");
// console.log(number2words(45), ' ==>', "forty-five");
// console.log(number2words(80), ' ==>', "eighty");
// console.log(number2words(99), ' ==>', "ninety-nine");
// console.log(number2words(100), ' ==>', "one hundred");
// console.log(number2words(301), ' ==>', "three hundred one");
// console.log(number2words(799), ' ==>', "seven hundred ninety-nine");
// console.log(number2words(800), ' ==>', "eight hundred");
// console.log(number2words(950), ' ==>', "nine hundred fifty");
// console.log(number2words(1000), ' ==>', "one thousand");
// console.log(number2words(1002), ' ==>', "one thousand two");
// console.log(number2words(3051), ' ==>', "three thousand fifty-one");
// console.log(number2words(7200), ' ==>', "seven thousand two hundred");
// console.log(number2words(7219), ' ==>', "seven thousand two hundred nineteen");
// console.log(number2words(8330), ' ==>', "eight thousand three hundred thirty");
// console.log(number2words(99999), ' ==>', "ninety-nine thousand nine hundred ninety-nine");
// console.log(number2words(888888), ' ==>', "eight hundred eighty-eight thousand eight hundred eighty-eight");

//best

/* 
function number2words(n){
    // works for numbers between 0 and 999999
    var b=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    var b2=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
    if(n>=0 && n<20){
      return b[n];
    }
    if(n >= 20 && n<100){
      return b2[Math.floor(n/10)-2]+(n%10===0?'':'-'+b[n%10])
    }
    if(n>=100 && n<1000){
      return b[Math.floor(n/100)]+' hundred'+(n%100===0?'':' '+number2words(n%100));
    }else{
      return number2words(Math.floor(n/1000))+' thousand'+(n%1000===0?'':' '+number2words(n%1000));
    }
  }

*/


/* 
var num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

function number2words(n){
  if (n < 20) return num[n];
  var digit = n%10;
  if (n < 100) return tens[Math.floor(n/10)-2] + (digit ? "-"+num[digit] : "");
  if (n < 1000) return num[Math.floor(n/100)] +" hundred" + (n%100 == 0 ? "" : " " + number2words(n%100));
  return number2words(Math.floor(n/1000)) + " thousand" + (n%1000 != 0 ? " " +number2words(n%1000) : "");
}
*/

/* 
function number2words(n) {
  if (n < 20) return ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"][n];
  if (n < 100) return ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"][~~(n / 10) - 1] + (n % 10 === 0 ? "" : "-" + number2words(n % 10));
  if (n < 1e3) return ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][~~(n / 100) - 1] + " hundred" + (n % 100 === 0 ? "" : " " + number2words(n % 100));
  return number2words(~~(n / 1e3)) + " thousand" + (n % 1e3 === 0 ? "" : " " + number2words(n % 1e3));
}
*/