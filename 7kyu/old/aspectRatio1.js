/* 
8kyu - Aspect ratio cropping 1
https://www.codewars.com/kata/596e4ef7b61e25981200009f/train/javascript

Дано разрешение X x Y
Преобразовать в аспект 16:9, сохранив Y и изменив X

*/

function aspectRatio(x, y) {
  //let r = x * 9 / y / 16;
  //  let r = y * 16 / x / 9;
  //  let r1 = y * 16 / 9;
  //  return [Math.ceil(r1), y];
  return [Math.ceil(y * 16 / 9), y];

}

console.log(aspectRatio(640, 480), [854, 480]);
console.log(aspectRatio(960, 720), [1280, 720]);
console.log(aspectRatio(1440, 1080), [1920, 1080]);
console.log(aspectRatio(1920, 1440), [2560, 1440]);
