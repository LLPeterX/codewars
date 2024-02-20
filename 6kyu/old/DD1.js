/* 
6kyu - D&D Character generator #1: attribute modifiers and spells
https://www.codewars.com/kata/596a690510ffee5c0b00006a/train/javascript

Taking into consideration the 3.5 edition rules, your goal is to build a function 
that takes an ability score, will return:

- attribute modifier, as indicated on the table of the above link;
- maximum spell level for the spells you can cast (-1 for no spells at all) with that score;
- the eventual extra spells you might get (as an array/list, 
  with elements representing extra spells for 1st, 2nd,... spell level in order; 
  empty array for no extra spells).
*/

// const abilitySores = [
//   { score: 1, mod: -5, spells: [] },
//   { score: 2, mod: -4, spells: [] },
//   { score: 4, mod: -3, spells: [] },
//   { score: 6, mod: -2, spells: [] },
//   { score: 8, mod: -1, spells: [] },
//   { score: 10, mod: 0, spells: [] },
//   { score: 12, mod: 1, spells: [1] }, // 1
//   { score: 14, mod: 2, spells: [1, 1] }, // 2
//   { score: 16, mod: 3, spells: [1, 1, 1] }, // 3
//   { score: 18, mod: 4, spells: [1, 1, 1, 1] }, // 4
//   { score: 20, mod: 5, spells: [2, 1, 1, 1, 1] }, // 6
//   { score: 22, mod: 6, spells: [2, 2, 1, 1, 1, 1] }, // 8
//   { score: 24, mod: 7, spells: [2, 2, 2, 2, 1, 1, 1, 1] }, // 10
//   { score: 26, mod: 9, spells: [2, 2, 2, 2, 1, 1, 1, 1] }, // 12
//   { score: 28, mod: 10, spells: [3, 2, 2, 2, 2, 1, 1, 1, 1] }, // 15
//   { score: 30, mod: 11, spells: [3, 3, 2, 2, 2, 2, 1, 1, 1] }, // 17
// ];

function charAttribute(score) {
  let modifier = 0, maximumSpellLevel = -1, extraSpells = [];
  if (score > 0) {
    modifier = Math.floor((score - 10) / 2);
    maximumSpellLevel = score > 27 ? 9 : score < 10 ? -1 : Math.min(9, score - 10); // ??
    // fill spells
    if (score > 11) {
      for (let i = 0, k = 0, n = 1; i < modifier; i++, k++) {
        if (k > 3) {
          n++;
          k = 0;
        }
        extraSpells.unshift(n);
        if (extraSpells.length > 9) {
          extraSpells = extraSpells.slice(0, -1);
        }
      }
    }
  }
  return { modifier, maximumSpellLevel, extraSpells };
}

console.log(charAttribute(0), { modifier: 0, maximumSpellLevel: -1, extraSpells: [] });
console.log(charAttribute(1), { modifier: -5, maximumSpellLevel: -1, extraSpells: [] });
console.log(charAttribute(5), { modifier: -3, maximumSpellLevel: -1, extraSpells: [] });
console.log(charAttribute(10), { modifier: 0, maximumSpellLevel: 0, extraSpells: [] });
console.log(charAttribute(20), { modifier: +5, maximumSpellLevel: 9, extraSpells: [2, 1, 1, 1, 1] });

// best
/* 
function charAttribute(score){
  var modifier = score&&((score/2|0)-5);
  var maximumSpellLevel = Math.max(-1,Math.min(9,score-10));
  for(var extraSpells = [],s=score-12; s>=0&&extraSpells.length<9; s-=2) extraSpells.push(1+(s/8|0));
  return {modifier, maximumSpellLevel, extraSpells};
}
*/

/* 
function charAttribute(score){
  let mod = score == 0 ? 0 : -5 + Math.floor(score / 2), max = score < 10 ? -1 : score < 12 ? 0 : 9
  let ext = Array.from({length: Math.min(9, Math.max(mod, 0))}, (_, i) => Math.ceil((mod - i) / 4))
  return {modifier: mod, maximumSpellLevel: max, extraSpells: ext}
}
*/