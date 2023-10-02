/* 
7kyu - Decompose single strand DNA into 3 reading frames
https://www.codewars.com/kata/57507369b0b6d1b5a60001b3/train/javascript
*/

function decomposeSingleStrand(singleStrand) {
  let result = [];
  for (let i = 0; i < 3; i++) {
    let m = singleStrand.slice(i).match(/.{3}/g);
    let row = `Frame ${i + 1}: `;
    if (i) {
      row += `${singleStrand.slice(0, i)} ${m.join(' ')} ${singleStrand.slice(i - 3)}`;
    } else row += m.join(' ')
    //    row += i ? `${singleStrand.slice(0, i)} ${m.join(' ')} ${singleStrand.slice(i - 3)}` : m.join(' ');
    result.push(row);
  }
  return result.join('\n');
}

console.log(decomposeSingleStrand("AGGTGACACCGCAAGCCTTATATTAGC"), "\n=>\n", "Frame 1: AGG TGA CAC CGC AAG CCT TAT ATT AGC\nFrame 2: A GGT GAC ACC GCA AGC CTT ATA TTA GC\nFrame 3: AG GTG ACA CCG CAA GCC TTA TAT TAG C")

// best
/* 
function decomposeSingleStrand(singleStrand) {
  return [
    `Frame 1: ${singleStrand.match(/.../g).join(' ')}`,
    `Frame 2: ${singleStrand.match(/^.|...|..$/g).join(' ')}`,
    `Frame 3: ${singleStrand.match(/^..|...|.$/g).join(' ')}`,
  ].join('\n');
}
*/