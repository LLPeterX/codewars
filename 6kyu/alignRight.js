/* 
6kyu - Text align right
https://www.codewars.com/kata/583601518d3b9b8d3b0000c9/train/javascript

Your task in this Kata is to emulate text justify right in monospace font. 
You will be given a single-lined text and the expected justification width. 
The longest word will never be greater than this width.

Here are the rules:

- Use spaces to fill in the gaps on the left side of the words.
- Each line should contain as many words as possible.
- Use '\n' to separate lines.
- Gap between words can't differ by more than one space.
- Lines should end with a word not a space.
- '\n' is not included in the length of a line.
- Last line should not contain '\n'
*/

function alignRight(text, width) {
  let i = 0, j, t;
  let result = "";
  while (i < text.length) {
    j = i + width;
    if (j >= text.length) {
      t = text.slice(i);
    } else {
      while (j > i && text[j] !== ' ') j--;
      t = text.slice(i, j);
    }
    result += t.trim().padStart(width) + "\n";
    i = j + 1;
  }
  return result.trimEnd();;
}

// console.log(alignRight("abc def", 10), '   abc def');
// console.log(alignRight("I take up the whole line", 24), 'I take up the whole line');
//console.log(alignRight("Two lines, I am", 10), '\n=>\n', 'Two lines,\n      I am');

// best
/* 
const alignRight = (text, width) => {
  let regex = new RegExp('(.{0,' + width + '})( |$)', 'g');
  return text
    .replace(regex, (_, line) => " ".repeat(width - line.length) + line + "\n")
    .replace(/\s+$/, '');
}
*/

/* 
function alignRight(text,width){
  return text.replace(new RegExp('(.{1,'+width+'})(\\s|$)', 'g'), (_,substr) => ' '.repeat(width - substr.length) + substr + '\n').replace(/\s$/, '');
}
*/