/* 
7kyu - Offspring Traits
https://www.codewars.com/kata/5b011461de4c7f8d78000052/train/javascript
*/

// first attempt
// const bearFur = (bears) => {
//   const validColors = ['black', 'brown', 'white', 'dark brown', 'grey', 'light brown'];
//   if (bears.every(b => validColors.includes(b))) {
//     if (bears[0] === bears[1]) return bears[0];
//     if (bears[0] === 'white') {
//       return bears[1] === 'black' ? 'grey' : 'light brown';
//     } else if (bears[1] === 'white') {
//       return bears[0] === 'black' ? 'grey' : 'light brown';
//     } else if (bears[0] === 'black') {
//       return bears[1] === 'white' ? 'grey' : 'dark brown';
//     }
//     return bears[0] === 'white' ? 'grey' : 'dark brown';

//   }
//   return 'unknown';
// };

const bearFur = (bears) => {
  const validColors = ['black', 'brown', 'white', 'dark brown', 'grey', 'light brown'];
  if (bears.every(b => validColors.includes(b))) {
    if (bears[0] === bears[1]) return bears[0];
    let comb = {
      blackbrown: 'dark brown',
      whitebrown: 'light brown',
      whiteblack: 'grey'
    };
    return comb[bears[0] + bears[1]] || comb[bears[1] + bears[0]] || 'unknown';
  }
  return 'unknown';
}

console.log(bearFur(['black', 'brown']), 'dark brown')
console.log(bearFur(['black', 'white']), 'grey')

// best

/* 
const COLOURS = [ "black", "brown", "white" ] ;
const bearFur = ([one,two]) =>
  [ [ "unknown",    "unknown",     "unknown",     "unknown" ]
  , [ "unknown",      "black",  "dark brown",        "grey" ]
  , [ "unknown", "dark brown",       "brown", "light brown" ]
  , [ "unknown",       "grey", "light brown",       "white" ]
  ] [ COLOURS.indexOf(one) + 1 ] [ COLOURS.indexOf(two) + 1 ]
;
*/