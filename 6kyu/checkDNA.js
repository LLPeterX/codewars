/* 
6kyu - DNA Sequence Tester
https://www.codewars.com/kata/56fbb2b8fca8b97e4d000a31/train/javascript
*/

function checkDNA (seq1, seq2) {
  const nucleotides = {
    A:'T',
    T: 'A',
    G: 'C',
    C: 'G'
  };
  let shorter, longer;
	if(seq1.length>seq2.length) {
    shorter = seq2;
    longer = seq1;
  } else {
    shorter = seq1;
    longer = seq2;
  }
  let revShorted = [...shorter].map((n)=>nucleotides[n]).reverse().join``;
  return longer.includes(revShorted);
}

console.log(checkDNA('GTCTTAGTGTAGCTATGCATGC','GCATGCATAGCTACACTACGAC'),false);
console.log(checkDNA('GCGCTGCTAGCTGATCGA','ACGTACGATCGATCAGCTAGCAGCGCTAC'),true);
console.log(checkDNA('CGATACGAACCCATAATCG','CTACACCGGCCGATTATGG'),false);
console.log(checkDNA('AGTCTGTATGCATCGTACCC','GGGTACGATGCATACAGACT'),true);
console.log(checkDNA('GTCACCGA','TCGGCTGAC'),false);
console.log(checkDNA('TAGCATCGCCAAATTATGCGTCAGTCTGCCCG','GGGCA'),true);

