# Retrieving a specific string character

see [How you find what character is at a certain position in a string?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Retrieving_a_specific_string_character)

- Return any character inside a string by using square bracket notation
- Include square brackets ([]) on the end of variable name
- Inside the square brackets include the number of the character you want to return

**EXAMPLE**: First (zero indexed)

```javascript
var browserType = 'mozilla';
browserType[0]; // 'm'
```

**EXAMPLE**: Last (length-1)

```javascript
var browserType = 'mozilla';
browserType[browserType.length-1];  // 'a'
```