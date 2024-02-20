/* 
7kyu - Order of weight
https://www.codewars.com/kata/59ff4709ba2a14501500003a/train/javascript

*/

function getWeight(str) {
  let [, w, unit] = str.match(/(\d+)(\D+)/);
  return w * ({ G: 1, KG: 1000, T: 1000000 }[unit]);
}
function arrange(arr) {
  return arr.sort((a, b) => getWeight(a) - getWeight(b));
}

console.log(arrange(["200G", "300G", "150G", "100KG"]), ["150G", "200G", "300G", "100KG"])
console.log(arrange(["400G", "100T", "150KG", "100G"]), ["100G", "400G", "150KG", "100T"])
console.log(arrange(["4T", "300G", "450G", "900KG"]), ["300G", "450G", "900KG", "4T"])
console.log(arrange(["400T", "100T", "1T", "100G"]), ["100G", "1T", "100T", "400T"])
console.log(arrange(["1G", "2KG", "3T", "100KG"]), ["1G", "2KG", "100KG", "3T"])
console.log(arrange(["100KG", "100G", "150T", "150KG"]), ["100G", "100KG", "150KG", "150T"])