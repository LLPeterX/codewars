/* 
7kyu - London CityHacker
https://www.codewars.com/kata/5bce125d3bb2adff0d000245/train/javascript

You are given a sequence of a journey in London, UK. 
The sequence will contain bus numbers and TFL tube names as strings e.g.

['Northern', 'Central', 243, 1, 'Victoria']

Journeys will always only contain a combination of tube names and bus numbers. 
Each tube journey costs £2.40 and each bus journey costs £1.50. 
If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses 
and calculated as one bus fare for each set.
*/

function londonCityHacker(journey) {
  let secondBus = false;
  let sum = 0;
  for (let i = 0; i < journey.length; i++) {
    if (typeof journey[i] === 'number') {
      if (typeof journey[i - 1] === 'number' && secondBus) {
        secondBus = false;
        continue;
      }
      sum += 1.5;
      secondBus = true;
    } else {
      sum += 2.4;
      secondBus = false;
    }
  }
  return `£${sum.toFixed(2)}`;
}

console.log(londonCityHacker([12, 'Central', 'Circle', 21]), "£7.80");
console.log(londonCityHacker(['Piccadilly', 56]), "£3.90");
console.log(londonCityHacker(['Northern', 'Central', 'Circle']), "£7.20");
console.log(londonCityHacker(['Piccadilly', 56, 93, 243]), "£5.40");
console.log(londonCityHacker([386, 56, 1, 876]), "£3.00");
console.log(londonCityHacker([]), "£0.00");
console.log(londonCityHacker(['Piccadilly', 'Waterloo & City', 130, 0]), "£6.30");

// best

/* 
function londonCityHacker(journey) {
  let sum = 0;
  
  for (let i = 0; i < journey.length; i++) {
    if (typeof journey[i] === "string") sum += 2.40;
    else {
      sum += 1.50;
      if (typeof journey[i + 1] === "number") i++;
    }  
  }
  
  return `£${sum.toFixed(2)}`;
}
*/

/* function londonCityHacker(journey) {
  let busFare = 0;
  return `£${journey.map((v, i) => isNaN(v) ? (busFare = 0, 2.4) : busFare = 1.5 - busFare).reduce((v, w) => v + w, 0).toFixed(2)}`;
} */

