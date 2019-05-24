# Modifying prototypes

see [How do you add methods to the constructor?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#Modifying_prototypes)

- modifying the prototype property of a constructor function — methods added to the prototype are then available on all object instances created from the constructor

EXAMPLE (Add to JS):

```javascript
Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
};
```

TEST (In browser console):

```javascript
person1.farewell();
```

*NOTE* (One approach):

1. Define the constructor
2. Create an instance object from the constructor
3. Add a new method to the constructor's prototype

```javascript
function Person(first, last, age, gender, interests) {

  // property and method definitions

}

var person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);

Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
};
```

**NOTE** (Better approach): common pattern for more object definitions is to define the properties inside the constructor, and the methods on the prototype

```javascript
// Constructor with property definitions

function Test(a, b, c, d) {
  // property definitions
}

// First method definition

Test.prototype.x = function() { ... };

// Second method definition

Test.prototype.y = function() { ... };

// etc.
```

**NOTE**: Pattern can be seen in action in Piotr Zalewa's **[school plan app](https://github.com/zalun/school-plan-app/blob/master/stage9/js/index.js)** example.