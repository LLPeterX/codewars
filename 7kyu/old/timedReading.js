/* 
7kyu - Simple Fun #40: Timed Reading
https://www.codewars.com/kata/588817db5fb13af14a000020/train/javascript
*/

function timedReading(maxLength, text) {
  let t = text.replace(/[^a-z ]/gi, '').replace(/\s+/g, ' ');
  return t.split(' ').filter(w => w.length && w.length <= maxLength).length;
}


console.log(timedReading(4, "The Fox asked the stork, 'How is the soup?'"), 7)

console.log(timedReading(1, "..."), 0)

console.log(timedReading(3, "This play was good for us."), 3)

console.log(timedReading(3, "Suddenly he stopped, and glanced up at the houses"), 5)

console.log(timedReading(6, "Zebras evolved among the Old World horses within the last four million years."), 11)

console.log(timedReading(5, "Although zebra species may have overlapping ranges, they do not interbreed."), 6)

console.log(timedReading(1, "Oh!"), 0)

console.log(timedReading(5, "Now and then, however, he is horribly thoughtless, and seems to take a real delight in giving me pain."), 14)

// best
/* 
const timedReading = (n,s) => (s.match(/\b\w+\b/g) || []).filter(e => e.length <= n).length;
*/