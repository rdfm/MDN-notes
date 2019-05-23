# Constructors and object instances

see [What are constructors and instances, and how do you create them?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS#Constructors_and_object_instances)

**constructor functions** = JavaScript special functions to define and initialize objects and their features

## A simple example

EXAMPLE (Define a person with a normal function):

```javascript
function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + obj.name + '.');
  };
  return obj;
}
```

EXAMPLE (Create a new person by calling this function):

```javascript
var salva = createNewPerson('Salva');
salva.name;
salva.greeting();
```

**EXAMPLE** (constructor function, JavaScript version of a class):

```javascript
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}
```

*NOTE*: A constructor function name usually starts with a capital letter — this convention is used to make constructor functions easier to recognize in code.

**EXAMPLE** (Call a constructor to create objects):

```javascript
var person1 = new Person('Bob');
var person2 = new Person('Sarah');
```

```javascript
person1.name
person1.greeting()
person2.name
person2.greeting()
```

## Creating our finished constructor

**FINAL - Person() constructor function**:

```javascript
function Person(first, last, age, gender, interests) {
  this.name = {
     first : first,
     last : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
}
```

**FINAL - Create object instance**:

```javascript
var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
```

**FINAL - Call / access properties and members**:

```javascript
person1['age']
person1.interests[1]
person1.bio()
// etc.
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-finished.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-finished.html)**

## Further exercises

**[EXAMPLE (CODE w/ comments + answers)](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html)**