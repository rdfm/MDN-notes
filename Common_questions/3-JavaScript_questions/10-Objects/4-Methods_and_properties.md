# Setting object members

see [How do you get and set the methods and properties of an object?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#Setting_object_members)

**getting** = retrieving object members

**setting** = updating/creating the value of object members by declaring the member equal to the new value

```javascript
person.age = 45;
person['name']['last'] = 'Cratchit';
```

```javascript
person.age
person['name']['last']
```

**EXAMPLE (Creating new members)**:

```javascript
person['eyes'] = 'hazel';
person.farewell = function() { alert("Bye everybody!"); }
```

```javascript
person['eyes']
person.farewell()
```

**EXAMPLE (Store custom value types)**:

```javascript
var myDataName = nameInput.value;
var myDataValue = nameValue.value;
```

**EXAMPLE (Add new member name and value)**:

```javascript
var myDataName = 'height';
var myDataValue = '1.75m';
person[myDataName] = myDataValue;
```

```javascript
person.height
```