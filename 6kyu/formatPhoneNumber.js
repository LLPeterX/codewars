/* 
6kyu - Format phone number by template
https://www.codewars.com/kata/61393fd03e441f001ac9c7d4

You need to write a function that will format a phone number by a template.

You're given number and string.

* If there are more digits than needed, they should be ignored
* if there are less digits than needed, should return Invalid phone number

*/

function formatNumber(number, template) {
  let str = "" + number;
  if (str.length < template.match(/#/g)?.length) {
    return "Invalid phone number";
  }
  let out = "";
  for (let i = 0, j = 0; i < template.length; i++) {
    out += template[i] === '#' ? str[j++] : template[i];
  }
  return out;
}

console.log(formatNumber(79052479075, "+# ### ### ## ##"), "+7 905 247 90 75");
console.log(formatNumber(79052479075, "+# (###) ### ##-##"), "+7 (905) 247 90-75");
console.log(formatNumber(79052479075, "+# ### ### ## ##"), "+7 905 247 90 75");
console.log(formatNumber(81237068908090, "+## ### ### ## ##"), "+81 237 068 90 80");
console.log(formatNumber(8123706890, "+## ### ### ##-##"), "Invalid phone number");
console.log(formatNumber(911, "###"), "911");
console.log(formatNumber(112, "+ () -"), "+ () -");

// best

/* 
function formatNumber(number, template) {
  let s = [...""+number]
  return template.replace(/[^#]/g, "").length > s.length ? "Invalid phone number" : template.replace(/#/g, x => s.shift())
}
*/

/* 
function formatNumber(n, r) {
  for ( let c of n.toString() ) r = r.replace('#', c);
  return r.includes('#') && "Invalid phone number" || r;
}
*/