# Dot notation

see [What is dot notation?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#Dot_notation)

**dot notation** = way to access object's properties and methods

**namespace** = object name (person)

**encapsulated** = anything inside the object

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

```javascript
person.age
person.interests[1]
person.bio()
```

## Sub-namespaces

Change name member to:

```javascript
name : {
  first: 'Bob',
  last: 'Smith'
},
```

**sub-namespace** = nest object to a member and access by chaining the extra step onto the end with another dot

```javascript
person.name.first
person.name.last
```