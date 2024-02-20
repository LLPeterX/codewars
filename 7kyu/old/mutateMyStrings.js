/* 
7kyu - Mutate My Strings
https://www.codewars.com/kata/59bc0059bf10a498a6000025/train/javascript

 will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

Example:

stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham
*/

function mutateMyStrings(stringOne, stringTwo) {
  let result = [stringOne], s;
  for (let i = 0; i < stringOne.length; i++) {
    let x = [...result[result.length - 1]];
    x[i] = stringTwo[i];
    s = x.join('');
    if (!result.includes(s)) result.push(s);
  }
  return result.join("\n") + "\n";
}


console.log(mutateMyStrings('bubble gum', 'turtle ham'), "\n=>\n", 'bubble gum\ntubble gum\nturble gum\nturtle gum\nturtle hum\nturtle ham\n');
console.log(mutateMyStrings('car door', 'cat bore'), "\n=>\n", 'car door\ncat door\ncat boor\ncat borr\ncat bore\n');

// best

/* 
const mutateMyStrings = (str1, str2) =>
  [...new Set([...`${str1} `].map((_, idx) => `${str2.slice(0, idx)}${str1.slice(idx)}\n`))].join(``);
*/