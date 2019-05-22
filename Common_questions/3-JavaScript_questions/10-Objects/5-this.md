# this

see [What is this, in the context of an object?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#What_is_this)

**this** keyword = refers to the current object the code is being written inside

EXAMPLE (person objects): **this** is equivalent to **person**

```javascript
var person1 = {
  name: 'Chris',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

var person2 = {
  name: 'Brian',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}
```

```javascript
persona1.greeting();
persona2.greeting();
```