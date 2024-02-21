/* 
7kyu - 80's Kids #1: How Many Licks Does it Take?
https://www.codewars.com/kata/566091b73e119a073100003a/train/javascript
*/

function totalLicks(env) {
  let licks = 252, maxEnvValue = 0, maxEnvName = null;
  for (let e in env) {
    licks += env[e];
    if (env[e] > maxEnvValue) {
      maxEnvValue = env[e];
      maxEnvName = e;
    }
  }
  let result = `It took ${licks} licks to get to the tootsie roll center of a tootsie pop.`;
  if (maxEnvName) result += ` The toughest challenge was ${maxEnvName}.`;
  return result;
}

// console.log(totalLicks({ "freezing temps": 10, "clear skies": -2 }), "\n",
//   "It took 260 licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was freezing temps.");
// console.log(totalLicks({ "happiness": -5, "clear skies": -2 }), "\n",
//   "It took 245 licks to get to the tootsie roll center of a tootsie pop.");
// console.log(totalLicks({}), "\n",
//   "It took 252 licks to get to the tootsie roll center of a tootsie pop.");
// console.log(totalLicks({ "dragons": 100, "evil wizards": 110, "trolls": 50 }), "\n",
//   "It took 512 licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was evil wizards.");
// console.log(totalLicks({ "white magic": -250 }), "\n", "It took 2 licks to get to the tootsie roll center of a tootsie pop.");
//console.log(totalLicks({ 'Something Good': -210, 'Something Bad': 132 }), "\n", 'It took 174 licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was Something Bad.');