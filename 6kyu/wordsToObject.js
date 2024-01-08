/* 
6kyu - Creating a string for an array of objects from a set of words
https://www.codewars.com/kata/5877786688976801ad000100/train/javascript

ou're given a string containing a sequence of words separated with whitespaces. 
Let's say it is a sequence of patterns: a name and a corresponding number - like this:

"red 1 yellow 2 black 3 white 4"

You want to turn it into a different string of objects 
you plan to work with later on - like this:

"[{name : 'red', id : '1'}, {name : 'yellow', id : '2'}, {name : 'black', id : '3'}, {name : 'white', id : '4'}]"
*/

function wordsToObject(input) {
  return '[' +
    input.match(/(\S+ \S+)/g)
      .map(str => {
        let [a, b] = str.split(' ');
        return `{name : '${a}', id : '${b}'}`;
      }).join(', ') +
    ']';
}


console.log(wordsToObject("red 1 yellow 2 black 3 white 4"), "\n", "[{name : 'red', id : '1'}, {name : 'yellow', id : '2'}, {name : 'black', id : '3'}, {name : 'white', id : '4'}]")

// best

/* 
function wordsToObject(input) {
  return "["+input.replace(/(\S+) (\S+)/g,"{name : '$1', id : '$2'},").slice(0,-1)+"]"
}
*/