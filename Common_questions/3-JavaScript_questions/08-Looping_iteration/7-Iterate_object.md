# Iterate: Object

(MDN - No link): How to iterate over the members in an object

see (external resource): [zellwk - Looping through objects in JavaScript](https://zellwk.com/blog/looping-through-js-objects/)

## Before ES6 (for...in) loop

- PROBLEM: with a **for...in** loop is that it iterates through properties in the Prototype chain
- when loop through an object, need to checkk if property belongs to the object (with **hasOwnProperty**)

EXAMPLE:

```javascript
for (var property in object) {
  if (object.hasOwnProperty(property)) {
    // Do things here
  }
}
```

Additional Resource: [MDN: for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

**NOTE**: No longer have to use for...in and hasOwnProperty, better way after ES6

NOTE (before ES6) [MDN: for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

## A better way to loop through objects

- first to convert the object into an array
- then, loop through the array

Can convert an object into an array with three methods:

1. **Object.keys**
2. **Object.values**
3. **Object.entries**

### Object.keys

**Object.keys** creates an array that contains the properties of an object.

```javascript
const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
}

const keys = Object.keys(fruits)
console.log(keys) // [apple, orange, pear]
```

### Object.values

**Object.values** creates an array that contains the values of every property in an object.

```javascript
const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
}

const values = Object.values(fruits)
console.log(values) // [28, 17, 54]
```

### Object.entries

**Object.entries** creates an array of arrays.

- Each inner array has two items
  - first item = property
  - second item = value

- Recommended method, because both property + value

```javascript
const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
}

const entries = Object.entries(fruits)
console.log(entries)
// [
//   [apple, 28],
//   [orange, 17],
//   [pear, 54]
// ]
```

## Looping through the array

- Once converted the object into an array with **Object.keys**, **Object.values**, or **Object.entries**
- Can loop through as a normal arrray

```javascript
// Looping through arrays created from Object.keys
const keys = Object.keys(fruits)
for (const key of keys) {
  console.log(key)
}

// Results:
// apple
// orange
// pear
```

EXAMPLE: If use **Object.entries**, might want to destructure the array into its key and property

```javascript
const entries = Object.entries(fruits)

for (const [fruit, count] of entries) {
  console.log(`There are ${count} ${fruit}s`)
}

// Result
// There are 28 apples
// There are 17 oranges
// There are 54 pears
```

Additional Resource: [Go Make Things - The for...in loop with vanilla JavaScript](https://gomakethings.com/the-for...in-loop-with-vanilla-javascript/)