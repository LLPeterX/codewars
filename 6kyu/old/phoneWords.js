/* 
6kyu - Phone Words
https://www.codewars.com/kata/635b8fa500fba2bef9189473/train/javascript

Given a string of numbers, you must perform a method in which you will translate this string into text, 
based on the below image:
0 - пробел
1 - ничего
2- abc
3 - def
4-ghi
5-jkl
6-mno
7-pqrs
8-tuv
9-wxyz

*/
function phoneWords(stringOfNums) {
  if (!stringOfNums) return "";
  //             0   1    2      3      4      5      6      7       8      9
  const keys = [' ', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const press = [[stringOfNums[0], 0]];
  for (let i = 1, j = 0; i < stringOfNums.length; i++) {
    if (stringOfNums[i] === press[j][0]) {
      press[j][1]++;
    } else {
      press.push([stringOfNums[i], 0]);
      j++;
    }
  }
  let result = "";
  for (let i = 0; i < press.length; i++) {
    let [digit, count] = press[i], keyLetters = keys[digit], L = keyLetters.length;
    if (digit === '1') continue;
    if (count < L) {
      result += keyLetters[count];
    } else {
      result += keyLetters[L - 1].repeat(Math.floor(count / L));
      result += keyLetters[count % L];
    }
  }
  return result;
}

console.log(phoneWords("777777"), "sq"); // 'pqrs'
console.log(phoneWords("443355555566604466690277733099966688"), "hello how are you")
console.log(phoneWords("55282"), "kata")
console.log(phoneWords("44460208337777833777"), "im a tester")
console.log(phoneWords("22266631339277717777"), "codewars")
console.log(phoneWords("66885551555"), "null")
console.log(phoneWords("833998"), "text")
console.log(phoneWords("000"), "   ")
console.log(phoneWords("7999844666166"), "python")
console.log(phoneWords("55886444833"), "kumite")
console.log(phoneWords("271755533"), "apple")
console.log(phoneWords(""), "")
console.log(phoneWords("111"), "")

// best

/* 
function phoneWords(stringOfNums) {  
  const keys = [' ', ,'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const regexp = /2{1,3}|3{1,3}|4{1,3}|5{1,3}|6{1,3}|7{1,4}|8{1,3}|9{1,4}|0{1}/g;    
  let result = '';  
  
  stringOfNums.match(regexp)?.map(nums => {
    const key = keys[nums[0]];
    const letter = nums.length-1;  
    result += key[letter];
  }); 
  
  return result;
}
*/

/* 
function phoneWords(str) {
  const hash = {
    2 : 'abc',
    3 : 'def', 
    4 : 'ghi',
    5 : 'jkl',
    6 : 'mno',
    7 : 'pqrs',
    8 : 'tuv', 
    9 : 'wxyz',
  }
  
  let word = ''
  
  for(let i = 0; i < str.length; i++){
    const c = str[i]
    
    if(c === '0') word += ' '
    else if(c !== '1'){
      let n = 1
      while(c === str[i+n]) n++
      n = Math.min(hash[c].length, n)
      word += hash[c][n-1]
      i += n-1
    }
  }
  
  return word
}
*/

/* 
const KEYPAD = ' -_-abc-def-ghi-jkl-mno-pqrs-tuv-wxyz'.split`-`;

const phoneWords = str =>
  (str+'19').match(/([2-68])\1{0,2}|([79])\2{0,3}|0/g)
            .map(key => KEYPAD[key[0]][key.length-1])
            .join``.slice(0, -1);
*/