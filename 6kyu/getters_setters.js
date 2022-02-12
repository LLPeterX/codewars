/* 
6kyu - Defining getters and setters on an existing class
https://www.codewars.com/kata/55bcf04de45497c54a0000d0

Дан класс
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}

надо добавить geter и setter:
  get name() => this.firstName + ' '+this.lastName 
  set name() => ... сформировать this.firstName и this.lastName

 Класс переопределять нельзя.
*/

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}

// main code
Object.defineProperty(Person.prototype, 'name', {
  get: function name() {
    return this.firstName + ' ' + this.lastName;
  },
  set: function name(str) {
    let arr = str.split(' ');
    this.firstName = arr[0];
    this.lastName = arr[1];
  }
});

let marcusFenix = new Person('Marcus', 'Fenix'),
  augustusCole = new Person('Augustus', 'Cole'),
  damonBaird = new Person('Damon', 'Baird'),
  dominicSantiago = new Person('Dominic', 'Santiago');

console.log(marcusFenix.name, 'Marcus Fenix');
console.log(augustusCole.name, 'Augustus Cole');
console.log(damonBaird.name, 'Damon Baird');
console.log(dominicSantiago.name, 'Dominic Santiago');

augustusCole.name = 'Cole Train';
dominicSantiago.name = 'Dom Santiago';

console.log(augustusCole.getName(), 'Cole Train');
console.log(dominicSantiago.getName(), 'Dom Santiago');

// best
/* 
Object.defineProperty(Person.prototype, "name", {
    get: Person.prototype.getName,
    set: function(name) { [this.firstName, this.lastName] = name.split(" "); },
  });
*/

/* 
Object.defineProperty(Person.prototype,'name',{
  get(){
    return this.getName();  
  },
  set(x){
  [this.firstName, this.lastName]=x.split(" ");
}
});
*/