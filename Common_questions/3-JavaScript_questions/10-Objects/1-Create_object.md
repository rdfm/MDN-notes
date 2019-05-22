# Object basics

see [How do you create an object?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#Object_basics)

**object** = a collection of related data and/or functionality (which usually consists of several variables and functions — which are called properties and methods when they are inside

**EXAMPLE** (Empty object):

In browser's JavaScript console, type ...

```javascript
var person = {};
person;

/* Returns:
[object Object]
Object { }
{ }
*/
```

**EXAMPLE** (Object):

```javascript
var person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};
```

In browser's JavaScript console, type ...

```javascript
person.name
person.name[0]
person.age
person.interests[1]
person.bio()
person.greeting()
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-finished.html)**

**[LIVE VERSION (Open browser console)](https://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-finished.html)**

*NOTE*:

- an object is made up of multiple members
- each member has a name and a value
- each name/value pair is separated by a commoa

**properties** = data items

**methods** = functions

**object literal** = objects contents are written out / defined in the function (NOT instantiated from a class).