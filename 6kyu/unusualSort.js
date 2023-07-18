/* 
6kyu - UN-usual Sort
https://www.codewars.com/kata/5443b8857fc4473cb90008e4/train/javascript

дан массив из строк и чисел.
отстриторовать так, чтобы буквы шли первыми.
Затем числа. Причем если есть одинаковые стороковые и целые ('1' и '1'),
то целые должны идти перед строковыми

[3,"3","2",2,"2","1",1,"a","b","c"]),["a","b","c",1,"1",2,"2","2",3,"3"]
=>
'['a', 'b', 'c', 1, '1', 2, '2', '2', 3, '3']
*/

// сначала сортируем буквы,
// затем добавляем цифры.
// Чтобы числа следовали за строками, преобразуем строковые в n+1
// function unusualSort(arrayOfChars) {
//   return arrayOfChars
//     .filter(c => /\D/i.test(c))
//     .sort()
//     .concat(
//       arrayOfChars
//         .filter(c => /[\d]/.test(c))
//         .sort((a, b) => (Number.isInteger(a) ? a * 10000 : a * 10000 + 1) - (Number.isInteger(b) ? b * 10000 : b * 10000 + 1))
//     )
// }

function unusualSort(arrayOfChars) {
  return [
    ...arrayOfChars
      .filter(c => /\D/i.test(c))
      .sort(),
    ...arrayOfChars
      .filter(c => /[\d]/.test(c))
      .sort((a, b) => (Number.isInteger(a) ? a * 10000 : a * 10000 + 1) - (Number.isInteger(b) ? b * 10000 : b * 10000 + 1))
  ];
}



// best
/* 
const unusualSort = arrayOfChars => {
  const sorted = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,'0',1,'1',2,'2',3,'3',4,'4',5,'5',6,'6',7,'7',8,'8',9,'9'];
  return arrayOfChars.sort((a,b)=>sorted.indexOf(a) - sorted.indexOf(b));
}
*/