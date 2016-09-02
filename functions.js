// Function Declaration
function foo1() {
  /* do something */
}

// Named Function Expression
const foo2 = function () {
  /* do something */
};

// A simple function
const greet1 = function (person, greeting) {
  var text = greeting + ', ' + person;
  console.log(text);
};

greet1('Rebecca', 'Hello');

// A function that returns a value
const greet2 = function (person, greeting) {
  var text = greeting + ', ' + person;
  return text;
};

console.log(greet2('Rebecca', 'hello')); // 'hello, Rebecca'

// A function that returns another function
const greet = function (person, greeting) {
  var text = greeting + ', ' + person;
  return function () {
    console.log(text);
  };
};

const greeting = greet('Rebecca', 'Hello');
greeting();

// An immediately-invoked function expression
(function () {
  var foo = 'Hello world';
})();

//console.log(foo); // undefined!

// Passing an anonymous function as an argument
const myFn1 = function (fn) {
  var result = fn();
  console.log(result);
};

// logs 'hello world'
myFn1(function () {
  return 'hello world';
});

// Passing a named function as an argument

const myFn2 = function (fn) {
  var result = fn();
  console.log(result);
};

const myOtherFn = function () {
  return 'hello world';
};

myFn2(myOtherFn); // 'hello world'

