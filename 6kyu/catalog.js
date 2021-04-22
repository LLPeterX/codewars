/* 
6kyu Catalog
Дан xml.
Найти все строки, у которых в prod.name встречается article

*/
// function catalog(s, article) {
//   if(!s || !article) {
//     return "";
//   }
//   let regexp = new RegExp("<prod><name>(.*?"+article+".*?)<\/name><prx>(.+?)<\/prx><qty>(.+?)<\/qty><\/prod>", 'igm');
//   let res = "";
//   let mx = s.match(regexp);
//   if(!mx) {
//     return "Nothing";
//   }
//   mx.forEach(row => {
//     let m = row.match(/<prod><name>(.+)<\/name><prx>(.+?)<\/prx><qty>(.+?)<\/qty><\/prod>/);
//     res += `${m[1]} > prx: \$${m[2]} qty: ${m[3]}\r\n`;
//   });
//   return res.trim();
// }

// works too
function catalog2(s, article) {
  let matches = s.match(new RegExp("<prod><name>(.*?"+article+".*?)<\/name><prx>(.+?)<\/prx><qty>(.+?)<\/qty><\/prod>", 'gm'));
  return matches  ? matches.reduce((out, row) => {
      let m = row.match(/<prod><name>(.+)<\/name><prx>(.+?)<\/prx><qty>(.+?)<\/qty><\/prod>/);
      return out + `${m[1]} > prx: \$${m[2]} qty: ${m[3]}\r\n`;
      },"").trim() 
   : "Nothing";
}

const s = `<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

<prod><name>chair</name><prx>100</prx><qty>20</qty></prod>

<prod><name>fan</name><prx>50</prx><qty>8</qty></prod>

<prod><name>wire</name><prx>10.8</prx><qty>15</qty></prod>

<prod><name>battery</name><prx>150</prx><qty>12</qty></prod>

<prod><name>pallet</name><prx>10</prx><qty>50</qty></prod>

<prod><name>wheel</name><prx>8.80</prx><qty>32</qty></prod>

<prod><name>extractor</name><prx>105</prx><qty>17</qty></prod>

<prod><name>bumper</name><prx>150</prx><qty>3</qty></prod>

<prod><name>ladder</name><prx>112</prx><qty>12</qty></prod>

<prod><name>hoist</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>platform</name><prx>65</prx><qty>21</qty></prod>

<prod><name>car wheel</name><prx>505</prx><qty>7</qty></prod>

<prod><name>bicycle wheel</name><prx>150</prx><qty>11</qty></prod>

<prod><name>big hammer</name><prx>18</prx><qty>12</qty></prod>

<prod><name>saw for metal</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>wood pallet</name><prx>65</prx><qty>21</qty></prod>

<prod><name>circular fan</name><prx>80</prx><qty>8</qty></prod>

<prod><name>exhaust fan</name><prx>62</prx><qty>8</qty></prod>

<prod><name>window fan</name><prx>62</prx><qty>8</qty></prod>`;


//console.log(catalog2(s, "ladder"));
console.log(catalog2(s, "saw")); // table saw, saw, saw metal

//best
/* 
function catalog(s, article) {
  let str = s.replace(/<prod><name>/gi, '/')
              .replace(/<\/name>/gi, '')
              .replace(/<\/qty><\/prod>/gi, '')
              .replace(/<prx>/gi, ' > prx: $')
              .replace(/<\/prx><qty>/gi, ' qty: ')
              .replace(/\n\n/gi, '')
  
  let item = str.split('/')
                .filter(x => x.includes(article))
                .join('\r\n')

  return (item === '') ? 'Nothing' : item
}
*/

/* 
function catalog(s, article) {
  var r = [];
  s.split(/\n+/).forEach(line => {
    line = line.slice(12,-13).split(/<.*?><.*?>/)
    if (line[0].includes(article)) {
      r.push(`${line[0]} > prx: $${line[1]} qty: ${line[2]}`)
    }
  })
  return r.length ? r.join('\r\n') : 'Nothing'
}
*/

/* 
function catalog(s, article) {

  let pattern = '<prod><name>(.*?' + article + '.*?)</name><prx>(.*?)</prx><qty>(.*?)</qty></prod>';
  let match, regex = new RegExp(pattern, 'g');
  let res = [];

  while (match = regex.exec(s))
    res.push(match[1] + ' > prx: $' + match[2] + ' qty: ' + match[3]);

  return res.join("\r\n") || 'Nothing';
    
}
*/

/* 
function catalog(s, article) {
  let pattern = `<prod><name>(.*?${article}.*?)</name><prx>(.*?)</prx><qty>(.*?)</qty></prod>`
  let RE = new RegExp( pattern, "gi")
  let lines = s.match(RE) || []
  return lines
    .map( x => x.replace( new RegExp(pattern), '$1 > prx: $$$2 qty: $3'))
    .join('\r\n') || 'Nothing'
}
*/