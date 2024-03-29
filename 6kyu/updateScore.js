/* 
6kyu - Get Euchre Score
https://www.codewars.com/kata/586eca3b35396db82e000481/train/javascript

Вы играете в юкер и хотите узнать новый счет после завершения раздачи.

Есть 2 команды, каждая рука состоит из 5 взяток.
Команда, выигравшая большинство взяток, получает некотрое количество очков.

Чтобы определить количество очков, необходимо знать, у какой команды козырь,
сколько взяток выиграла каждая команда, и остался ли кто-то в одиночестве.
(хуй поймешь параметр alone)

Для команды с козырем:
- если она выиграют <=2 взяток, то другая команда получает 2 очка
- Если выигрывает 3 или 4 взяток => получает 1 очко
- Если alone=true и выигрывает 5 взяток => +4 очка
- Если alone=false и выигрывает 5 взяток => +2 очка

Только у команды с козырем может быть alone=true и 
очки прибавляются только если она выиграет все 5 взяток.

Задача: написать метод вычисления нового количества очков.

Аргументы:
- currentScore (массив) первое значение - очки первой команды, второе занчение- очки второй команды ([team1, team2]) 
- calledTrump - номер команды, у корой козырь ( 1 или 2)
- alone - в одиночестве (true/false)
- tricks - массив раздач из 5 элементов
*/

function updateScore(currentScore, calledTrump, alone, tricks) {
  let wins = [0, 0];
  for (let i = 0; i < tricks.length; i++)  wins[tricks[i] - 1]++;
  let k1 = calledTrump - 1, k2 = calledTrump % 2;
  if (wins[k1] === 5) currentScore[k1] += alone ? 4 : 2;
  else if (wins[k1] <= 2) currentScore[k2] += 2;
  else if (wins[k1] < 5) currentScore[k1] += 1;
  return currentScore;
}

console.log(updateScore([4, 0], 1, false, [2, 2, 2, 2, 2]), [4, 2]);
console.log(updateScore([4, 2], 1, true, [1, 1, 1, 2, 2]), [5, 2]);
console.log(updateScore([5, 2], 2, true, [2, 2, 2, 2, 2]), [5, 6]);
console.log(updateScore([4, 4], 2, false, [2, 2, 2, 2, 2]), [4, 6]);
console.log(updateScore([0, 8], 1, false, [1, 1, 1, 1, 1]), [2, 8]); 
