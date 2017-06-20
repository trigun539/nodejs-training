/**
 * ARROW FUNCTIONS
 */

const sum = (x, y) => {
  return x + y;
};

sum(2, 3); // 5

const arr = [1, 2, 3, 4];

// Arrow functions makes it easy to perform small operations on arrays/objects
arr.map(x => x + 1);

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

const obj = {
  name: 'Hunter',
  sayHi () { console.log('Hello everybody!'); } // Add methods while creating objs.
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

const bigObj = { first: 'John', last: 'Joe' };

function sayHi (obj) {
  const { first } = obj;

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

function sum (x = 0 , y = 0) {
  return x + y;
}

// Rest Parameters
sum(...[3, 4]);

// Spread
const obj = { a: 1, b: 2 };
const obj2 = { ...obj, c: 3, d: 4 };

const arr = [1, 2];
const arr2 = [ ...arr, 3, 4 ];

/**
 * LET | CONST
 */

// Block scoped variables

function test () {
  let x = 5;

  if (true) {
    const x = 3;
    console.log('inside if: ', x);
  }

  console.log('outside if: ', x);
}


