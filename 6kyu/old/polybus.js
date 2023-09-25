/* 
6kyu - Polybius square cipher - encode
https://www.codewars.com/kata/542a823c909c97da4500055e/train/javascript
*/

function polybius(text) {
  let cipher = Array(26)
    .fill()
    .map((_, i) => String.fromCharCode(65 + i))
    .filter(v => v != 'J')
    .reduce((obj, v, i) => ({ ...obj, [v]: "" + (~~(i / 5) + 1) + (i % 5 + 1) }), { 'J': '24', ' ': ' ' })
  return [...text].map(v => cipher[v]).join('');
}

console.log(polybius('A')); // '11'
console.log(polybius('IJ')); // '11'
console.log(polybius('CODEWARS'), '1334141552114243'); // '1334141552114243'
console.log(polybius('POLYBIUS SQUARE CIPHER'), '3534315412244543 434145114215 132435231542');


// best
/*
function polybius (text) {
  return text.replace(/[A-Z]/g, function(l) {
    var v = l.charCodeAt(0) - 65;
    if(l>'I') v -= 1;
    return '' + (1 + Math.floor(v / 5)) + (1 + v % 5);
  });
}
*/

/*
function polybius (text) {
 return text.split(' ').map(v=>v.split('').map(v=>cipher[v]).join('')).join(' ')
}
const cipher={A:11,B:12,C:13,D:14,E:15,F:21,G:22,H:23,I:24,J:24,K:25,
L:31,M:32,N:33,O:34,P:35,Q:41,R:42,S:43,T:44,U:45,V:51,W:52,X:53,Y:54,Z:55}
*/

/*
function polybius (text) {
    return text.replace(/\S/g,function(i){
        i=i.charCodeAt(0)-60;
        13<i&&i--;
        return 1+i+i-i%5;
    });
}
*/