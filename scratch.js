// Control flow
const foo = true;
const bar = false;

if (bar) {
  conole.log('this code won\'t run');
}

if (bar) {
  conole.log('this code won\'t run');
} else {
  if (foo) {
    conole.log('this code will run');
  } else {
    conole.log('this code would run if foo and bar were both false');
  }
}

// A for loop
// logs 'try 0', 'try 1', ..., 'try 4'
for (let i = 0; i < 5; i++) {
  console.log('try ' + i);
}

// Creating an object with the object literal syntax:
const person1 = {
  firstName: 'Jane',
  lastName: 'Doe',
};

console.log(person1.firstName + ' ' + person1.lastName);

// As mentioned, objects can also have objects as a property.
const people = {};

people['person1'] = person1;
people['person2'] = person2;

console.log(people['person1'].firstName);
console.log(people['person2'].firstName);
