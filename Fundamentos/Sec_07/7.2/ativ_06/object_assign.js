// const person = {
//   name: 'Alberto',
//   lastName: 'Gomes',
//   age: 20,
//   job: 'programador',
// };

// const info = {
//   age: 23,
//   job: 'engenheiro',
// };

// const family = {
//   children: ['Maria', 'João'],
//   wife: 'Ana',
// };

// Object.assign(person, info, family)
// console.log(person)

// const person = {
//   name: 'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const clone = Object.assign(person, lastName);

// console.log(clone);
// console.log(person);

// console.log('--------------');

// clone.name = 'Maria';
// console.log(clone);
// console.log(person);

// console.log('--------------');

// person.lastName = 'Ferreira';
// console.log(clone);
// console.log(person);

const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);