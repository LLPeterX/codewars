/*
7 kyu https://www.codewars.com/kata/580a41b6d6df740d6100030c/train/javascript

*/

function alan(x) {
  const stations = { 'Norwich': 0, 'Rejection': 0, 'Disappointment': 0, 'Backstabbing Central': 0, 'Shattered Dreams Parkway': 0, 'London': 0 };
  for (let st of x) {
    if (stations[st] !== undefined) {
      stations[st]++;
    }
  }
  let oLen = Object.values(stations).length;
  let oVal = Object.values(stations).reduce((sum, v) => sum + v);
  return oLen === oVal ? 'Smell my cheese you mother!' : 'No, seriously, run. You will miss it.';
}

console.log(alan(['Norwich', 'Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway', 'London']), 'Smell my cheese you mother!');
console.log(alan(['London', 'Norwich']), 'No, seriously, run. You will miss it.');
console.log(alan(['Norwich', 'Tooting', 'Bank', 'Rejection', 'Disappointment', 'Backstabbing Central', 'Exeter', 'Shattered Dreams Parkway', 'Belgium', 'London']), 'Smell my cheese you mother!');
