/* 
8kyu 

*/
function howMuchILoveYou(nbPetals) {
  // const phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
  // let k = (nbPetals-1)%6;
  // return phrases[k];
  return ["I love you", "a little", "a lot", "passionately", "madly", "not at all"][(nbPetals-1)%6];
}

console.log(howMuchILoveYou(7), "I love you");
console.log(howMuchILoveYou(3), "a lot");
console.log(howMuchILoveYou(6), "not at all");
/* 
best:
можно переставить элементы массива и использовать просто [nbPetals%6]
а так мое решение заебись.
*/