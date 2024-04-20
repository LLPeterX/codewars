/* 
7kyu - Simple template
https://www.codewars.com/kata/56ae72854d005c7447000023/train/javascript

Implement function createTemplate which takes string with tags wrapped in {{brackets}} as input and returns closure, which can fill string with data (flat object, where keys are tag names).

let personTmpl = createTemplate("{{name}} likes {{animalType}}");
personTmpl({ name: "John", animalType: "dogs" }); // John likes dogs

When key doesn't exist in the map, put there empty string.
*/

function createTemplate(template) {
  return (obj) => template.replace(/({{.+?}})/g,(t)=>obj[t.slice(2,-2)]??'');
}

let personTmpl = createTemplate("{{name}} likes {{animalType}}");
console.log(personTmpl({ name: "John", animalType: "dogs" }), "John likes dogs");

// best

/* 
const createTemplate = template => {
  return vars => template.replace(/{{(\w+)}}/g, (m, v) => vars[v] || '');
}
*/