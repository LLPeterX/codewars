/* 
6kyu - Financing Plan on Planet XY140Z-n
https://www.codewars.com/kata/559ce00b70041bc7b600013d

На планете XY140Z есть N дней в неделе.
Цель - накопить денег, откладывая каждый день на подарок.
Для примера 7  дней Su ... Sa. Дни от 0 до N включительно
в Первую неделю (W0) в W[0][0]=0, W[0][1]=1, W[0][2] = 2 и т.д.

Определить сумму накоплений в N-й день после того, как я накопил 12? (Ваша функция Finance(6) должна вернуть 168, что является суммой сбережений в таблице).


--	Su	Mo	Tu	We	Th	Fr	Sa
W6					  		12 // 12
W5						10	11 // 21
W4					8	 9	10 // 27
W3				6	7	 8	 9 // 30
W2			4	5	6	 7	 8 // 30
W1		2	3	4	5	 6	 7 // 27
W0	0	1	2	3	4	 5	 6 // 21




W5               10 // 10 -> 105
W4             8  9 // 17
W3          6  7  8 // 21
W2       4  5  6  7 // 22
W1    2  3  4  5  6 // 20
W0 0  1  2  3  4  5 // 15
*/

function finance(n) {
  let sum = 0;
  for (let w = 0; w <= n; w++) {
    sum += ((w + n) * (w + n + 1) - (w * 2 - 1) * (w * 2)) / 2;
  }
  return sum;
}

console.log(finance(5), 105)
console.log(finance(6), 168)
console.log(finance(8), 360)
console.log(finance(15), 2040)

// best

/* 
const finance = (n) => n * (n + 1) * (n + 2) / 2;
*/

/* 
finance=a=>a*++a*++a/2
*/