/* 
6kyu - RoboScript #1 - Implement Syntax Highlighting
https://www.codewars.com/kata/58708934a44cfccca60000c4/train/javascript

*/

const getColor = c => {
  let colors = {
    'F': 'pink',
    'L': 'red',
    'R': 'green',
  };
  if (colors[c]) return colors[c];
  return /[0-9]/.test(c) ? 'orange' : null
}

function highlight(code) {
  let result = content = "";
  let color = getColor(code[0]), col;
  for (let i = 0; i < code.length; i++) {
    col = getColor(code[i])
    if (col === color) {
      content += code[i];
    } else {
      result += color ? `<span style="color: ${color}">${content}</span>` : content;
      content = code[i];
      color = col;
    }
  }
  result += content ? col ? `<span style="color: ${col}">${content}</span>` : content : "";
  return result;
}

// console.log("Code without syntax highlighting: F3RF5LF7");
// console.log("Your code with syntax highlighting: " + highlight("F3RF5LF7"));
// console.log("Expected syntax highlighting: <span style=\"color: pink\">F</span><span style=\"color: orange\">3</span><span style=\"color: green\">R</span><span style=\"color: pink\">F</span><span style=\"color: orange\">5</span><span style=\"color: red\">L</span><span style=\"color: pink\">F</span><span style=\"color: orange\">7</span>");
// console.log(highlight("F3RF5LF7"), "<span style=\"color: pink\">F</span><span style=\"color: orange\">3</span><span style=\"color: green\">R</span><span style=\"color: pink\">F</span><span style=\"color: orange\">5</span><span style=\"color: red\">L</span><span style=\"color: pink\">F</span><span style=\"color: orange\">7</span>");
// console.log("Code without syntax highlighting: FFFR345F2LL");
// console.log("Your code with syntax highlighting: " + highlight("FFFR345F2LL"));
// console.log("Expected syntax highlighting: <span style=\"color: pink\">FFF</span><span style=\"color: green\">R</span><span style=\"color: orange\">345</span><span style=\"color: pink\">F</span><span style=\"color: orange\">2</span><span style=\"color: red\">LL</span>");
// console.log(highlight("FFFR345F2LL"), "<span style=\"color: pink\">FFF</span><span style=\"color: green\">R</span><span style=\"color: orange\">345</span><span style=\"color: pink\">F</span><span style=\"color: orange\">2</span><span style=\"color: red\">LL</span>");
// my : <span style="color: pink">FFF</span><span style="color: green">R</span><span style="color: orange">345</span><span style="color: pink">F</span><span style="color: orange">2</span><span style="color: red">LL</span>
// exp: <span style="color: pink">FFF</span><span style="color: green">R</span><span style="color: orange">345</span><span style="color: pink">F</span><span style="color: orange">2</span><span style="color: red">LL</span>

console.log(highlight('93))74395F6(9455243699L06F7949)568(()0L)L9L5(L20769L665L)F66L83871)0549LRR710593) 0) 6577L4278537862F36) 993R(62(347696R5182L(5R(R8(6866RF90FR(F577055(LF01F)RL56L23RR9RF856039L0R)'));
// my: <span style="color: red">L</span><span style="color: orange">56</span><span style="color: red">L</span><span style="color: orange">23</span><span style="color: green">RR</span><span style="color: orange">9</span><span style="color: green">R</span><span style="color: pink">F</span><span style="color: orange">856039</span><span style="color: red">L</span><span style="color: orange">0</span><span style="color: green">R</span>
// ex: <span style="color: red">L</span><span style="color: orange">56</span><span style="color: red">L</span><span style="color: orange">23</span><span style="color: green">RR</span><span style="color: orange">9</span><span style="color: green">R</span><span style="color: pink">F</span><span style="color: orange">856039</span><span style="color: red">L</span><span style="color: orange">0</span><span style="color: green">R</span>)

// best

/* 
function highlight(code) {
  return code.replace(/(F+)/g,'<span style="color: pink">$1</span>').
    replace(/(L+)/g,'<span style="color: red">$1</span>').
    replace(/(R+)/g,'<span style="color: green">$1</span>').
    replace(/(\d+)/g,'<span style="color: orange">$1</span>');
}
*/

/* 
const color = char => {
  return { F: 'pink', L: 'red', R: 'green' }[char] || 'orange';
};

const highlight = code =>
  code.replace(/([FRL]|\d+)\1*/g, m =>
  '<span style="color: ' + color(m[0]) + '">' + m + '</span>');
* /

/* 
highlight=Q=>Q.replace(/\d+|([FLR])\1*/g, Q => `<span style="color: ${{ F: 'pink', L: 'red', R: 'green' }[Q[0]] || 'orange'}">${Q}</span>`)
* /