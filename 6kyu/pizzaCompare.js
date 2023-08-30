/* 
6kyu - Pizza Pi Parsimony
https://www.codewars.com/kata/58e2bce4541906541c000052/train/javascript

Вам нужна программа, которая будет проверять, какая пицца является лучшей по размеру.
Функция принимает массив объектов {size, diameter, price} (м.б. еще свойство coupon).

Вам нужно выяснить цену за квадратный дюйм каждой пиццы и выяснить, что является лучшим предложением. 
Если несколько размеров имеют одинаковую цену за квадратный дюйм, следует вернуть наименьший размер из этой группы.
Для сравнения цену за квадратный дюйм следует округлить до ближайшего цента (доллар до двух знаков после запятой)
Для оценки размера следует брать диаметр.

*/

/*
function pizzaCompare(menu) {
  const menu1 = menu.map(a => ({
    ...a, ppi: Math.floor(((a.price - (a.coupon || 0)) / (Math.PI * a.diameter ** 2 / 4)) * 100) / 100,
  }));
  menu1.sort((a, b) => a.ppi == b.ppi ? a.diameter - b.diameter : a.ppi - b.ppi);
  //console.log(menu1);
  //let sizeOfBestDeal = menu1[0].size;
  //return "The best deal is the " + sizeOfBestDeal + "!";
  return `The best deal is the ${menu1[0].size}!`;
}
*/
// final:
function pizzaCompare(menu) {
  const menu1 = menu.map(a => ({ ...a, ppi: ~~(((a.price - (a.coupon || 0)) / (Math.PI * a.diameter ** 2 / 4)) * 100) / 100, }))
    .sort((a, b) => a.ppi == b.ppi ? a.diameter - b.diameter : a.ppi - b.ppi);
  return `The best deal is the ${menu1[0].size}!`;
}

console.log(pizzaCompare(
  [{ size: "extra large", diameter: 14, price: 21.35 },
  { size: "large", diameter: 12, price: 18.56 },
  { size: "medium", diameter: 10, price: 15.08 },
  { size: "small", diameter: 8, price: 12.06 }
  ]), "The best deal is the extra large!");

console.log(pizzaCompare(
  [{ size: 'small', diameter: 8, price: 10.06, coupon: 3 },
  { size: 'large', diameter: 10, price: 14, coupon: 2 },
  { size: 'gut buster', diameter: 17, price: 24.17 },
  { size: 'princess', diameter: 6, price: 10.06, coupon: 5 },
  { size: 'medium', diameter: 10, price: 14.15, coupon: 5 },
  { size: 'triple dog dare', diameter: 19, price: 32.17 }
  ]), "The best deal is the gut buster!");

console.log(pizzaCompare(
  [{ size: 'media', diameter: 10.5, price: 10.66 },
  { size: 'grande', diameter: 14, price: 17.76, coupon: 2 },
  { size: 'piccola', diameter: 8.3, price: 7.99, coupon: 2.50 },
  { size: 'gigante', diameter: 16, price: 21.12 }
  ]), "The best deal is the piccola!");
