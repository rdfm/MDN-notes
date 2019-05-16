# Dynamic typing

see [What does 'loosely typed' mean?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#Dynamic_typing)

> JavaScript is a "dynamically typed language", which means that, unlike some other languages, you don't need to specify what data type a variable will contain (numbers, strings, arrays, etc).

```javascript
let myString = 'Hello';
```

```javascript
let myNumber = '500'; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;
```