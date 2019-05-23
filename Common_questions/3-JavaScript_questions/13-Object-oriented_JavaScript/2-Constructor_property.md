# The constructor property

see [What is the constructor property, and how can you use it?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#The_constructor_property)

- Every constructor function has a prototype property whose value is an object containing a **constructor** property.
- constructor property points to the original constructor function

TEST (In browser console):

```javascript
person1.constructor
person2.constructor
```

TEST (In browser console):

```javascript
var person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
```

```javascript
person3.name.first
person3.age
person3.bio()
```

*NOTE*: Won't need oftn, but can be useful to create a new instance when don't have reference to the original constructor (easily)

EXAMPLE(constructor property - other uses):

```javascript
instanceName.constructor.name
```

```javascript
person1.constructor.name
```