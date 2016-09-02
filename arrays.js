// A simple array with constructor
const myArray1 = new Array('hello', 'world');

// literal declaration, the preferred way
const myArray2 = ['hello', 'world'];

//Creating empty arrays and adding values
const myArray3 = [];

// adds 'hello' on index 0
myArray3.push('hello');

// adds 'world' on index 1
myArray3.push('world');

// adds '!' on index 2
myArray3[2] = '!';

//Leaving indices
const myArray4 = [];

myArray4[0] = 'hello';
myArray4[1] = 'world';
myArray4[3] = '!';

console.log(myArray4); // [ 'hello', 'world', undefined, '!' ];

//Accessing array items by index
const myArray5 = ['hello', 'world', '!'];

console.log(myArray5[2]); // '!'

const myArray6 = ['hello', 'world', '!'];

console.log(myArray6.length); // 3

// For loops and arrays - a classic
const myArray7 = ['hello', 'world', '!'];

for (let i = 0; i < myArray7.length; i = i + 1) {
  console.log(myArray7[i]);
}

// For loops and arrays - alternate method
const myArray8 = ['hello', 'world', '!'];

for (let i in myArray8) {
  console.log(myArray8[i]);
}

//Concatenating Arrays
const myArray9 = [2, 3, 4];
const myArray10 = [5, 6, 7];

const myArray11 = myArray9.concat(myArray10);
console.log(myArray11); // [ 2, 3, 4, 5, 6, 7 ]

//Joining elements
const myArray12 = ['hello', 'world', '!'];

console.log(myArray12.join(' '));  // 'hello world !';
console.log(myArray12.join());     // 'hello,world,!'
console.log(myArray12.join(''));   // 'helloworld!'
console.log(myArray12.join('!!')); // 'hello!!world!!!';

//pushing and popping
const myArray13 = [];

myArray13.push(0); // [ 0 ]
myArray13.push(2); // [ 0 , 2 ]
myArray13.push(7); // [ 0 , 2 , 7 ]
myArray13.pop();     // [ 0 , 2 ]

//reverse
const myArray14 = ['world', 'hello'];

// [ 'hello', 'world' ]
myArray14.reverse();
console.log(myArray14);

//queue with shift() and pop()
const myArray15 = [];

myArray15.push(0); // [ 0 ]
myArray15.push(2); // [ 0 , 2 ]
myArray15.push(7); // [ 0 , 2 , 7 ]
myArray15.shift();   // [ 2 , 7 ]

console.log(myArray15);

//slicing
const myArray16 = [1, 2, 3, 4, 5, 6, 7, 8];
const myArray17 = myArray16.slice(3);

console.log(myArray17);  // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(myArray17); // [ 4, 5, 6, 7, 8 ]

//splice example
const myArray18 = [0, 7, 8, 5];
myArray18.splice(1, 2, 1, 2, 3, 4);

console.log(myArray18); // [ 0, 1, 2, 3, 4, 5 ]

//sorting without comparing function
const myArray19 = [3, 4, 6, 1];

myArray19.sort(); // 1, 3, 4, 6

console.log(myArray19);  // 1, 3, 4, 6

//sorting with comparing function
function descending(a, b) {
  return b - a;
}

const myArray20 = [3, 4, 6, 1];

myArray20.sort(descending); // [ 6, 4, 3, 1 ]

//unshift
const myArray21 = [];

myArray21.unshift(0); // [ 0 ]
myArray21.unshift(2); // [ 2 , 0 ]
myArray21.unshift(7); // [ 7 , 2 , 0 ]

//native forEach
function printElement(elem) {
  console.log(elem);
}

function printElementAndIndex(elem, index) {
  console.log('Index ' + index + ': ' + elem);
}

function negateElement(elem, index, array) {
  array[index] = -elem;
}

myArray22 = [1, 2, 3, 4, 5];

// prints all elements to the console
myArray22.forEach(printElement);

// prints 'Index 0: 1' 'Index 1: 2' 'Index 2: 3' ...
myArray22.forEach(printElementAndIndex);

// myArray is now [ -1, -2, -3, -4, -5 ]
myArray22.forEach(negateElement);
