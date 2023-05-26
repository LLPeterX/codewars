/* 
7kyu - Fizz Buzz Cuckoo Clock
https://www.codewars.com/kata/58485a43d750d23bad0000e6/train/javascript

* When a minute is evenly divisible by 3, the clock will say the word "Fizz".
* When a minute is evenly divisible by 5, the clock will say the word "Buzz".
* When a minute is evenly divisible by 3 & 5, the clock will say "Fizz Buzz", with two exceptions:
 - On the hour, instead of "Fizz Buzz", the clock door will open, 
    and the cuckoo bird will come out and "Cuckoo" between one and twelve times depending on the hour.
 - On the half hour, instead of "Fizz Buzz", the clock door will open, 
    and the cuckoo will come out and "Cuckoo" just once.
* With minutes that are not evenly divisible by either three or five, 
  at first you had intended to have the clock just say the numbers ala Fizz Buzz,
   but then you decided at least for version 1.0 to just have the clock make a quiet, 
   subtle "tick" sound for a little more clock nature and a little less noise.
*/
/*
function fizzBuzzCuckooClock(time) {
  let [h, m] = time.split(':').map(Number);
  if (m % 15 === 0) {
    return m === 0 ? "Cuckoo ".repeat((h || 24) > 12 ? (h || 24) - 12 : h).trimEnd() : m === 30 ? "Cuckoo" : "Fizz Buzz";
  } else if (m % 3 === 0) return "Fizz";
  else if (m % 5 === 0) return "Buzz";
  return "tick";
}
*/
const fizzBuzzCuckooClock = time => {
  let [h, m] = time.split(':').map(Number);
  return (m % 15 === 0) ? (m === 0 ? "Cuckoo ".repeat((h || 24) > 12 ? (h || 24) - 12 : h).trimEnd() : m === 30 ? "Cuckoo" : "Fizz Buzz") : m % 3 === 0 ? "Fizz" : m % 5 === 0 ? "Buzz" : "tick";
}


console.log(fizzBuzzCuckooClock("13:34"), '=>', "tick");
console.log(fizzBuzzCuckooClock("21:00"), '=>', "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo");
console.log(fizzBuzzCuckooClock("11:15"), '=>', "Fizz Buzz");
console.log(fizzBuzzCuckooClock("03:03"), '=>', "Fizz");
console.log(fizzBuzzCuckooClock("14:30"), '=>', "Cuckoo");
console.log(fizzBuzzCuckooClock("08:55"), '=>', "Buzz");
console.log(fizzBuzzCuckooClock("00:00"), '=>', "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo");
console.log(fizzBuzzCuckooClock("12:00"), '=>', "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo");

// best

/* 
function fizzBuzzCuckooClock(time) {
  let [hour, minute] = time.split(':');
  return minute ==  0 ? "Cuckoo ".repeat(hour % 12 || 12).trim() :
    minute      == 30 ? "Cuckoo" : 
    minute % 15 ==  0 ? "Fizz Buzz" :
    minute % 3  ==  0 ? "Fizz" :
    minute % 5  ==  0 ? "Buzz" : 
                        "tick";
}
*/

/* 
const fizzBuzzCuckooClock = time =>
  (([h, m]) => !m ? `Cuckoo `.repeat(h % 12 || 12).trim() : !(m % 30) ? `Cuckoo` : !(m % 15) ? `Fizz Buzz` : !(m % 5) ? `Buzz` : !(m % 3) ? `Fizz` : `tick`)
  (time.split(`:`).map(Number));
*/