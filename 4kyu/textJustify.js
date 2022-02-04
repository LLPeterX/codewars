/* 
4kyu - Text align justify
https://www.codewars.com/kata/537e18b6147aa838f600001b

Выровнять длинный текст по ширине
* для заполнения промежутка между словами использовать пробелы
* на каждой строке должно быть макс. количество слов
* для разделения строк - "\n"
* промежуток м/у словами может содержать несколько пробелов. Самые шировкие должны идти в начале
* последнюю строку выравнивать не нужно; она не должна содержать "\n"
* строки, содержащие только одно слово, выравнивать не нужно.
*/

function justify(text, width) {
  let words = text.split(' ');
  let lines = [];
  let w = words[0]
  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    if (w.length + word.length + 1 <= width) {
      w += ' ' + word;
    }
    else {
      lines.push(w);
      w = word;
    }
  }
  if (w.length) {
    lines.push(w)
  }
  if (lines.length < 2) return text;
  let res = lines.slice(0, -1).map(str => {
    let start = 0;
    while (str.length < width) {
      let i = str.slice(start).indexOf(' ');
      if (i > 0) {
        while (str[i + start] === ' ') i++;
        str = str.slice(0, i + start) + ' ' + str.slice(i + start);
        start += i + 1;
        if (start >= width) start = 0;
      } else {
        if (start === 0) break;
        start = 0;
      }
    }
    return str;
  }).concat(lines.slice(-1));
  return res.join("\n");
}

const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';

// console.log(justify('123 45 6', 7), '123  45\n6');
// console.log(justify('123', 7), '123');
// console.log(justify('', 10), '');
console.log(justify(LIPSUM, 30));

// best

/* 
function justify(str, len) {
  var words = str.split(' ');
  var lines = [];
  var lastLine = words.reduce(function(line, word) {
    if (line) {
      if (line.length + word.length + 1 <= len)
        return line + ' ' + word;
      lines.push(line);
    }
    return word;
  });
  lines = lines.map(function(line) {
    if (line.indexOf(' ') >= 0)
      for (var lineLen = line.length; lineLen < len; )
        line = line.replace(/ +/g, function(spaces) {
          return spaces + (lineLen++ < len ? ' ' : '');
        });
    return line;
  });
  lastLine && lines.push(lastLine);
  return lines.join('\n');
}
*/

/* 
var justify = function(str, len) {
  return str.split(" ").reduce((r, w, i, arr) => {
    let line = r.pop() || [];
    let lineLen = line.reduce((k, v) => k + v.length, Math.max(0, line.length));
    if (lineLen + w.length > len) {
      let index = 0;
      while(lineLen++ <= len && line.length > 1) {
        line[index] += " ";
        index = (++index) % (line.length - 1);
      }
      r.push(line.join(" "), [w]);
    } else if (i === arr.length - 1) {
      r.push(line.concat(w).join(" "));
    } else {
      r.push(line.concat(w));
    }
    return r;
  }, []).join("\n");
};
*/