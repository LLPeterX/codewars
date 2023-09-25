/* 
6kyu - Multi-tap Keypad Text Entry on an Old Mobile Phone
https://www.codewars.com/kata/54a2e93b22d236498400134b/train/javascript

------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|     | |space| |     |
|  *  | |  0  | |  #  |
------- ------- -------
*/

function presses(phrase) {
  const letters = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 4];
  const digits = [2, 1, 4, 4, 4, 4, 4, 5, 4, 5];
  let str = phrase.toUpperCase().replace(/[^A-Z\d ]/g, '');
  let count = 0;
  for (let c of str) {
    if (/\d/.test(c)) {
      count += digits[c];
    } else if (c === ' ') {
      count++;
    } else count += letters[c.charCodeAt() - 65];
  }
  return count;
}

console.log(presses("WHERE DO U WANT, 2 MEET L8R?"));

// best
/* 
function presses(phrase) {
  var chunks = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'],
      phrase = phrase.toUpperCase().split(''),
      total = 0;
  
  phrase.forEach(function(l) {
    var key = chunks.filter(function(c) {
      return c.indexOf(l) > -1;
    })[0];
    total += key.indexOf(l) + 1;
  });
  
  return total;
      
}
*/

/* 
function presses(phrase) {
  var sumpress = 0;
  for (var i = 0; i < phrase.length; i++)
  {
    switch (true)
    {
      case (/[1adgjmptw\s]/i.test(phrase[i])):
        sumpress++;
        break;
      case (/[behknqux0]/i.test(phrase[i])):
        sumpress += 2;
        break;
      case (/[cfilorvy]/i.test(phrase[i])):
        sumpress += 3;
        break;
      case (/[sz234568]/i.test(phrase[i])):
        sumpress += 4;
        break;
      case (/[79]/.test(phrase[i])):
        sumpress += 5;
        break;
      default:
        sumpress++;
        break;
    }
  }
  return sumpress;
}
*/

/* 
function presses(phrase) {
  const layout = '1☺☺☺☺ABC2☺DEF3☺GHI4☺JKL5☺MNO6☺PQRS7TUV8.WXYZ9*☺☺☺☺ 0☺☺☺#';
  const map = {};
  return [...phrase.toUpperCase()].reduce(function(a, c) {
    map[c] = map[c] || layout.indexOf(c) % 5 + 1;
    return a + map[c];
  }, 0);
}
*/

/* 
function presses(s) {
  var s1="1*# ADGJMPTW0BEHKNQUXCFILORVY23456S8Z79",
      s2="111111111111222222222333333334444444455";
  return [...s.toUpperCase()].reduce((a,b)=>a+ +s2[s1.indexOf(b)],0);
}
*/