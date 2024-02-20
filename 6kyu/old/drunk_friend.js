/* 
6kyu - Drunk friend
https://www.codewars.com/kata/558ffec0f0584f24250000a0/train/javascript
*/

function decode(str) {
  if (!str || typeof str !== 'string') return "Input is not a string";
  const b = "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba";
  const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return str.replace(/./g, (char) => {
    let i = b.indexOf(char);
    return i >= 0 ? a[i] : char;
  });
}

//console.log(decode("yvvi"), "beer");
// console.log(decode("Blf zoivzwb szw 10 yvvih"), "You already had 10 beers")
// console.log(decode("Ovg'h hdrn rm gsv ulfmgzrm!"), "Let's swim in the fountain!")
// console.log(decode("Tl slnv, blf'iv wifmp"), "Go home, you're drunk")
//console.log(decode("Hfiv r xzm wzmxv lm xlk'h xzi, slow nb yvvi"), 'Sure i can dance on cop\'s car, hold my beer') 