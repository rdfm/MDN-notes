# Finding the length of an array

see [How do you find the length of an array?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays#Finding_the_length_of_an_array)

- Find out the length of an array (how many items are in it)
- Use **length** property

**EXAMPLE**:

```javascript
var sequence = [1, 1, 2, 3, 5, 8, 13];
sequence.length;    // 7
```

**EXAMPLE**: (Loop through array)

```javascript
var sequence = [1, 1, 2, 3, 5, 8, 13];

for (var i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}
```