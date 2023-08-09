/* 
6kyu - The Sceptical Kid Generator
https://www.codewars.com/kata/570957fc20a35bd2df0004f9/train/javascript


Your function 'AlanAnnoyingKid' takes as input a sentence spoken by Alan (a string). 
The sentence contains the following structure:
  "Today I " + [action_verb] + [object] + "."
  (e.g.: "Today I played football.")

Your function will return Alan's kid response, which is another sentence with the following structure:

  "I don't think you " + [action_performed_by_alan] + " today, I think you " + ["did" OR "didn't"] + [verb_of _action_in_present_tense] + [" it!" OR " at all!"]
  (e.g.:"I don't think you played football today, I think you didn't play at all!")  
 
Note the different structure depending on the presence of a negation 
in Alan's first sentence (e.g., whether Alan says "I dind't play football", or "I played football").

! Also note: Alan's kid is young and only uses simple, regular verbs 
that use a simple "ed" to make past tense. There are random test cases.  


*/

function AlanAnnoyingKid(input) {
  let m = input.match(/Today I (((didn't )?(\S+)) (.+?))\.$/);
  let [, sentence, , neg, verb, obj] = m;
  let ansVerb, ansVerb2 = verb, ansObj;
  if (neg) {
    ansVerb = "did";
    verb = verb.slice(7);
  } else {
    ansVerb = "didn't";
  }
  if (/ed$/.test(verb)) {
    ansVerb2 = verb.replace(/ed$/, '');
    ansObj = "at all";
  } else {
    ansObj = "it";
  }
  return `I don't think you ${sentence} today, I think you ${ansVerb} ${ansVerb2} ${ansObj}!`;
}

console.log(AlanAnnoyingKid("Today I played football."), '\n=>\n', "I don't think you played football today, I think you didn't play at all!\n\n")
console.log(AlanAnnoyingKid("Today I didn't play football."), '\n=>\n', "I don't think you didn't play football today, I think you did play it!\n\n")
console.log(AlanAnnoyingKid("Today I didn't attempt to hardcode this Kata."), '\n=>\n', "I don't think you didn't attempt to hardcode this Kata today, I think you did attempt it!\n\n")
console.log(AlanAnnoyingKid("Today I cleaned the kitchen."), '\n=>\n', "I don't think you cleaned the kitchen today, I think you didn't clean at all!\n\n")

// best

/* 
function AlanAnnoyingKid(input){
  let action = input.substring(8, input.length - 1);  
  let negation = input.indexOf("didn't") > 0;
  let verb = negation ? action.split(" ")[1] : input.match(/\w+(?=ed)/)[0];
  
  return "I don't think you " + action + " today, I think you " +
      (negation ? "did" : "didn't") + " " + verb + " " + (negation ? "it!" : "at all!");
}
*/

/* 
function AlanAnnoyingKid(input) {
  let [ , orig, is_neg, verb ] = input.match(/^Today I ((didn't )?(\S+) .*)\.$/);
  let opposite = is_neg ? `did ${verb} it!` : `didn't ${verb.replace(/ed$/, '')} at all!`;
  return `I don't think you ${orig} today, I think you ${opposite}`;
}
*/