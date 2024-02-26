/* 
7kyu - Trilingual democracy
https://www.codewars.com/kata/62f17be8356b63006a9899dc/train/javascript

Switzerland has four official languages: German, French, Italian, and Romansh.1

When native speakers of one or more of these languages meet, they follow certain regulations to choose a language for the group.2 Here are the rules for groups of exactly three3 people:4

When all three are native speakers of the same language, it also becomes their group's language.5a

When two are native speakers of the same language, but the third person speaks a different language, all three will converse in the minority language.5b

When native speakers of three different languages meet, they eschew these three languages and instead use the remaining of the four official languages.5c

The languages are encoded by the letters D for Deutsch, F for Français, I for Italiano, and K for Rumantsch.6

Your task is to write a function that takes a list of three languages and returns the language the group should use.7 8
*/

function trilingualDemocracy(group) {
  let languages = { 'F': 0, 'I': 0, 'D': 0, 'K': 0 };
  let rules = [, 0, 1, 3]
  let speakersLanguages = Object.entries([...group].reduce((o, v) => { o[v] = (o[v] || 0) + 1; return o; }, languages))
    .sort((a, b) => b[1] - a[1]);
  //console.log(`lc=${langCounts} (0)=${langCounts[0][1]}`);
  return speakersLanguages.find(e => e[1] === rules[speakersLanguages[0][1]])[0];
}

console.log(trilingualDemocracy("FFF"), 'F');
console.log(trilingualDemocracy("IIK"), 'K');
console.log(trilingualDemocracy("DFK"), 'I');

// best

/* 
function trilingualDemocracy(group) {
  return String.fromCharCode(group.charCodeAt(0) ^ group.charCodeAt(1) ^ group.charCodeAt(2));
}
*/