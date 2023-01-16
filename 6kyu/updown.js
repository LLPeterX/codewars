/* 
6kyu - up AND down
https://www.codewars.com/kata/56cac350145912e68b0006f0

Дана строка, состоящая из подстрок s(1), s(2), ..., s(n), разделенных пробелами.
Вернуть строку t при условии что 
length t(0) <= length t(1) >= length t(2) <= length t(3) >= length t(4) .... (P)
где t(i) - подстрока. 
Причем: на каждом шаге слева направо можно перемещать либо уже идущие подряд строки, 
либо строки, ставшие последовательными после предыдущего перемещения.

Пример для строки "after be arrived two My so"
1) "after" > "be". Поменяем местами: "be after arrived two My so"
2) "after" < "arrived". Меняем местами => "be arrived after two My so"
3) "after" > "two" => меняем "be arrived two after My so"
4) "after" > "My" => ничего не делаем
6) "My" = "so" => ничего не делаем
В результате должно получиться "be ARRIVED two AFTER my SO"


*/

function arrange(str) {
  let arr = str.split(' ');
  for (let i = 0; i < arr.length - 1; i++) {
    if (i % 2 === 0) { // greather
      if (arr[i].length > arr[i + 1].length) {
        let tmp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = tmp;
      }
    } else { // lesser
      if (arr[i].length < arr[i + 1].length) {
        let tmp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = tmp;
      }

    }
  }
  return arr.map((word, i) => i % 2 ? word.toUpperCase() : word.toLowerCase()).join(' ');
}

console.log(arrange("after be arrived two My so"), "be ARRIVED two AFTER my SO");
console.log(arrange("who hit retaining The That a we taken"), '=>', "who RETAINING hit THAT a THE we TAKEN"); // 3
console.log(arrange("on I came up were so grandmothers"), '=>', "i CAME on WERE up GRANDMOTHERS so"); // 4
console.log(arrange("way the my wall them him"), '=>', "way THE my WALL him THEM"); // 1
console.log(arrange("turn know great-aunts aunt look A to back"), '=>', "turn GREAT-AUNTS know AUNT a LOOK to BACK"); // 2

// best
/* 
function arrange(str) {
  var words = str.split(' ');
 
  for (var d = 1, j = 0, i = 1; i < words.length; i++) {
    if (d * words[j].length > d * words[i].length) {
      [words[j], words[i]] = [words[i], words[j]];
    }

    j = i;
    d = -d;
  } 

  return words
    .map((w, i) => w[i % 2 ? 'toUpperCase' : 'toLowerCase']())
    .join(' ');
}
*/