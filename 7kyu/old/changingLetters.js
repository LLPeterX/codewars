/* 
7kyu - Changing letters
https://www.codewars.com/kata/5831c204a31721e2ae000294/train/javascript

When provided with a String, capitalize all vowels

Vowels: 'aeiouy'

*/


function swap(string) {
  return [...string].map(e => 'aeiou'.includes(e) ? e.toUpperCase() : e).join``;
}

const doTest = (s1, s2) => console.log(swap(s1), s2);

doTest("", "");
doTest("   @@@", "   @@@");
doTest("HelloWorld!", "HEllOWOrld!");
doTest("Sunday", "SUndAy");
doTest("Codewars", "COdEwArs");
doTest("Monday", "MOndAy");
doTest("Friday", "FrIdAy");
doTest("abracadabra", "AbrAcAdAbrA");
doTest("AbrAcAdAbrA", "AbrAcAdAbrA");
doTest("ABRACADABRA", "ABRACADABRA");
doTest("aBRaCaDaBRa", "ABRACADABRA");

// best
/* 
function swap(st){
  return st.replace(/[aeiou]/g, v => v.toUpperCase() )
}/
*/