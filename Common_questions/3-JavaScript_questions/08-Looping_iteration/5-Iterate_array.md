# Iterate: Array

(MDN - No link): How to iterate over the elements in an array

see (external resource): [stackoverflow: Loop through an array in JavaScript](https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript)

## Sequential for loop

```javascript
var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    //Do something
}
```

**Pros**:

- Works on every environment
- You can use break and continue flow control statements

**Cons**:

- Too verbose
- Imperative
- Easy to have one-by-off errors

## ES5: Array.prototype.forEach

```javascript
array.forEach(function (item, index) {
    console.log(item, index);
});
```

*EXAMPLE*: ES6 arrow function syntax

```javascript
array.forEach(item => console.log(item));
```

**Pros**:

- Very short and succint.
- Declarative

**Cons**:

- Cannot use break / continue
  - Can replace **break** by filtering the array elements before iterating

```javascript
array.filter(item => item.condition < 10)
     .forEach(item => console.log(item))
```

**NOTE**:

## ES6: for-of statement

- for-of statement works for any kind of iterable object and also for generators
- Array objects are by definition built-in iterables in ES6

```javascript
let colors = ['red', 'green', 'blue'];
for (const color of colors){
  console.log(color);
}
```

**Pros**:

- Can iterate over a large variety of objects.
- Can use normal flow control statements (break / continue).
- Useful to iterate serially asynchronous values.

**Cons**:

- If targeting older browsers the transpiled output might be surprising.

## WARNING: DO NOT USE for...in

- for...in statement meant to **enumerate** object properties
- NOT for iterating
- SHOULD NOT be used for array-like objects
  - order of iteration NOT guaranteed, the array indexes may not be visited in numeric order
  - inherited properties are also enumerated

**EXAMPLE**: for...in statement, propery usage

```javascript
var obj = {
      "a": 1,
      "b": 2,
      "c": 3
    };

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
      // or if (Object.prototype.hasOwnProperty.call(obj,prop)) for safety...
        console.log("prop: " + prop + " value: " + obj[prop])
      }
    }
```

Suggested Read: [Enumeration vs. Iteration](https://web.archive.org/web/20101213150231/http://dhtmlkitchen.com/?category=/JavaScript/&date=2007/10/21/&entry=Iteration-Enumeration-Primitives-and-Objects)

Additional Resource: [ES6 forEach() loops with vanilla JavaScript](https://gomakethings.com/es6-foreach-loops-with-vanilla-javascript/)