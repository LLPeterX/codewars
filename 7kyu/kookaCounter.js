/* 
7kyu - Kooka-Counter
https://www.codewars.com/kata/58e8cad9fd89ea0c6c000258/train/javascript

he trick to counting kookaburras is to listen carefully

The males sound like HaHaHa...

The females sound like hahaha...

And they always alternate male/female
*/

var kookaCounter = function (laughing) {
  return laughing.replace(/(ha)+/g, 'F').replace(/(Ha)+/g, 'M').length;
}

console.log(kookaCounter(""), 0);
console.log(kookaCounter("hahahahaha"), 1);
console.log(kookaCounter("hahahahahaHaHaHa"), 2);
console.log(kookaCounter("HaHaHahahaHaHa"), 3);

// best

/* 
const kookaCounter = laughing =>
  (laughing.match(/(.a)\1+/g) || []).length;
*/