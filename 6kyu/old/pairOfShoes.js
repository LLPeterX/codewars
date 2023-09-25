/* 
6kyu - Simple Fun #52: Pair Of Shoes
https://www.codewars.com/kata/58885a7bf06a3d466e0000e3/train/javascript

Your task is to check whether it is possible to pair the shoes you found in such a way 
that each pair consists of a right and a left shoe of an equal size.
*/

function pairOfShoes(shoes) {
  let count = 0, len = shoes.length;
  while (shoes.length) {
    let sh = shoes.pop();
    let i = shoes.findIndex(shoe => shoe[0] === 1 - sh[0] && shoe[1] === sh[1]);
    if (i >= 0) {
      count++;
      shoes.splice(i, 1);
    }
  }
  return count * 2 == len;
}

function doTest(arr, result) {
  let v = pairOfShoes(arr);
  console.log(v, result);
}

doTest([[0, 20], [0, 21], [1, 19], [1, 22]], false);
doTest([[0, 21], [1, 23], [1, 21], [0, 23]], true);
doTest([[0, 23], [1, 23], [1, 23], [0, 23], [0, 23], [0, 23]], false);
doTest([[0, 21], [1, 23], [1, 21], [1, 23]], false);
doTest([[0, 23], [1, 21], [1, 23], [0, 21], [1, 22], [0, 22]], true);
doTest([[0, 23], [1, 21], [1, 23], [0, 21]], true);
doTest([[0, 23], [1, 21], [1, 23], [0, 21]], true);
doTest([[0, 23]], false);
doTest([[0, 23], [1, 23]], true);
doTest([[0, 23], [1, 22]], false);