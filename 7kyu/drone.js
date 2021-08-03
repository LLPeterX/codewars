/* 
7kyu Drone Fly-By https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript
 */
/* 
function flyBy1(lamps, drone) {
  let res = "";
  for (let i = 0; i < lamps.length; i++) {
    if (i < drone.length) {
      if (drone[i] === '=' || drone[i] === 'T') {
        res += 'o';
      }
    } else {
      res += lamps[i];
    }
  }
  return res;
}
 */
const flyBy = (lamps, drone) => [...lamps].reduce((res, char, i) => res += (drone[i] === '=' || drone[i] === 'T' ? 'o' : char), "")


console.log(flyBy('xxxxxx', '====T'), 'ooooox');
console.log(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx');
console.log(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx');

//my best
