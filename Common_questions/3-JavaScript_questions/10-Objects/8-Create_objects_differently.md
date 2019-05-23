# Other ways to create object instances

see [What different ways are there to create objects in JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS#Other_ways_to_create_object_instances)

## The Object() constructor

Use **Object()** constructor to create a new object

**EXAMPLE** (Empty object):

```javascript
var person1 = new Object();
```

```javascript
person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function() {
  alert('Hi! I\'m ' + this.name + '.');
};
```

**EXAMPLE** (Pass object literal as a parameter):

```javascript
var person1 = new Object({
  name: 'Chris',
  age: 38,
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
});
```

## Using the create() method

JS method **create()**, allows to create a new object based on any existing object, OR create object instances w/o first creating constructors.

**EXAMPLE** (.create() method):

```javascript
var person2 = Object.create(person1);
```

```javascript
person2.name
person2.greeting()
```