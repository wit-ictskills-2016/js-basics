// Creating an object literal
const myObject = {
  sayHello: function () {
    console.log('hello');
  },

  myName: 'Rebecca',
};

myObject.sayHello(); // "hello"
console.log(myObject.myName); // "Rebecca"

// test
const someString = 'some string';

const myObject2 = {
  validIdentifier: 123,
  someString: 456,
  99999: 789,
};

console.log(myObject2);
