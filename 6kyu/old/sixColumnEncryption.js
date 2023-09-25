/* 
6kyu - Simple Fun #133: Six Column Encryption
https://www.codewars.com/kata/58a65945fd7051d5e1000041/train/javascript

Вы берете сообщение и помещаете его в матрицу nx6 
(количество строк регулируется в зависимости от длины сообщения), 
двигаясь сверху слева направо (по одной строке за раз), 
заменяя пробелы точками (.) и добавляя точки в конце чтобы заполнить матрицу.

Как только сообщение находится в матрице, вы снова читаете сверху слева направо, 
но на этот раз идете по одному столбцу за раз и рассматриваете каждый столбец как одно слово.
*/

function sixColumnEncryption(msg) {
  const matrix = Array(6).fill().map(_ => Array(Math.ceil(msg.length / 6)).fill('.'));
  for (let i = 0; i < msg.length; i++) {
    let col = Math.floor(i / 6);
    let row = i % 6;
    matrix[row][col] = (msg[i] === ' ') ? '.' : msg[i];
  }
  return matrix.map(row => row.join``).join(' ');
}

console.log(sixColumnEncryption("Attack at noon or we are done for"), "A.ow.f tanedo tt..or a.oan. cnrre. ko.e..")
console.log(sixColumnEncryption("Let's kill them all"), "Lkhl eie. tlm. 'l.. s.a. .tl.")
console.log(sixColumnEncryption("Meet me behind the kitchen tomorrow at seven in the evening"), "Men.eoaete e.dknrtnhn eb.i.r..ei tetttosi.n .hhcoweneg miehm.v.v.")

// best
/* 
function sixColumnEncryption(msg) {
  const cols = ["", "", "", "", "", ""]
  for (let i = 0; i < msg.length; ++i) {
    cols[i % 6] += msg[i] === " " ? "." : msg[i]
  }
  for (let i = 1; i < 6; ++i) {
    cols[i] += ".".repeat(cols[0].length - cols[i].length)
  }
  return cols.join(" ")
}
*/