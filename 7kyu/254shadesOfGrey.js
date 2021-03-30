/* 
https://www.codewars.com/kata/54d22119beeaaaf663000024/train/javascript
Вернуть массив N оттенков серого 
 */
const shadesOfGrey = n => n<0 ? [] : Array.from({length: Math.min(n,254)}).fill().map((color,i) => '#'+((i+1).toString(16).padStart(2,'0')).repeat(3));

console.log(shadesOfGrey(256));