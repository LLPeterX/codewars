/* 
6kyu - FIXME: Hello
https://www.codewars.com/kata/5b0a80ce84a30f4762000069/javascript
*/

class Dinglemouse {
  constructor() {
    this.name = this.age = this.sex = 0
    this.attributes = [];
    this.text = {
      'age': () => `I am ${this.age}.`,
      'sex': () => `I am ${this.sex === 'M' ? 'male' : 'female'}.`,
      'name': () => `My name is ${this.name}.`
    }
  }

  addAttr(attr) {
    if (!this.attributes.includes(attr)) this.attributes.push(attr);
  }


  setAge(age) {
    this.age = age
    this.addAttr('age')
    return this
  }

  setSex(sex) {
    this.sex = sex
    this.addAttr('sex');
    return this
  }

  setName(name) {
    this.name = name
    this.addAttr('name');
    return this
  }

  hello() {
    return ['Hello.', ...this.attributes.map(m => this.text[m]())].join(' ');
  }
}

// best

/* 
class Dinglemouse {
  constructor() {
    this.output = {};
  }  
  setAge(age) {
    this.age = age;
    this.output.age = ` I am ${age}.`;
    return this;
  }
  setSex(sex) {
    this.sex = sex;
    this.output.sex = ` I am ${sex == 'M' ? "male" : "female"}.`;
    return this;
  }
  setName(name) {
    this.name = name;
    this.output.name = ` My name is ${name}.`;
    return this;
  }
  hello() {
    return `Hello.` + Object.values(this.output).join('');
  }
}
*/

/* 
class Dinglemouse {
    setAge(age) { this.age = age; return this }
    setSex(sex) { this.sex = sex; return this }
    setName(name) { this.name = name; return this }
    hello() { return Object.keys(this).reduce((r,k) => r += ' '+(k=='name' ? `My name is ${this.name}.` : k=='age' ? `I am ${this.age}.` : `I am ${this.sex == 'M' ? "male" : "female"}.`),'Hello.'); }
}
*/