/* 
6kyu -  Create a frame!
https://www.codewars.com/kata/5672f4e3404d0609ec00000a/train/javascript

Given an array of strings and a character to be used as border, output the frame with the content inside.

Notes:

Always keep a space between the input string and the left and right borders.
The biggest string inside the array should always fit in the frame.
The input array is never empty.
*/

const frame = (text, char) => {
  let maxWidth = Math.max(...text.map(t => t.length));
  let line = char.repeat(maxWidth + 4);
  return [line, ...text.map(t => `${char} ${t.padEnd(maxWidth)} ${char}`), line].join("\n");
};

// best

/* 
const frame = (text, char) => {
  const r = " " + char + "\n";
  const l = char + " ";
  let f, ln;
  let maxlen = 0;
  for (const s of text)
    if (s.length > maxlen)
      maxlen = s.length;
  ln = char.repeat(maxlen+4);
  f = ln + "\n";
  for (const s of text)
    f += l + s + " ".repeat(maxlen - s.length) + r;
  return f + ln;
};
*/

/* 
const frame = (text, char) => {
  const width = text.reduce((maxWidth, v) => v.length > maxWidth ? v.length : maxWidth, 0)
  const line = content => `${char} ${content.padEnd(width, ' ')} ${char}`
  const edge = char.repeat(width + 4)
  
  return [edge, ...text.map(line), edge].join('\n');
};
*/