/* 
7kyu - Page replacement algorithms: FIFO
https://www.codewars.com/kata/62d34faad32b8c002a17d6d9/train/javascript

В компьютерной операционной системе, использующей подкачку для управления виртуальной памятью, 
алгоритмы замены страниц решают, какие страницы памяти выгружать, когда необходимо выделить страницу памяти. 
Замена страницы происходит, когда запрошенная страница отсутствует в памяти (page fault) 
или объем памяти < некоторого порога.
Страницы заменяются методом FIFO: все страницы хранятся в очереди - самые свежие в конце, самые старые - в начале.
При замене страницы выбирается самая старая страница.
Страница, уже находящаяся в очереди, не помещается в конец очереди при повторном обращении к ней.

Написать функцию fifo(). Параметры:
 - n: макс. число страниц, которое может вместися в памяти
 - referenceList: список ID запрашиваемых страниц
 Вернуть состояние памяти.

 * После вставки страницы в память, она остается в той же позиции до тех пор, пока не будет page fault (страница не найдена)
*/

function fifo(n, referenceList) {
  const memory = Array(n).fill(-1);
  for (let i = 0, j = 0; i < referenceList.length; i++) {
    let page = referenceList[i];
    let k = memory.indexOf(page);
    if (k < 0) {
      memory[(j++) % n] = page;
    }
  }
  return memory;
}

function doTest(n, refs, answer) {
  console.log(fifo(n, refs), '=>', answer);
}

doTest(3, [1, 2, 3, 4, 2, 5], [4, 5, 3]);
doTest(5, [], [-1, -1, -1, -1, -1]);
doTest(4, [1, 2, 3, 3, 4, 5, 1], [5, 1, 3, 4]); // FAIL
doTest(4, [1, 1, 1, 2, 2, 3], [1, 2, 3, -1]);