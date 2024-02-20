/* 
5kyu - Flotsam
https://www.codewars.com/kata/635f67667dadea064acb2c4a/train/javascript

Фрэнк, Сэм и Том отправились в путешествие на корабле. 
Корабль разбился об айсберг и начал тонуть. Ваша задача - спасти выживших.

Схема крушения:

         |-| |-| |-|        
         | | | | | |        
~\-------|-|-|-|-|-|------/~
~~\   F   |   S   |   T  /~~
~~~\----------------x---/~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* буквы F,T,S - пассажиры
* ~ - вода
* ПРОБЕЛ - пустое место
* x - пробоина (м.б. несколько)
* остальное - части корабля

Вода поступает через пробоину вверх, распространяется по пустым местам 
вниз и по бокам (но не по диагонали) и не выше уровня океана.

Пассажиры, оставщиеся в незатопленных ячейках, выживают.

Вернуть имена выживших пассажиров
*/



function solution(image) {
  pic(image);
  const passagers = {
    'F': { y: 0, x: 0, name: "Frank", alive: true },
    'S': { y: 0, x: 0, name: "Sam", alive: true },
    'T': { y: 0, x: 0, name: "Tom", alive: true },
  };
  const posX = [];
  let oceanLevel = image.length;
  for (let y = 0; y < image.length; y++) {
    for (let x = 0; x < image[0].length; x++) {
      let sym = image[y][x];
      if (sym === 'F' || sym === 'S' || sym === 'T') {
        passagers[sym].y = y;
        passagers[sym].x = x;
      } else if (sym === 'x') {
        if (image[y - 1][x] == '~' || image[y + 1][x] == '~' || image[y][x + 1] === '~' || image[y][x - 1] === '~') {
          posX.push({ y, x });
        }
      } else if (sym === '~') {
        oceanLevel = Math.min(oceanLevel, y);
      }
    }
  }

  const flood = (y, x) => {
    if (y < oceanLevel || y > image.length - 1) return;
    if (x < 0 || x > image[0].length - 1) return;
    let sym = image[y][x];
    if (sym === '~') return;
    if ("FSTx ".includes(sym)) {
      image[y][x] = '~';
      flood(y - 1, x);
      flood(y + 1, x);
      flood(y, x + 1);
      flood(y, x - 1);
      if (sym === 'F' || sym === 'S' || sym === 'T') passagers[sym].alive = false;
    }
  }
  // console.log(passagers, posX, posX.length);
  // flood
  for (let i = 0; i < posX.length; i++) {
    flood(posX[i].y, posX[i].x);
  }
  let result = Object.values(passagers).filter(p => p.alive).map(p => p.name).join(' ');
  pic(image);

  return result;
}

function pic(field) {
  field.forEach(row => console.log(row.join('')));
  console.log();
}

