/* 
7kyu - Minimum Perimeter of a Rectangle
https://www.codewars.com/kata/5826f54cc60c7e5266000baf/train/javascript

Дана площадь. Вычислить минимальный периметр.
Всё в целых числах
*/

/*
// FAIL WITH TIMEOUT
function minimumPerimeter(area) {
  let w = ~~Math.sqrt(area);
  let h;
  do {
    h = area / w++;
  } while (!Number.isInteger(h));
  //console.log(`area=${area} w=${w - 1} h=${h}  p=${2 * (h + w - 1)}`);
  return 2 * (h + w - 1);
}
*/
/*
// FAIL на больших числах
function minimumPerimeter(area) {
  if (Number.isInteger(Math.sqrt(area))) {
    return 4 * Math.sqrt(area);
  }
  let minP = Infinity;
  for (let w = 1; w < area; w++) {
    let h = area / w;
    if (Number.isInteger(h)) {
      minP = Math.min(minP, 2 * (h + w));
    }
  }
  return minP;
}
*/

// from https://www.cyberforum.ru/python-tasks/thread3015030.html
function minimumPerimeter(area) {
  let s = ~~Math.sqrt(area);
  while (s * Math.floor(area / s) !== area) s--;
  return (s + area / s) * 2;
}


console.log(minimumPerimeter(45), 28); // 9*5 
console.log(minimumPerimeter(30), 22); // 5x6
console.log(minimumPerimeter(81), 36); // 2*(9+9) = полный квадрат
console.log(minimumPerimeter(89), 180); // 89*2

// best
/* 
function minimumPerimeter(area) {
  for (let i = Math.sqrt(area) | 0; i > 0; i--) {
    if (area % i == 0) {
      return 2 * (i + area / i)
    }
  }
}
*/

/* 
function minimumPerimeter(area) {
  let w = Math.round(Math.sqrt(area))
  let h = (area/w)
 
  while(Number.isInteger(h) === false){
    w = w + 1
    h = (area/w)
  }

  return w+w+h+h
}
*/