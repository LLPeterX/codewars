/* 
5kyu - Alphabet wars - nuclear strike
https://www.codewars.com/kata/59437bd7d8c9438fb5000004

Напишите функцию, которая принимает строку поля боя и возвращает буквы, пережившие ядерный удар.
* строка состоит из строчных букв и #,[,]
* Убежище обозначено []. Внутри него буквы.
* # - место падения бомбы. Все буквы за пределами [] погибают.
* Если рядом с [] есть 2 или более бомб (#) то убежище уничтожается вместе
  с буквами в нем. "Рядом" = между укрытиями.

Бомбы падают одновременно!  
*/

function alphabetWar(battlefield) {
  const isLetter = c => /[a-z]/.test(c);
  let arr = [...battlefield];
  let shelters = [], s = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '[') {
      s = { start: i, hitCount: 0 };
    } else if (arr[i] === ']') {
      s.end = i;
      shelters.push(s);
    }
  }
  let bombIndex, bombPower;
  while ((bombIndex = arr.indexOf('#')) >= 0) {
    //console.log(` fire at ${bombIndex}`);
    let hitLeft = hitRight = false;
    for (let i = bombIndex - 1; i >= 0; i--) {
      if (arr[i] === ']') {
        if (!hitLeft) {
          let shelter = shelters.find(s => s.end === i);
          shelter.hitCount++;
          hitLeft = true;
        }
        while (i >= 0 && isLetter(arr[--i])); // to '['

      } else if (isLetter(arr[i])) {
        arr[i] = 0;
      }
    }
    for (let i = bombIndex + 1; i < arr.length; i++) {
      if (arr[i] == '[') {
        if (!hitRight) {
          let shelter = shelters.find(s => s.start === i);
          shelter.hitCount++;
          hitRight = true;
        }
        while (i < arr.length && isLetter(arr[++i])); // to ']'
      } else if (isLetter(arr[i])) {
        arr[i] = 0;
      }
    }
    // for (let s of shelters) {
    //   if (s.hitCount > 1) {
    //     for (let i = s.start; i <= s.end; i++) arr[i] = 0;
    //   }
    // }
    arr[bombIndex] = 0;
  }
  for (let s of shelters) {
    if (s.hitCount > 1) {
      for (let i = s.start; i <= s.end; i++) arr[i] = 0;
    }
  }

  //console.log(' shelters: ', shelters);
  return arr.filter(isLetter).join``;
}

console.log(alphabetWar('abde[fgh]ijk'), 'abdefghijk');
console.log(alphabetWar('ab#de[fgh]ijk'), 'fgh');
console.log(alphabetWar('ab#de[fgh]ij#k'), '');
console.log(alphabetWar('##abde[fgh]ijk'), '');
console.log(alphabetWar('##abde[fgh]'), '');
console.log(alphabetWar('##abcde[fgh]'), '');
console.log(alphabetWar('abcde[fgh]'), 'abcdefgh');
console.log(alphabetWar('##abde[fgh]ijk[mn]op'), 'mn');
console.log(alphabetWar('pml[xex]tp[l]zu#[bidi]##'), 'xexl');

// best

/* 
function alphabetWar(battlefield) {
  if (battlefield.match(/#/)) {
    // There is at least one bomb, start killing!
    
    battlefield = battlefield
        // Kill everyone who is not in a bunker
        .replace(/(^|[\]#])\w+(?=[\[#]|$)/g, '$1')
        // Destroy all bunkers surrounded by bombs
        .replace(/#\[\w+\](?=#)/g, '#!')
        // Destroy all bunkers with at least 2 bombs to the left
        .replace(/##\[\w+\]/g, '##!')
        // Destroy all bunkers with at least 2 bombs to the right
        .replace(/\[\w+\]##/g, '!##');
  }
  
  return battlefield.replace(/[^a-z]/g, '');
}
*/