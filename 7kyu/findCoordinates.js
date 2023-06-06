/* 
7kyu - 2D Coordinates Finder!
https://www.codewars.com/kata/639ac3ded3fb14000ed38f31/train/javascript

Given a plane and numbers on or around that plane, return the coordinates of those numbers.

На входе plane: plane: строка, представляющая плоскость в 2D-перспективе. 
Строка разделяется символом новой строки '\n', все строки равной длины. 
Строка содержит числа 0...9. В строке может быть от 1 до 10 чисел. 
Числа не содержат пробелов и всегда начинаются с 0. 
Если, например, есть 3 числа, они будут [0, 1, 2]. 
Эти числа могут быть в плоскости или околок нее. 
Система координат вокруг плоскости та же, что и на плоскости.

вернуть массив из массивов [Y,X],  соответствующий точкам на плоскости.
соответствующего числа в этом массиве. 
Например, [[0, 0], [1, 0]] представляет координаты [0, 0] для числа 0 и координаты [1, 0] для числа 1.

Нулевая точка [0, 0] расположена на нижнем левом краю, эта точка привязана к нашему виду плоскости
Ось X слева направо -->, ось Y по диагонали.

Все точки вдоль оси Y имеют одну и ту же координату X, а точки вдоль оси X имеют одну координату Y.

Точки могут быть вне плоскости, но фиксируются только их координаты X; Y - в диапазоне. 
Т.е. если точка слева от плоскости, то X<0
Мы должны смотреть на неё из прямоугольной рамки. 
Все точки в этом кадре допустимы, если они не пересекаются с растром или местом, 
где мог бы находиться расширенный растр. // ???

// если за пределами плоскости, то есть невидимые линии
// (см. https://www.codewars.com/kata/639ac3ded3fb14000ed38f31/discuss#63db859399a3da000fc8a3c3)
*/

/*
// ниже неверно. Могут быть комбинации типа "1 6/ /..."
function findCoordinates(plane) {
  let lines = plane.trimEnd().replace(/^\n+/, '').split("\n");
  //console.log(lines);
  let mx = lines.map(row => row.split('/'));
  let result = [];
  let x;
  for (let row = 0; row < lines.length; row++) {
    for (let col = 0; col < lines[row].length; col++) {
      let c = mx[row][col];
      let n = parseInt(c);
      if (!isNaN(n)) {
        if (col === 0) {
          x = Math.floor((c.length - c.trimRight().length) / 2) + 1;
          result[n] = [lines.length - row - 1, -x];
        } else {
          x = Math.floor((c.length - c.trimLeft().length) / 2);
          result[n] = [lines.length - row - 1, col + x - 1];
        }
      }
    }
  }
  return result;
}
*/
function findCoordinates(plane) {
  let lines = plane.trimEnd().replace(/^\n+/, '').split("\n");
  let result = [];
  let x;
  for (let row = 0; row < lines.length; row++) {
    let offset = -1;
    for (let col = 0; col < lines[row].length; col++) {
      let c = lines[row][col];
      if (c === '/') {
        offset++;
      } else {
        let n = parseInt(c);
        if (!isNaN(n)) {
          if (offset < 0) {
            result[n] = [lines.length - row - 1, -(lines[row].slice(col + 1).indexOf('/') / 2 + 1)];
          } else {
            x = col;
            while (lines[row][x] !== '/') x--;
            result[n] = [lines.length - row - 1, (col - x + 1) / 2 + offset - 1];
          }
        }
      }
    }
  }
  return result;
}



function act(src, answer) {
  console.log('json=', JSON.stringify(src));
  console.log(findCoordinates(src), ' => ', answer);
}

// act(`
//         / / / /
//        / / / /
//       /0/1/2/
//       `, [[0, 0], [0, 1], [0, 2]]);

// act(`
//         /2/ / /
//        /1/ / /
//       /0/ / /
//       `, [[0, 0], [1, 0], [2, 0]]);

// act(`
//         /1/ / /
//        / / / /
//       / /0/ /
//       `, [[0, 1], [2, 0]]);


// act(`
//        1/ / / /
//       0/ / / /3
//       / / / /2
//       `, [[1, -1], [2, -1], [0, 3], [1, 3]]);


// best
/* 
function findCoordinates(plane) {
  var r = {}, m=plane.split('\n').reverse();
  for (let j=0; j<m.length; j++) for (let i=0; i<m[j].length; i++) if (/\d/.test(m[j][i])) r[m[j][i]]=[j,(i-j-1)/2];
  return Array.from({...r, length: Object.keys(r).length});
}
*/

/* 
unction findCoordinates(plane) {
  let resMap = new Map();
  let grid = plane.split('\n');

  grid.forEach( (item, index) => {
    item.trim().split('/').forEach( (char, charInd, charArr) => {
      let matches = [...char.matchAll(/(\d)/g)];
      if (matches.length) {
        for (const match of matches) {
          resMap.set(match[0], [grid.length - 1 - index, charInd -
            (charInd + 1 < charArr.length ? char.length+1 - match.index : 2 - match.index)/2 | 0]);
        }
      }
    } );
  } );

  return Array.from(resMap, item => item).sort().map( item => item[1] );
}
*/

/* 
function findCoordinates(plane) {

  const cols = plane.indexOf("\n");
  const seq = plane.split("\n").reverse().join('');
  const regex = /\d/g;
  
  let coords = [];
  let x, y, match;

  while (match = regex.exec(seq))  {
    y = Math.floor(match.index / cols);
    x = (match.index % cols - y - 1) / 2;
    coords[+match[0]] = [y, x]
  }

  return coords;
  
}
*/