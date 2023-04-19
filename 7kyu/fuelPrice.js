/* 
8kyu - Fuel Calculator: Total Cost
https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript

В этом ката вам нужно будет написать функцию, которая принимает литры 
и цену за литр (в долларах) в качестве аргументов. 

- При покупке 2 и более литров скидка 5 центов за литр, 
- при покупке 4 и более литров скидка 10 центов за литр, 
  и так далее каждые два литра, до максимальной скидки 25 центов за литр. 

 Но общая скидка за литр не может быть больше 25 центов. 
 Верните общую стоимость, округленную до 2 знаков после запятой. 
 
 */

function fuelPrice(litres, pricePerLiter) {
  for (var i = 2; i <= 10; i += 2) { //discount loop
    if (litres >= i) {
      pricePerLiter -= 0.05;
    }
  }
  return Math.round(litres * pricePerLiter * 100) / 100;;
}

console.log(fuelPrice(5, 1.23), 5.65);
console.log(fuelPrice(8, 2.5), 18.40);
console.log(fuelPrice(5, 5.6), 27.50);
console.log(fuelPrice(47, 4.19), 185.18); // !