/* 
5kyu - Land perimeter
https://www.codewars.com/kata/5839c48f0cf94640a20001d3
*/

function landPerimeter(arr) {
  const a = arr.map(row => row.split('').map(cell => cell === 'X' ? 4 : 0));
  const height = a.length, width = a[0].length;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (a[row][col] != 0) {
        if (col < width - 1 && a[row][col + 1] > 2) {
          --a[row][col];
          --a[row][col + 1];
        }
        if (row < height - 1 && a[row + 1][col] > 2) {
          --a[row][col];
          --a[row + 1][col];
        }
      }
    }
  }
  return `Total land perimeter: ${a.reduce((sum, row) => sum + row.reduce((sum, v) => sum + v, 0), 0)}`;
}


console.log(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]), "Total land perimeter: 60");
console.log(landPerimeter(["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"]), "Total land perimeter: 52");
console.log(landPerimeter(["XXXXXOOO", "OOXOOOOO", "OOOOOOXO", "XXXOOOXO", "OXOXXOOX"]), "Total land perimeter: 40");
console.log(landPerimeter(["XOOOXOO", "OXOOOOO", "XOXOXOO", "OXOXXOO", "OOOOOXX", "OOOXOXX", "XXXXOXO"]), "Total land perimeter: 54");
console.log(landPerimeter(["OOOOXO", "XOXOOX", "XXOXOX", "XOXOOO", "OOOOOO", "OOOXOO", "OOXXOO"]), "Total land perimeter: 40");

// best

/*
function landPerimeter(arr) {
  let count = 0;
  for(let y=0; y<arr.length; y++) {
    for(let x=0; x<arr[0].length; x++) {
      if(arr[y][x] === "X") {
        if(y === 0               || arr[y-1][x] !== "X") count++;
        if(y === arr.length-1    || arr[y+1][x] !== "X") count++;
        if(x === 0               || arr[y][x-1] !== "X") count++;
        if(x === arr[0].length-1 || arr[y][x+1] !== "X") count++;
      }
    }
  }
  return "Total land perimeter: " + count;
}
*/

// cool
/* 
landPerimeter=a=>`Total land perimeter: ${a.reduce((b,c,d)=>b+c.split``.reduce((b,c,e)=>b+(c=='X'&&[[-1,0],[0,-1],[0,1],[1,0]].reduce((b,[c,f])=>b+ +!(a[d+c]&&a[d+c][e+f]=='X'),0)),0),0)}`
*/