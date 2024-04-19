/* 
6kyu - Acronym Buster
https://www.codewars.com/kata/58397ee871df657929000209/train/javascript

Laura really hates people using acronyms in her office and wants to force her colleagues 
to remove all acronyms before emailing her. 
She wants you to build a system that will edit out all known acronyms 
or else will notify the sender if unknown acronyms are present.

Any combination of three or more letters in upper case will be considered an acronym. 
Acronyms will not be combined with lowercase letters, such as in the case of 'KPIs'. 
They will be kept isolated as a word/words within a string.

For any string:

All instances of 'KPI' : "key performance indicators"
All instances of 'EOD' : "the end of the day"
All instances of 'TBD' : "to be decided"
All instances of 'WAH' : "work at home"
All instances of 'IAM' : "in a meeting"
All instances of 'OOO' : "out of office"
All instances of 'NRN' : "no reply necessary"
All instances of 'CTA' : "call to action"
All instances of 'SWOT' : "strengths, weaknesses, opportunities and threats"

If there are any unknown acronyms in the string, Laura wants you to return only the message:
'[acronym] is an acronym. I do not like acronyms. Please remove them from your email.'

So if the acronym in question was 'BRB', you would return the string:

'BRB is an acronym. I do not like acronyms. Please remove them from your email.'

If there is more than one unknown acronym in the string, return only the first in your answer.

If all acronyms can be replaced with full words according to the above, however, return only the altered string.

If this is the case, ensure that sentences still start with capital letters. '!' or '?' will not be used.
*/

//returns string without known acronyms or highlights unknown acronyms
function acronymBuster(string) {
  const acronymsMap = {
    KPI: 'key performance indicators',
    EOD: 'the end of the day',
    TBD: 'to be decided',
    WAH: 'work at home',
    IAM: 'in a meeting',
    OOO: 'out of office',
    NRN: 'no reply necessary',
    CTA: 'call to action',
    SWOT: 'strengths, weaknesses, opportunities and threats',
  };
  try {
    let str = string.replace(/\b([A-Z]{3,})\b/g, (acr) => {
      if (acronymsMap[acr]) return acronymsMap[acr];
      else throw Error(acr);
    });
    return str
      .split('. ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join('. ');
  } catch (e) {
    return `${e.message} is an acronym. I do not like acronyms. Please remove them from your email.`;
  }
}
