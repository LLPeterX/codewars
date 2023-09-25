/* 
6kyu - Skills Master
https://www.codewars.com/kata/648f2033d52f51608e06c458/train/javascript

Your Task:
Given a skill tree described as an array 
and a set of required skills, return the total number of skills 
needed to learn all of the required skills.

Constraints:
- Each skill is only unlocked by exactly one skill!
- Skills can unlock any number of skills.
- Inputs are always valid and each skill can be unlocked by some other skill, except 0.
- len(tree), len(requred) = 0...20,000

*/

// FAIL - TIMEOUT on big data
function countSkills(tree, required) {
  if (!tree || required.size === 0) return 0;
  let count = 0;
  const studied = new Set();
  //let skills = [...required];
  for (let s of required) {
    if (!studied.has(s)) {
      while (s) {
        if (!studied.has(s)) {
          count++;
          studied.add(s);
        }
        s = tree[s];
      }
    }
  }
  return count + 1;
}

console.log(countSkills([0, 0, 0, 1, 3, 3, 2], new Set([6])), 3);
console.log(countSkills([0, 0, 0, 1, 3, 3, 2], new Set([1, 2])), 3);

const tree = [0, 0, 0, 1, 3, 3, 2];
console.log(countSkills(tree, new Set([0])), 1, "should handle required of depth 0 (root)");
console.log(countSkills(tree, new Set([2])), 2, "should handle single required of depth 1");
console.log(countSkills(tree, new Set([3])), 3, "should handle single required of depth 2");
console.log(countSkills(tree, new Set([1, 2])), 3, "should handle two required of depth 1");
console.log(countSkills(tree, new Set([3, 6])), 5, "should handle two required of depth 2");
// FAIL
console.log(countSkills(tree, new Set([4])), 4, "should handle single required of depth 3");
console.log(countSkills(tree, new Set([5])), 4, "should handle single required of depth 3");
console.log(countSkills(tree, new Set([4, 5])), 5, "should handle two required of depth 3");
console.log(countSkills(tree, new Set([1, 2, 3])), 4, "should handle three required of depth 1 and 2");
console.log(countSkills(tree, new Set([0, 1, 2, 3, 4, 5, 6])), 7, "should handle requiring all skills")