/* 
5kyu - Extract the domain name from a URL
https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

Определить доменное имя из URL
*/

function domainName(url) {
  let [x, u] = url.split("//");
  if (!u) u = x;
  u = u.replace(/^(www|ftp|mailto)\./g, '');
  return u.split('.')[0];
}

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");

// best
/* 
function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
*/

/* 
function domainName(url){
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}
*/

/* 
const domainName = url =>
  url.replace(/.*\/\/|www.|\..*/g, ``);
* /

