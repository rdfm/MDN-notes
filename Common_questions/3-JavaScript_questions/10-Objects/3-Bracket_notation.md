# Bracket notation

see [What is bracket notation?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#Bracket_notation)

**bracket notation** = another way to access object properties

**Instead of**:

```javascript
person.age
person.name.first
```

**Can use**:

```javascript
person['age']
person['name']['first']
```

*NOTE*: Objects are sometimes called **associative arrays** — they map strings to values in the same way that arrays map numbers to values