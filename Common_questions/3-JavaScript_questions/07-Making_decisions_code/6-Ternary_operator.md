# Ternary operator

see [How do you use a ternary operator to make a quick choice between two options based on a true or false test?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#Ternary_operator)

[MDN: Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

- ternary OR conditional operator
- small bit of syntax
- tests a condition and returns
  - one value/expression, if *true*
  - one value/expression, if *false*
- a lot less code if simply two choices between true/false condition

*Pseudocode*:

```vim
( condition ) ? run this code : run this code instead
```

**EXAMPLE**:

```javascript
var greeting = ( isBirthday ) ? 'Happy birthday Mrs. Smith — we hope you have a great day!' : 'Good morning Mrs. Smith.';
```