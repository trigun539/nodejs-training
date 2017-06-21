/**
 * ARROW FUNCTIONS
 */

// ES5
function sum (x, y) {
  return x + y;
}

// ES6
const sum = (x, y) => {
  return x + y;
};

sum(2, 3); // 5

const arr = [1, 2, 3, 4];

// Arrow functions makes it easy to perform small operations on arrays/objects
arr.map(x => x + 1);

// ES5
arr.map(function (x) {
  return x + 1;
});

const obj = { a: 1, b: 2 };

Object.keys(obj).map(x => obj[x] + 1);

/**
 * CLASSES
 */

// Class declarations are not hoisted!

class Rectangle {
  constructor (width, height) {
    this.width = width;
    this.height = height;
  }

  static info () {
    console.log(`Class which creates a rectangle, needs width and height.`);
  }

  get area () {
    return this.width * this.height;
  }

  getArea () {
    return this.width * this.height;
  }
}

const rect = new Rectangle(3, 6);

rect.area;

// Extending classes

class Square extends Rectangle {
  constructor (width) {
    super(width, width);
  }
}

const sqr = new Square(5);

sqr.area;

/**
 * ENHANCED OBJECT LITERALS
 */

const age = 18;
const obj = {
  name: 'Hunter',
  // Add methods while creating objs.
  sayHi () { console.log('Hello everybody!'); },
  age
};

const math = {
  sum () {},
  ...
};


/**
 * TEMPLATE STRINGS
 */

// Can be multiline
// Add variables using ${}
const name = 'Hunter';
const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <h1>This is a Template!</h1>
  <p>Hello ${name}</p>
</body>
</html>
`;

/**
 * DESTRUCTURING
 */

const bigObj = {
  first: 'John',
  last: 'Joe',
  salute () { console.log(`I am John`); }
};

function sayHi (obj) {
  const { first, salute } = obj;

  salute();

  return `Hello ${first}`;
}

sayHi(bigObj); // Hello John

/**
 * DEFAULT | REST | SPREAD
 */

// Default parameters
function sayHi (name = 'Nobody') {
  return `Hello ${name}`;
}

function sum (x = 0 , y = 0, z = 0) {
  return x + y + z;
}

// Rest Parameters
sum(...[3, 4]);
// sum(3, 4, null);
// sum(3, 4, 5);

// Spread | check support on 6.11.0
const obj = { a: 1, b: 2 };
const obj2 = { ...obj, c: 3, d: 4 };

const arr = [1, 2];
const arr2 = [ ...arr, 3, 4 ];

/**
 * LET | CONST
 */

let variableBeReassigned = 'something';
variableBeReassigned = 'something else';

const varCantReassign = 'something';
varCantReassign = 'something else';

const arr = [];

arr.push('something');
arr.push('something else');

// Block scoped variables

function test () {
  var y = 6;
  let x = 5;

  if (true) {
    var y = 10;
    const x = 3;
    console.log('inside if: ', x);
  }

  console.log('outside if: ', x);
}

function test () {
  var y;
  y = 6;
  let x = 5;

  if (true) {
    y = 10;
    const x = 3;
    console.log('inside if: ', x);
  }

  console.log('outside if: ', x);
  console.log('outside if y: ', y);
}

/**
 * ITERATORS
 */

const obj = { a: 1, b: 2 };

// Iterate through object keys
for (let key in obj) {
  console.log(key);
}

// Iterate through array values / iterable

const arr = [1, 3, 4, 5];
for (let value of arr) {
  console.log(value);
}

/**
 * MODULES
 */

// A bit different than NodeJS modules

// ES6
import path from 'path';
import { join } from 'path';

// ES5
var path = require('path');
var join = path.join;

var join = require('path').join;

// File1
export function sayHi () {}
export function salute () {}

export default function sayHello () {}

// File2
import { sayHi } from 'file1'; // Just get sayHi
import { sayHi, salute } from 'file1'; // Just get sayHi and salute
import sayHello, { sayHi } from 'file1'; // Get both

// Nodejs
var path = require('path');

exports.sayHi = function sayHi () {}
exports.salute = function salute () {}

// Similar to default export
module.exports = {
  sayHi
};

// Good practice

// START FILE
function sayHi () {}
function salute () {}

module.exports = {
  sayHi,
  salute
};
// END FILE
