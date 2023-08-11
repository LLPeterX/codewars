/* 
7kyu - Color to Grayscale
https://www.codewars.com/kata/649c4012aaad69003f1299c1

Grayscale colors in RGB color model are colors that have the same values
for Red, Green and Blue. For example, #606060 is a grayscale color, while #FF0055 is not.

In order to correctly convert a color to grayscale, one has to use 
luminance Y for Red, Green and Blue components. 
One can calculate luminance Y through the formula introduced in the NTSC standard:

Y = 0.299 * R + 0.587 * G + 0.114 * B

This formula closely represents the average person's relative 
perception of the brightness of red, green, and blue light.

Given a color in 6-digit hexidecimal notation #RRGGBB in upper case, 
convert it to grayscale #YYYYYY. 
The answer should be a string representing the color code 
in 6-digit hexidecimal notation in upper or lower case.

Round the value of luminance Y to the closest integer.
*/

// function rgbToGrayscale(color) {
//   let coeff = [0.299, 0.587, 0.114];
//   let y = Math.round(color.match(/#(.{2})(.{2})(.{2})/).slice(1, 4).reduce((s, v, i) => s + parseInt(v, 16) * coeff[i], 0)).toString(16);
//   return '#' + (y.padStart(2, '0').repeat(3));
// }

//const rgbToGrayscale = (color) => '#' + (Math.round(color.match(/#(.{2})(.{2})(.{2})/).slice(1, 4).reduce((s, v, i) => s + parseInt(v, 16) * [0.299, 0.587, 0.114][i], 0)).toString(16).padStart(2, '0').repeat(3));


// final stupid variant
const rgbToGrayscale = (color) => '#' + (Math.round(color.slice(1).match(/(.{2})/g).reduce((s, v, i) => s + parseInt(v, 16) * [0.299, 0.587, 0.114][i], 0)).toString(16).padStart(2, '0').repeat(3));


console.log(rgbToGrayscale("#FFFFFF"), '#FFFFFF')
console.log(rgbToGrayscale("#0000FF"), '#1D1D1D')
console.log(rgbToGrayscale("#00FF00"), '#969696')
console.log(rgbToGrayscale("#FF0000"), '#4C4C4C')
console.log(rgbToGrayscale("#000000"), '#000000', "Make sure your solution does zero padding!") 