function validParentheses(parens){
  if (parens.length === 0) {
    return true;
  } else if (parens.length < 2) {
    return false;
  }
  let p = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') { ++p; }
    if (parens[i] === ')') { --p; }
    if (p < 0) { return false; }
  }
  return p === 0;
}