# Variable types

see [What data types can values have in JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#Variable_types)

## Numbers

- integers aka whole numbers (i.e. 42)
- decimal numbers aka floats or floating point numbers (i.e. 3.14)
- **DO NOT** need to include quotes

```javascript
let myAge = 36;
```

## Strings

- pieces of text
- **NEED TO** wrap in single or double quotes

```javascript
let dolphinGoodbye = 'So long and thanks for all the fish';
```

## Booleans

- true OR false values
- Generally: used to test a condition

```javascript 
let iAmAlive = true;
OR
let test = 6 < 3;
```

## Arrays

- single object that contains multiple values
- enclosed in square brackets, separated by commas

```javascript
let myNameArray = ['Chris', 'Bob', 'Jim'];
let myNumberArray = [10, 15, 40];
```

- Once arrays are defined, can access each value by location:

```javascript
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
```

*NOTE*: Square brackets specify an index value, arrays in JavaScript are zero-indexed (first element is at index 0)

## Objects

- in programming, an object is a structure of code that models a real-life object.

```javascript
let dog = { name : 'Spot', breed : 'Dalmatian' };
```

- to retrieve information stored in an object:

```javascript
dog.name
```