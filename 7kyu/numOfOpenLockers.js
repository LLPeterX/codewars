/* 
7kyu - Strange principal
https://www.codewars.com/kata/55fc061cc4f485a39900001f/train/javascript

В старшей школе странный директор. В первый день он предлагает своим ученикам 
провести странную церемонию открытия: 

В школе есть N шкафчиков и столько же учеников. 
Директор просит первого ученика открыть все шкафчики. 
Затем он просит второго ученика открыть каждый второй шкафчик. 
Третий подходит к каждому третьему шкафчику и, если он закрыт, открывает его, а если открыт, то закрывает. 
Четвертый студент делает то же с каждым четвертым шкафчиком и так далее. 

Сколько шкафчиков открыто после завершения процесса с N-м учеником? 

Написать функцию, которая получает на вход любое число и возвращает количество 
открытых шкафчиков после того, как последний ученик завершит свою деятельность. 
Таким образом, ввод функции N — это одно число, которое показывает количество шкафчиков и количество студентов.
Например, если в школе 1000 шкафчиков и 1000 учеников, тогда ввод равен 1000, 
и функция возвращает количество открытых шкафчиков после того, как 1000-й ученик завершит свое действие. 
N>=0

*/

const numOfOpenLockers = (n) => ~~Math.sqrt(n);

console.log(numOfOpenLockers(4521), 67);
console.log(numOfOpenLockers(203), 14);

// other
/* 
function numOfOpenLockers(n){
  let num = 0;
  for(let i = 1;i <= n; i++){
  if(i*i > n) break;
    num = i;    
  }
  return num
}
*/