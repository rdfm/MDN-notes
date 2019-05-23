# Object prototypes
 
 see [What are object prototypes?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

**prototypes** = mechanism by which JavaScript objects inherit features from one another

## A prototype-based language?

**prototype-based language** = provide inheritance, JavaScript often described ad

**prototype object** = objects can have, which acts as a template object that it inherits methods and properties from

**prototype chain** = object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. (Ex. objects have properties and methods defined on other objects available to them)

## Understanding prototype objects

[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html)

[LIVE VERSION](https://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html)

```javascript
function Person(first, last, age, gender, interests) {
  
  // property and method definitions
  this.first = first;
  this.last = last;
//...
}
```

```javascript
var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
```

```javascript
person1.valueOf()
// Object.valueOf() 
```

**NOTE**: The methods and properties are **NOT** copied from one object to another in the prototype chain — they are accessed by walking up the chain

## The prototype property: Where inherited members are defined

prototype property

- inherited ones (sub-namespace)
- Object.prototype
  - Ex. Object.prototype.watch(), Object.prototype.valueOf()
- NOT: Object
  - Ex (NOT inherited). Object.is(), Object.keys()

TEST (In browser console):

```javascript
Person.prototype
```

```javascript
Object.prototype
```

**READ**: [MDN: Using prototypes in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#Using_prototypes_in_JavaScript)

## Revisiting create()

**Object.create()** method can be used to create a new object instance

```javascript
var person2 = Object.create(person1);
```

TEST (In browser console):

```javascript
person2.__proto__
```