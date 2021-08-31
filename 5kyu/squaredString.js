/* 
5kyu - Coding with Squared Strings
https://www.codewars.com/kata/56fcc393c5957c666900024d/train/javascript

*/
function code(s) {
  if (!s) return "";
  let n = Math.ceil(Math.sqrt(s.length)), t = s.padEnd(n * n, String.fromCharCode(11));
  let chunks = t.match(new RegExp(`.{1,${n}}`, 'g')).map(e => e.split(''));
  //rotate CW
  chunks = chunks[0].map((_, i) => chunks.map(row => row[i]).reverse());
  return chunks.map(e => e.join('')).join('\n');
}

function decode(s) {
  if (!s) return "";
  let chunks = s.split('\n').map(e => e.split('')), n = chunks[0].length;
  // rotate CCW
  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - i - 1; j++) {
      let tmp = chunks[i][j];
      chunks[i][j] = chunks[j][n - i - 1];
      chunks[j][n - i - 1] = chunks[n - i - 1][n - j - 1];
      chunks[n - i - 1][n - j - 1] = chunks[n - j - 1][i];
      chunks[n - j - 1][i] = tmp;
    }
  }
  return chunks.map(row => row.join('')).join('').replace(new RegExp(`${String.fromCharCode(11)}`, 'g'), '');
}

const data1 = "What do you remember? When I looked at his streaky glasses, I wanted " +
  "to leave him. And before that? He stole those cherries for me at midnight. We were walking " +
  "in the rain and I loved him. And before that? I saw him coming " +
  "toward me that time at the picnic, edgy, foreign.";
const data1Sol =
  "\vctg?.nadr d gdbW\n\v,i    lnis tl eh\n\v mtIAakietboaara\n\veeo nnigsoe st?t\n\vd wsddnh lfls   \n\vgaaa  gtfeoeehWd\n" +
  "\vytrwbI .o rasiho\n\v, d e i rtev,se \n\v t hflnW h e  ny\n\vfhmioo emot Is o\n\voeemrvt eshh tIu\n\vr   eehw eaiwr  \n" +
  "\veptc deea tmaelr\n\viihot  rtc?.naoe\n\vgcamhhre h  tkom\n\vnntiaia meHAeyke\n\v.i ntmiwirend em"
console.log(code(data1), data1Sol);
console.log(decode(data1Sol), data1);

// best
/*
function code(s) {
  let str = s.replace(/\n/g, '')
  ,   len = str.length
  ,   res = '';

  let n = Math.ceil(Math.sqrt(len))
  ,   m = n * (n - 1);

  for (var i = 0; i < n; i++) {
    res += "\n";

    for (var j = 0; j < n; j++)
      res += str[m + i - n * j] || "\v";
  }

  return res.slice(1);
}

function decode(s) {
  let res = code(code(code(s)));
  return res.replace(/(\n|\v)/g, '');
}
*/

/*
function rot90Clock(strng) {
    var a = strng.split("\n").reverse().map(function(x) { return x.split(""); });
    var b = a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
    return b.map(function(x) { return x.join(""); }).join("\n");
}

function revStr(strng) {
    return [...strng].reverse().join('');
}
function rot90Counter(strng) {
    var a = strng.split("\n").map(function(x) { return revStr(x); }).map(function(x) { return x.split(""); });
    var b = a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
    return b.map(function(x) { return x.join(""); }).join("\n");
}

function code(s) {
    if (s.length === 0) return "";
    var sz = Math.ceil(Math.sqrt(s.length));
    while (s.length !== sz * sz) {
        s += "\v"; // String.fromCharCode(11)
    }
    return rot90Clock(s.match(new RegExp('.{1,'+ sz + '}', 'g')).join("\n"));
}

function decode(s) {
    if (s.length === 0) return "";
    return rot90Counter(s).split('\v')[0].split("\n").join("")
}
*/

/*
function code(s) {
  const n = Math.ceil(Math.sqrt(s.length));
  s += '\v'.repeat(n*n - s.length);
  return Array.from({length: n}, (_, r) => Array.from({length: n}, (_, c) => s[n*(n - c - 1) + r]).join('')).join('\n');
}
function decode(s) {
  const ss = s.split('\n'), n = ss[0].length;
  return Array.from({length: n}, (_, r) => Array.from({length: n}, (_, c) => ss[c][n - r - 1]).join('')).join('').replace(/\v/g, '');
}
*/