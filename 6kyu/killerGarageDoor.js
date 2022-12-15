/* 
6kyu - Killer Garage Door
https://www.codewars.com/kata/58b1ae711fcffa34090000ea

Дверь гаража. Изначально закрыта. Есть пульт управления с одной кнопкой:
* Если дверь закрыта, она начинает открваться, и наоборот
* Для полного открыти-закрытия требуется 5 сек.
* Пока дверь открывается/закрывается, повторное нажатие на кнопку делает паузу. Еще нажатие - возобновляет

На входе строка:
* . - нет событий
* P - нажата кнопка
* O - препятствие (замена P)

Вернуть строку, каждый символ равен 1 секю и соответствует положению двери (0-открыта, 5-закрыта)
*/


function door(events) {
  let direction = true, value = 0, inc = 0;
  let res = [];
  for (let char of [...events]) {
    if (char === '.') {
    } else if (char === 'P') {
      if (value === 0) {
        direction = true;
        inc = 1;
      } else if (value === 5) {
        direction = false;
        inc = -1;
      } else if (inc != 0) {
        inc = 0;
      } else {
        inc = direction ? 1 : -1;
      }
    } else if (char === 'O') {
      direction = !direction;
      inc *= -1;
    }
    value += inc;
    if (value > 5) value = 5; else if (value < 0) value = 0;
    res.push(value);
  }
  return res.join('');
}


console.log(door('..P...O.....'), '001234321000 ');
console.log(door('P....' + '.'.repeat(10)), '12345' + '5'.repeat(10));
console.log(door('P......P......'), '12345554321000');
console.log(door('P.P..'), '12222');
console.log(door('P.P.P....'), '122234555');
console.log(door('P..OP..P..'), '1232222100'); // should reverse while opening (and allow pause) - FAIL
console.log(door('..P...O.....'), '001234321000');

// best

/* 
function door(events) {

  const OPENED = 0;
  const CLOSED = 1;
  const OPENING = 2;
  const CLOSING = 3;
  const PAUSED_OPENING = 4;
  const PAUSED_CLOSING = 5;

  let state = 1;
  let pos = 0;
  let res = '';

  for (let event of events) {

    switch (state) {

      case OPENED: 
        if (event === 'P') state = CLOSING;
        break;

      case CLOSED:
        if (event === 'P') state = OPENING;
        break;

      case OPENING:
        if (event === 'P') state = PAUSED_OPENING;
        if (event === 'O') state = CLOSING;
        if (pos === 5) state = OPENED;
        break;
        
      case CLOSING: 
        if (event === 'P') state = PAUSED_CLOSING;
        if (event === 'O') state = OPENING;
        if (pos === 0) state = CLOSED;
        break;

      case PAUSED_OPENING: 
        if (event === 'P') state = OPENING;
        break;

      case PAUSED_CLOSING:
        if (event === 'P') state = CLOSING;
        break;

    }

    if (state === OPENING)
      pos += 1;

    if (state === CLOSING)
      pos -= 1;

    res = res + pos;

  }
  
  return res;

}
*/

/* 
door=(ev)=>{
  var d=0,i=0,p=-1,s='';
  for (var c in ev) {
    var e=ev[c];if(e=='P')if(i%5==0)d=1-(i==5?2:0);else p=-p; 
    s+=i=Math.max(0,Math.min(i+(p==1?0:(d=e=='O'?-d:d)),5));
  }
  return s;
}
*/

/* 
function door(events) {
    let dir = 1;
    let moving = false;
    let position = 0;
    let output = "";
    for (const e of events) {
        if (e == "O") {
            dir *= -1;
        }
        if (e == "P") {
            moving = !moving;
        }
        position += dir * moving;
        output += String(position);
        if (moving && (position == 0 || position == 5)) {
            dir *= -1;
            moving = false
        }
    }
    return output;
}
*/