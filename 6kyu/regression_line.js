/* 
6kyu - Linear Regression of Y on X
https://www.codewars.com/kata/5515395b9cd40b2c3e00116c/train/javascript

linear regression line has an equation in the form Y = a + bX
where X is the explanatory variable, Y - is the dependent variable. 
The parameter "b: represents the slope of the line, 
while "a" is called the intercept (the value of y when x = 0)


The function that you have to write accepts two list/array, x and y, 
representing the coordinates of the points to regress 
(so that, for example, the first point has coordinates (x[0], y[0])).

Your function should return  an array of two elements: 
a (intercept) and b (slope) in this order.

You must round your result to the first 4 decimal digits
*/

function regression_line(x, y) {
  let sumx2 = 0, sumy = 0, sumx = 0, sumxy = 0;
  let n = x.length;
  for (let i = 0; i < n; i++) {
    sumx += x[i];
    sumy += y[i];
    sumxy += x[i] * y[i];
    sumx2 += x[i] * x[i];
  }
  let a = (sumx2 * sumy - sumx * sumxy) / (n * sumx2 - sumx ** 2),
    b = (n * sumxy - sumx * sumy) / (n * sumx2 - sumx ** 2);
  return [+a.toFixed(4), +b.toFixed(4)];
}

console.log(regression_line([25, 30, 35, 40, 45, 50], [78, 70, 65, 58, 48, 42]), [114.381, -1.4457])
console.log(regression_line([56, 42, 72, 36, 63, 47, 55, 49, 38, 42, 68, 60], [147, 125, 160, 118, 149, 128, 150, 145, 115, 140, 152, 155]), [80.7777, 1.138])
