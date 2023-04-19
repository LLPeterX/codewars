/* 
4kyu - Codewars style ranking system
https://www.codewars.com/kata/51fda2d95d6efda45e00004e/train/javascript

Реализовать класс User, реализующий продвижение пользователя через систему ранжирования.
Правила:
- user начинает с ранга -8 и может продвинуться до 8. Ранга 0 нет.
- юзер совершает действия, которые тоже имеют ранг
- При каждом действии юзера его ранг меняется в зависимости от ранга действия
- Прогресс зависит от ранга пользователя и ранга действия
- Прогресс ранга юзера начинается с нуля, и как только достигает 100, ранг пользователя
  повышается до следующего уровня.
- Остаток прогресса от предыдущего ранга добавляется к прогрессу текушего нового ранга.
  (кроме ранга 8)
- Доступные ранги:  -8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8. 
  Иное значение должно выбрасывать ошибку.

Прогресс учитвается так:
- Завершение действия с таким же рангом, что и юзера => +3 очка
- Если ранг действия < ранга пользователя на 1 ед => + 1 очко
- Если ранг действия < ранга пользователя на 2 и более очков => ничего (0)
- Если ранг действия > ранга юзера, то + 10*d*d (d = разница м/у рангами действия и пользователя) 
  К примеру, если юзер -8 завершил дейцствие -7, то progtress +=10, а если 
  юзер -8 сделал действие -5, то 90

*/

class User {
  #validRanks;
  #rankPtr;
  constructor() {
    this.progress = 0;
    this.#validRanks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
    this.#rankPtr = 0;
  }

  get rank() {
    return this.#validRanks[this.#rankPtr];
  }

  set rank(value) {
    let i = this.#validRanks.indexOf(value);
    if (i < 0) {
      throw Error("Invalid rank");
    } else {
      this.#rankPtr = i;
    }
  }

  incProgress(value) {
    if (this.#rankPtr > 15) return;
    let a = this.#validRanks.indexOf(value);
    if (a >= 0) {
      if (a === this.#rankPtr) this.progress += 3;
      else if (this.#rankPtr - a === 1) this.progress += 1;
      else if (a - this.#rankPtr > 0) this.progress += 10 * (a - this.#rankPtr) ** 2;
      // if (this.progress >= 100) {
      //   this.#rankPtr += (Math.floor(this.progress / 100));
      //   if (this.#rankPtr > 14) {
      //     this.#rankPtr = 15;
      //     this.progress = 0;
      //   }
      //   this.progress = this.progress % 100;
      // }
      this.#rankPtr += ~~(this.progress / 100);
      if (this.#rankPtr > 14) {
        this.#rankPtr = 15;
        this.progress = 0;
      }
      this.progress = this.progress % 100;

    } else {
      throw Error("Invalid rank");
    }
  }
}


// best
/* 
class User {
  constructor (args) {
    this.rank = -8;
    this.progress = 0;
  }
  
  incProgress (rank) {
    if (!rank || rank > 8 || rank < -8) throw 'invalid rank';
    const d = rank - this.rank + -1 * Math.sign(rank) * (rank * this.rank < 0);
    this.progress += !d ? 3 : d === -1 ? 1 : d > 0 ? 10 * d * d : 0;
    while (this.progress >= 100) {
      this.rank++;
      if (!this.rank) this.rank++;
      this.progress -=100;
    }
    if (this.rank === 8) this.progress = 0;  
  }
}
*/