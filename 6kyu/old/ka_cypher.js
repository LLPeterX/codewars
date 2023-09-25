/* 
6kyu - Ka Ka Ka cypher - words only vol 1
https://www.codewars.com/kata/5934d648d95386bc8200010b
*/

function kaCokadekaMe(word) {
  const vowels = "aieouAIEOU";
  let result = "ka";
  let isVowel = false;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      result += word[i];
      isVowel = true;
    } else {
      if (isVowel) {
        result += 'ka';
      }
      result += word[i];
      isVowel = false;
    }
  }
  return result;
}

console.log(kaCokadekaMe('a'));
console.log(kaCokadekaMe('z'), 'kaz');
console.log(kaCokadekaMe('ka'));
console.log(kaCokadekaMe('Abbaa'), "kaAkabbaa");
console.log(kaCokadekaMe('maintenance') === "kamaikantekanakance");
console.log(kaCokadekaMe('Incomprehensibilities') === "kaIkancokamprekahekansikabikalikatiekas");

// best
/* 
kaCokadekaMe=w=>'ka'+w.match(/([^aeiou]*[aeiou]+|[^aeiou]+$)/gi).join('ka');
*/

