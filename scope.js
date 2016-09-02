/**
 * The variables a and b have block scope and are 'visible'
 * only within the if (flag) {...} block.
 * The variable c has function scope and is 'visible' within the entire
 * function myFunction block, including within the nested if block.
 */
function myFunction(flag) {
  if (flag) {
    const a = 1;  // The scope is inside the if-block
    let b = 2;  // The scope is inside the if-block
    var c = 3;  // The scope is inside the function

    // Both a and b in scope
    console.log(a);  // 1
    console.log(b);  // 2
    console.log(c);  // 3

  }

  // Only b is in scope here.
  console.log(a); // Uncaught ReferenceError because a has block scope
  console.log(b); // Uncaught ReferenceError because b has block scope
  console.log(c);  // 3 Because b has function scope
}

myFunction(true);

// Functions have access to variables defined in the same scope
const foo = 'hello';
function sayHello() {
  console.log(foo);
};

sayHello(); // 'hello'
console.log(foo); // 'hello'

/**
 * Code outside the scope in which a variable was defined does not have access
 * to the variable
 */

function sayHello() {
  const foo = 'hello';
  console.log(foo);
};

sayHello(); // hello

//console.log(foo); // undefined

/**
 * Variables with the same name can exist in different scopes
 * with different values
 */
const foo2 = 'world';

function sayHello() {
  const foo2 = 'hello';
  console.log(foo2);
};

sayHello(); // logs 'hello'
console.log(foo2); // logs 'world'
// Functions can see changes in variable values after the function is defined
function myFunction() {
  let foo2 = 'hello';

  function myFn() {
    console.log(foo2);
  };

  foo2 = 'world';
  return myFn;
};

const f = myFunction();

f(); // 'world'

/**
 * Scope insanity
 * Immediately invoked function expression (IIFE)
 * a self-executing anonymous function
 */

(function () {

  var baz = 100;

  var bim = function () {
    console.log(baz);
  };

  bar = function () {
    console.log(baz);
  };

}());

/**
 * The function bar() is defined outside of the anonymous function
 * because it wasn't declared with var and is therefore an implied global.
 * This is not recommended practice: adding to the global namespace.
 * And bar() has access to baz because outer function variables (and parameters) are available
 * to inner functions: this is referred to as closure.
 */
bar(); // => 100
//console.log(baz);
//bim();

