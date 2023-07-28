/* 
6kyu - Hard Time Bomb
https://www.codewars.com/kata/52532cc8e9ea83b89b000008/train/javascript

A bomb has been set to go off! 
You have to find the wire and cut it in order to stop the timer. 
There is a global var that holds the numeric ID to which wire to cut.
Find that and then you can Bomb.CutTheWire(wireKey);
*/

/* 
1) Получаем список ключей объекта global.
2) Получаем исходный код класса вызовом Bomb.toString()
3) Видим, что значние ID находится в переменной boomN (N - случайное число)
4) Из ключей объекта global получаем тот, который начинается на 'boom'
*/

let k = Object.keys(global).filter(k => /^boom/.test(k))[0];
Bomb.CutTheWire(global[k]);