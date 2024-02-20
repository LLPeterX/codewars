/* 
7kyu - TV Remote
https://www.codewars.com/kata/5a5032f4fd56cb958e00007a/train/javascript

Дан пульт управления.
Чтобы набрать слово, надо нажимать кнопки перемещения, а затем букву.

Сколько кнопок надо нажать, чтобы ввести заданное слово?

Notes
* курсор изначально стоит на букве 'a' (0)
* После каждой буквы надо нажать "OK.
* Проложить прямой путь от одного символа к следующему
* Курсор не выходит за пределы пульта. 
* "word" - пооследовательность символов, доступных на пульте
*/

function tvRemote(word) {
  const keyboard = "abcde123fghij456klmno789pqrst.@0uvwxyz_/";
  const width = 8, height = 5;
  let px = py = count = 0;
  for (let c of word) {
    let index = keyboard.indexOf(c);
    let y = Math.floor(index / width);
    let x = index % width;
    count += Math.abs(py - y) + Math.abs(px - x) + 1;;
    px = x;
    py = y;
  }
  return count;
}

console.log(tvRemote('codewars'));

console.log(tvRemote("does"), 16);
console.log(tvRemote("your"), 23);
console.log(tvRemote("solution"), 33);
console.log(tvRemote("work"), 20);
console.log(tvRemote("for"), 12);
console.log(tvRemote("these"), 27);
console.log(tvRemote("words"), 25);

// best ??

/* 
var tvRemote = function(word) {
  var kb = {'a':[0, 0], 'b':[0, 1], 'c':[0, 2], 'd':[0, 3], 'e':[0, 4], '1':[0, 5], '2':[0, 6], '3':[0, 7],
            'f':[1, 0], 'g':[1, 1], 'h':[1, 2], 'i':[1, 3], 'j':[1, 4], '4':[1, 5], '5':[1, 6], '6':[1, 7],
            'k':[2, 0], 'l':[2, 1], 'm':[2, 2], 'n':[2, 3], 'o':[2, 4], '7':[2, 5], '8':[2, 6], '9':[2, 7],
            'p':[3, 0], 'q':[3, 1], 'r':[3, 2], 's':[3, 3], 't':[3, 4], '.':[3, 5], '@':[3, 6], '0':[3, 7],
            'u':[4, 0], 'v':[4, 1], 'w':[4, 2], 'x':[4, 3], 'y':[4, 4], 'z':[4, 5], '_':[4, 6], '/':[4, 7]
  };
  var steps = 0;
  word.split('').map(n => kb[n]).reduce((a, b) => {
    steps += Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + 1;
    return b;
  },[0, 0]);
  return steps;
}
*/