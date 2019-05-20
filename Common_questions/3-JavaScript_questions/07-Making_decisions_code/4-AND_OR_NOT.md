# Logical operators: AND, OR and NOT

see [How do you use AND, OR, and NOT operators in JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#Logical_operators_AND_OR_and_NOT)

- **&& — AND**: allows to chain two or more expressions, all of them have to individually evaluate to true for the whole expression to return true.
- **|| — OR**: allows you to chain two or more expressions, one or more of them have to individually evaluate to true for the whole expression to return true.
- **! — NOT**: used to negate an expression

**EXAMPLE (AND)**:

```javascript
if (choice === 'sunny' && temperature < 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
} else if (choice === 'sunny' && temperature >= 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
}
```

**EXAMPLE (OR)**:

```javascript
if (iceCreamVanOutside || houseStatus === 'on fire') {
  console.log('You should leave the house quickly.');
} else {
  console.log('Probably should just stay in then.');
}
```

**EXAMPLE (NOT)**:

```javascript
if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
  console.log('Probably should just stay in then.');
} else {
  console.log('You should leave the house quickly.');
}
```

**EXAMPLE (Combine as many logical statements as needed)**:

```javascript
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'Steve')) {
  // run the code
}
```