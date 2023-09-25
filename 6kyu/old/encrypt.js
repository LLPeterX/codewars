/* 
6kyu - Encrypt this!
https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
*/

var encryptThis = (str) => {
  //console.log(str);
  return str.split(' ')
    .map(word => {
      let wl = word.length, ch1 = word.charCodeAt(0), ch2 = word[1];
      if (wl === 1) return "" + ch1;
      if (wl === 2) return ch1 + ch2;
      return ch1 + word.slice(-1) + word.slice(2, wl - 1) + ch2;
    })
    .join(' ');
};

console.log(encryptThis("A"), "65");
console.log(encryptThis("A wise old owl lived in an oak"), "65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
console.log(encryptThis("The more he saw the less he spoke"), "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp");
console.log(encryptThis("The less he spoke the more he heard"), "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare");
console.log(encryptThis("Why can we not all be like that wise old bird"), "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri");
console.log(encryptThis("Thank you Piotr for all your help"), "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple")

//best
/*
const encryptThis = text => text
  .split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');

*/

/*
const encryptWord = w => {
  const first = w.charCodeAt(0);
  let res;
  switch (w.length) {
    case 0: return '';
    case 1: return first;
    case 2: res = [first, w[1]]; break;
    case 3: res = [first, w[2], w[1]]; break;
    default: res = [first, w.slice(-1), w.slice(2,-1), w[1]]; break;
  }
  return res.join('');
};

const encryptThis = text => text.split(' ').map(encryptWord).join(' ');
*/