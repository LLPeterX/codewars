/* 
6kyu - Master of Files
https://www.codewars.com/kata/574bd867d277832448000adf/train/javascript
*/

String.prototype.isAudio = function () {
  return /^[a-zA-Z]+\.(mp3|flac|alac|aac)$/.test(this);
};
String.prototype.isImage = function () {
  return /^[a-zA-Z]+\.(jpg|jpeg|png|bmp|gif)$/.test(this);
};

console.log("Nothing Else Matters.mp3".isAudio(), false, "Filename contains spaces")
console.log("NothingElseMatters.mp3".isAudio(), true)
console.log("DaftPunk.FLAC".isAudio(), false, "Extension may only be lower case")
console.log("DaftPunk.flac".isAudio(), true)
console.log("AmonTobin.aac".isAudio(), true)
console.log(" Amon Tobin.alac".isAudio(), false, "Filename contains spaces")
console.log("tobin.alac".isAudio(), true)
console.log("Home.jpg".isImage(), true)
console.log("flat.jpeg".isImage(), true)
console.log("icon.bmp".isImage(), true)
console.log("icon2.jpg".isImage(), false, "Filename contains a non-letter character")
console.log("bounce.gif".isImage(), true)
console.log("animate bounce.GIF".isImage(), false, "Extension not lower case")
console.log("transparency.png".isImage(), true)