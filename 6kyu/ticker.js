/* 
6kyu - Ticker
https://www.codewars.com/kata/5a959662373c2e761d000183/train/javascript

Бегущая строка справа налево. В каждом цикле выводится одна буква.

Дано:
 - text: отображаемый текст
 - width: ширина табло
 - tick: порядковый номер цикла

Вернуть то, что будет на экране после tick циклов.

В начале экран пустой. На первом tick появаляется первая буква с крайней правой позиции.
Когда отображена вся строка, исчезает символ за символом, пока табло не станет полностью пустым.
Затем цикл начинается снова.
*/

const ticker = (text, width, tick, str = ' '.repeat(width) + text) => str.slice(tick % str.length, tick % str.length + width).padEnd(width);



console.log(ticker('Beautiful is better than ugly.', 10, 0), '=>', '|          |')
console.log(ticker('Beautiful is better than ugly.', 10, 5), '=>', '|     Beaut|')
console.log(ticker('Beautiful is better than ugly.', 10, 6), '=>', '|    Beauti|')
console.log(ticker('Beautiful is better than ugly.', 10, 30), '=>', '|than ugly.|')
console.log(ticker('Beautiful is better than ugly.', 10, 39), '=>', '|.         |')
console.log(ticker('Beautiful is better than ugly.', 10, 41), '=>', '|         B|')
