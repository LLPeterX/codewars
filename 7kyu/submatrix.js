/* 
7kyu - Simple Fun #235: Construct Submatrix
https://www.codewars.com/kata/590818ddffa0da26ad00009b/train/javascript

Даны:
1)  матрица NxM
2) массив удаляемых строк
3) массив удаляемых столбцов
Вернуть результат
Ошибка: если удляются строки, 
 */
function showMatrix(m) {
  let res = "";
  for(let i=0; i<m.length; i++) {
    let row=m[i].map(v=>v!=null ? ""+v : "x").join("")+"\n";
    res += row;
  }
  return res;
}

function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
  // mark & delete rows
  let W = matrix[0].length;
  for(let row of rowsToDelete)  {
    matrix[row].push('D');
  }
  matrix = matrix.filter(row => row[W]!=='D');
  if(!matrix[0]) return [];
  for(let col of columnsToDelete) {
    for(let j=0; j<matrix.length; j++) {
      matrix[j][col] = 'D';
    }
  }
  return matrix.map(row => row.filter(col=>col!='D'));
}

 let m =  [[1,0,0,2], [0,5,0,1], [0,0,3,5]];
console.log(constructSubmatrix(m,[1],[0, 2])); //  [[0,2], [0,5]]
m= [[1,0,0,2],  [0,5,0,1],  [0,0,3,5] ];
console.log(constructSubmatrix(m,[],[0])); //  [0,0,2], [5,0,1], [0,3,5]]
console.log(constructSubmatrix([[1]],[],[])); //  [[1]]
console.log(constructSubmatrix([[1]],[],[0])); //  [[]]
console.log(constructSubmatrix([[1]],[0],[0])); //  [] - тут я нихуя не понял. Если в матрице ничего не остается - что вернуть?

// best
/* 
function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
  return matrix
    .map(row => row.filter((_, i) => !columnsToDelete.includes(i)))
    .filter((_, i) => !rowsToDelete.includes(i))
}
*/