var field1 =
  [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', '-', '|', ' ', '|', '-', '|', ' ', '|', '-', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', '|', ' ', '|', ' ', '|', ' ', '|', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['~', '\\', '-', '-', '-', '-', '-', '-', '-', '|', '-', '|', '-', '|', '-', '|', '-', '|', '-', '|', '-', '-', '-', '-', '-', '-', '/', '~'],
    ['~', '~', '\\', ' ', ' ', ' ', 'F', ' ', ' ', ' ', '│', ' ', ' ', ' ', 'S', ' ', ' ', ' ', '│', ' ', ' ', ' ', 'T', ' ', ' ', '/', '~', '~'],
    ['~', '~', '~', '\\', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'x', '-', '-', '-', '-', '-', '/', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~']
  ];
console.log(solution(field1), "=>Frank Sam Tom");

var field2 =
  [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', '-', '|', ' ', '|', '-', '|', ' ', '|', '-', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', '|', ' ', '|', ' ', '|', ' ', '|', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['~', '\\', '-', '-', '-', '-', '-', '-', '-', '|', '-', '|', '-', '|', '-', '|', '-', '|', '-', '|', '-', '-', '-', '-', '-', '-', '/', '~'],
    ['~', '~', '\\', ' ', ' ', ' ', 'F', ' ', ' ', ' ', '│', ' ', ' ', ' ', 'S', ' ', ' ', ' ', '│', ' ', ' ', ' ', 'T', ' ', ' ', 'x', '~', '~'],
    ['~', '~', '~', '\\', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '/', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~']
  ];
console.log(solution(field2), "=>Frank Sam");

var field3 =
  [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', '=', '=', '|', ' ', ' ', '|', '=', '=', '|', ' ', ' ', '|', '=', '=', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '_', '_', '|', '_', '_', '|', '_', '_', '|', '_', '_', '|', '_', '_', '|', '_', '_', '|', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', '_', '_', '|', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '|', '_', '_', '_', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '_', '_', '|', '_', '_', '[', ']', '_', '_', '[', ']', '_', '_', '[', ']', '_', '_', '[', ']', '_', '_', '[', ']', '_', '_', '[', ']', '_', '_', '|', '_', 'x', 'x', 'x'],
    ['~', '|', ' ', ' ', ' ', 'F', ' ', ' ', 'x', ' ', ' ', 'S', ' ', ' ', ' ', ' ', '|', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '/', '~'],
    ['~', 'x', '_', '_', '_', '_', '_', '_', '|', '_', '_', '_', '_', '_', 'x', '_', '|', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '/', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~']
  ];

console.log(solution(field3), "=>Tom")

var field4 =
  [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', '=', '=', '|', ' ', ' ', '|', '=', '=', '|', ' ', ' ', '|', '=', '=', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '_', '_', '|', '_', '_', '|', '_', '_', '|', '_', '_', '|', '_', '_', '|', '_', '_', '|', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', '_', '_', '|', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '|', '_', '_', '_', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'x', '_', '|', '_', '_', '[', ']', '_', '_', '[', ']', '_', '_', '[', ']', '_', '_', '[', ']', '_', '_', '[', ']', '_', '_', '[', ']', '_', '_', '|', '_', '_', '_', ' '],
    ['~', '|', 'x', ' ', ' ', 'F', ' ', ' ', 'x', ' ', ' ', 'S', ' ', ' ', ' ', ' ', 'x', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '/', '~'],
    ['~', '|', '_', '_', '_', '_', '_', '_', '|', '_', '_', '_', '_', '_', '_', '_', '|', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '/', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~', '~']
  ];

console.log(solution(field4), "=>Frank Sam Tom")

//best

/*
const PPL = {F: "Frank", S:"Sam", T: "Tom"}

function solution(image) {

  const flood=q=>{
    while(q.length){
      const [i,j]=q.pop(), c=boat[i][j]
      if(PPL[c]) survivors = survivors.replace(c,'')
      boat[i][j] = '.'
      const to_flood = around(i,j).filter(([a,b])=>inside(a,b) && /[ xTSF]/.test(boat[a][b]))
      q.push(...to_flood)
    }
  }
  const around     = (i,j) => [[i,j+1],[i+1,j],[i-1,j],[i,j-1]]
  const inside     = (a,b) =>sea<=a&&a<X && 0<=b&&b<Y
  const sea_around = (i,j) => around(i,j).some(([a,b])=>inside(a,b) && /~/.test(boat[a][b]))

  const boat = image.map(r=>r.slice())
  const X    = boat.length
  const Y    = boat[0].length
  const sea  = boat.findIndex(r=>r.includes('~'))

  let survivors = 'FST'
  boat.forEach((r,i)=>r.forEach((c,j)=>{
    if(c=='x' && sea_around(i,j)) flood([[i,j]])
  }))
  return [...survivors].map(k=>PPL[k]).join(' ')
}
*/

// other

/* 
let count = 0;

  const totalRunner = (coords, sym, leakTest) => {
    const [y, x] = coords;
    const reg = new RegExp(leakTest ? '\~' : '[ FSTx]');
    if (board[y][x] !== sym) {
      return;
    }

    const neighbours = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    neighbours.forEach(el => {
      const [shiftY, shiftX] = el;
      if (board[y + shiftY] && reg.test(board[y + shiftY][x + shiftX])) {
        if (leakTest) {
          board[y][x] = 'l';
        } else {
          if (y + shiftY >= oceanLevel) {
            board[y + shiftY][x + shiftX] = 'l';
          }
        }
      }
    });
  }

  board.forEach((row, rowIndex) => {
    row.forEach((el, colIndex) => {
      totalRunner([rowIndex, colIndex], 'x', true);
    });
  });

  while (count < makePic(image).length / 25) {
    board.forEach((row, rowIndex) => {
      row.forEach((el, colIndex) => {
        totalRunner([rowIndex, colIndex], 'l', false);
      });
    });
    count++;
  }

  return makePic(board).replace(/[^FST]/g, '').split('').map(el => users[el] || '').sort().join(' ');
}
*/

/* 
const solution = function(scene, options) {
    const { floodables, names, water, flood, build } = Object.assign({
        floodables: [' ', 'x', 'F', 'S', 'T'],
        names: { F: 'Frank', S: 'Sam', T: 'Tom' },
        water: '~',
        flood: (scene, coor, water) => {
            return [
                [coor[0] - 1, coor[1]],
                [coor[0], coor[1] + 1],
                [coor[0] + 1, coor[1]],
                [coor[0], coor[1] - 1]
            ].some(coor => scene[coor[0]] && scene[coor[0]][coor[1]] === water);
        },
        build: (scene, names) => {
            return scene.reduce((res, row) => row.reduce((res, cur) =>
                ((names.hasOwnProperty(cur) && res.push(names[cur])) || 1) && res, res
            ), []).sort().join(' ');
        }
    }, options);
    scene = (Array.isArray(scene) ? scene : (scene.match(/.+/g) || [])).map(row => [].slice.call(row));
    let critical;
    scene.some((row, ri) => row.indexOf(water) >= 0 && ((critical = ri) || 1));
    if(isNaN(critical)) throw new Error('scene is invalid.');
    for(let state, prev; (state = JSON.stringify(scene)) !== prev;) {
        prev = state;
        scene.reduce((res, row, ri) => row.reduce((res, cur, ci) => {
            const valid = ri >= critical && floodables.indexOf(cur) >= 0 && flood(res, [ri, ci], water);
            res[ri][ci] = valid ? water : cur;
            return res;
        }, res), scene);
    }
    return build(scene, names);
};
*/