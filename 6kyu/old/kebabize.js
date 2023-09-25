/* 
6kyu - Kebabize
https://www.codewars.com/kata/57f8ff867a28db569e000c4a

Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
*/

function kebabize(str) {
  return str.replace(/[^a-z]/gi, '').replace(/(\B[A-Z])/g, (m) => '-' + m).toLowerCase();
}

console.log(kebabize('camelsHaveThreeHumps'), "camels-have-three-humps");
console.log(kebabize('CAMEL'), "c-a-m-e-l");
console.log(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');