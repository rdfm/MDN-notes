# Inheritance in Java​Script

see [How do you create a new constructor that inherits its members from a parent constructor?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)

- Create "child" object classes (constructors) that inherit features from their "parent" classes.

## Prototypal inheritance

- prototype chains
- members are inherited going up a chain
- involved built-in browser functions

## Getting started

**REFER TO**: [OOJS Class Inheritance - Start](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-start.html)

*EXAMPLE*: Person() constructor

```javascript
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};
```

*EXAMPLE*: methods are all defined on the constructor's prototype

```javascript
Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};

Person.prototype.bio = function() {
    // ...
}

Person.prototype.farewell = function() {
    // ...
}
```

## Defining a Teacher() constructor function

*EXAMPLE*: Create Teacher() constructor (inherits from Person())

```javascript
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}
```

**NOTE**:

- **call()** = allows you to call a function defined somewhere else, but in the current context
- first parameter specifies the value of **this** that you want to use when running the function, and the other parameters are those that should be passed to the function when it is invoked.
- this.subject = subject, defines new property tearchers are going to have

*EXAMPLE*: Teacher() constructor (written w/o inheritance - redundant / more lines of code)

```javascript
function Teacher(first, last, age, gender, interests, subject) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.subject = subject;
}
```

### Inheriting from a constructor with no parameters

**NOTE**: If the constructor you are inheriting from doesn't take its property values from parameters, you don't need to specify them as additional arguments in call()

```javascript
function Brick() {
  this.width = 10;
  this.height = 20;
}
```

```javascript
function BlueGlassBrick() {
  Brick.call(this);

  this.opacity = 0.5;
  this.color = 'blue';
}
```

**NOTE**: Only specified this inside call() — no other parameters are required as we are not inheriting any properties from the parent that are set via parameters

## Setting Teacher()'s prototype and constructor reference

TEST (In broswer console):

```javascript
Object.getOwnPropertyNames(Teacher.prototype)
Object.getOwnPropertyNames(Person.prototype)
```

*EXAMPLE*: Add new line under Teacher() constructor

```javascript
Teacher.prototype = Object.create(Person.prototype);
```

**NOTE**: **create()** makes a new object the value of Teacher.prototype, the new object has Person.prototype as its prototype and will therefore inherit, if and when needed, all the methods available on Person.prototype.

*EXAMPLE*: In addition add (beneath)

```javascript
Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true });
```

## Giving Teacher() a new greeting() function

*EXAMPLE*: Define new greeting() function on Teacher() constructor via prototype, add

```javascript
Teacher.prototype.greeting = function() {
  var prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }

  alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};
```

## Trying the example out

*EXAMPLE*: Create an object instance from Teacher()

```javascript
var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
```

*TEST*: In browser console

```javascript
teacher1.name.first;
teacher1.interests[0];
teacher1.bio();
teacher1.subject;
teacher1.greeting();
teacher1.farewell();
```

**[EXAMPLE(CODE)](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-finished.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-finished.html)**

*NOTE*: Most popular JavaScript libraries has easy set of funtionality for doing inheritance. Example: [CoffeeScript](http://coffeescript.org/#classes) provides *class*, *extends*, etc.

## A further exercise

*EXERCISE*: Include Student() class

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-student.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-student.html)**

## Object member summary

Three types of property/method:

1. Those defined inside a constructor function that are given to object instances. Easy to spot, members defined inside a constructor using the this.x = x; in built in browser code, they are the members only available to object instances (usually created by calling a constructor using the new keyword, e.g. var myInstance = new myConstructor()).

2. Those defined directly on the constructor themselves, that are available only on the constructor. These are commonly only available on built-in browser objects, and are recognized by being chained directly onto a constructor, not an instance. For example, Object.keys().

3. Those defined on a constructor's prototype, which are inherited by all instances and inheriting object classes. These include any member defined on a Constructor's prototype property, e.g. myConstructor.prototype.x().

## ECMAScript 2015 Classes

- ECMAScript 2015 introduces class syntax to JavaScript as a way to write reusable classes using easier, cleaner syntax, which is more similar to classes in C++ or Java

*EXAMPLE*: Person() rewritten, class-style

```javascript
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}
```

*EXAMPLE*: Instantiate with **new operator**

```javascript
let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();
// Hi! I'm Han

let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);
leia.farewell();
// Leia has left the building. Bye for now
```

### Inheritance with class syntax

- Use the **extends keyword** to tell JavaScript the class we want to base our class on

```javascript
class Teacher extends Person {
  constructor(subject, grade) {
    this.subject = subject;
    this.grade = grade;
  }
}
```

*EXAMPLE*: To call the parent constructor, use **super() operator**

```javascript
class Teacher extends Person {
  constructor(subject, grade) { 
    super();              // Now `this` is initialized by calling the parent constructor.
    this.subject = subject;   
    this.grade = grade; 
  }
}
```

*EXAMPLE*: Initialize parent class properties in sub-class

```javascript
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}
```

*EXAMPLE*: Instantiate Teacher Object instance

```javascript
let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting(); // Hi! I'm Severus.
snape.farewell(); // Severus has left the building. Bye for now.
snape.age // 58
snape.subject; // Dark arts
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/es2015-class-inheritance.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/oojs/advanced/es2015-class-inheritance.html)**

## Getters and Setters

- Getters and setters work in pairs
- **getter** returns the current value of the variable
- and its corresponding **setter** changes the value of the variable to the one it defines

*EXAMPLE*: Modified Teacher class

```javascript
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    // subject and grade are specific to Teacher
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}
```

**NOTE**:

- To show the current value of the _subject property of the snape object we can use the snape.subject getter method.
- To assign a new value to the _subject property we can use the snape.subject="new value" setter method.

```javascript
// Check the default value
console.log(snape.subject) // Returns "Dark arts"

// Change the value
snape.subject="Balloon animals" // Sets _subject to "Balloon animals"

// Check it again and see if it matches the new value
console.log(snape.subject) // Returns "Balloon animals"
```
**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/es2015-getters-setters.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/oojs/advanced/es2015-getters-setters.html)**

## When would you use inheritance in JavaScript?

**delegation** =  the sharing of functionality between objects; specialized objects delegate functionality to a generic object type.

**WARNING**: **DO NOT** have too many levels on inheritance

## Alternatives for extending the prototype chain

[MDN: Different ways to create objects and the resulting prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#Different_ways_to_create_objects_and_the_resulting_prototype_chain)