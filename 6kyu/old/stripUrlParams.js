/* 
6kyu - Strip Url Params
https://www.codewars.com/kata/51646de80fd67f442c000013/train/javascript

Complete the method so that it does the following:
- Removes any duplicate query string parameters from the url (the first occurence should be kept)
- Removes any query string parameters specified within the 2nd argument (optional array)
*/

function stripUrlParams(url, paramsToStrip = []) {
  let [domain, suffix] = url.split('?');
  //console.log(`  url=${url} domain=${domain} sx=${suffix}`);
  if (!suffix) return url.replace('?', '');
  let params = suffix.split('&').reduce((o, v) => {
    let [name, value] = v.split('=');
    if (!paramsToStrip.includes(name) && !o.has(name)) {
      o.set(name, value);
    }
    return o;
  }, new Map());
  //console.log(' o=', params);
  if (params.size === 0) return domain;
  return `${domain}?${[...params].map(([n, v]) => `${n}=${v}`).join('&')}`;
}


let url1 = 'www.codewars.com?a=1&b=2';
let url2 = 'www.codewars.com?a=1&b=2&a=1&b=3';
let url3 = 'www.codewars.com?a=1';
let url4 = 'www.codewars.com';

console.log(stripUrlParams(url1), url1, "Didn't return correct value when given a url that had nothing to be stripped");
console.log(stripUrlParams(url2), url1, "Didn't strip duplicates from url");
console.log(stripUrlParams(url2, ['b']), url3, "Didn't strip param that was specified in paramsToStrip array");
console.log(stripUrlParams(url4, ['b']), url4, "Didn't return an un-modifed url when there was nothing to strip");
console.log(stripUrlParams(url1, ['a', 'b']), url4, "Didn't strip all parameters");

// best

/* 
function stripUrlParams(url, paramsToStrip) {
  var domain = url.split('?')[0];
  var query = url.split('?')[1];
  var obj = {};
  var pairKey;
  var pairValue;
  var newQueryStr;

  if (!query) return domain;

  query.split('&').forEach(function(pair) {
    pairKey = pair.split('=')[0];
    pairValue = pair.split('=')[1];
    if (paramsToStrip ? paramsToStrip.some(function(param) {
        return param === pairKey
      }) : null || obj.hasOwnProperty(pairKey)) return;
    obj[pairKey] = pairValue;
  });

  newQueryStr = Object.keys(obj).map(function(key) {
    return key + '=' + obj[key];
  }).join('&');

  return domain + (newQueryStr ? '?' + newQueryStr : '');
}
*/

/* 
function stripUrlParams(url, paramsToStrip){
  return url.replace(/&?([^?=]+)=.+?/g, function(m, p1, qPos) {
    return url.indexOf(p1 + '=') < qPos || (paramsToStrip||[]).indexOf(p1) > -1 ? "": m;
   });
}
*/