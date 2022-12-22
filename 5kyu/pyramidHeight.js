/* 
5kyu - Calculate Pyramid Height
https://www.codewars.com/kata/56968ce7753513604b000055

Your task is to calculate the maximum possible height of a perfectly square pyramid 
(the number of complete layers) that we can build, given n number of cubes as the argument.

* The top layer is always only 1 cube and is always present.
* There are no hollow areas, meaning each layer must be fully populated with cubes.
* The layers are thus so built that the corner cube always covers the inner 25% 
   of the corner cube below it and so each row has one more cube than the one below it.

If you were given only 5 cubes, the lower layer would have 4 cubes and the top 1 cube 
would sit right in the middle of them, where the lower 4 cubes meet.

If you were given 14 cubes, you could build a pyramid of 3 layers, 
but 13 wouldn't be enough as you would be missing one cube, 
so only 2 layers would be complete and some cubes left over!

What is the tallest pyramid possible we can build from the given number of cubes? Simply return the number of complete layers.
*/

function pyramidHeight(n) {
  const levels = [];
  for (let i = 1, count = 1; count <= n; i++, count += i ** 2) {
    levels.push(count);
  }
  let x = levels.findIndex(x => x > n);
  x += (x < 0) ? levels.length - 1 + 2 : x + 2;
  return x;
}

console.log(pyramidHeight(1), 1);
console.log(pyramidHeight(4), 1);
console.log(pyramidHeight(5), 2);
console.log(pyramidHeight(13), 2);
console.log(pyramidHeight(14), 3);
console.log(pyramidHeight(1240), 15);

// best
/* 
var pyramidHeight = function(n){
  let root = ~~((n * 3) ** (1/3));
  
  return root * (root + 1) * (2*root+1) <= 6*n ? root : root-1;
}
*/

/* 
var pyramidHeight = function(n){
  for (var i=1,rs=0;rs<=n;i++) rs+=i*i;
  return i-2;
}
*/

/* 
function pyramidHeight(n)
{
  var layers = 0;
  var num = 0;
  var count = 0;
  while (num < n)
  {
    count++;
    num += count*count;
    if (num <= n) layers++;
  }
  return layers;
  
*/