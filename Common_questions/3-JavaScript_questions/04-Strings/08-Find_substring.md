# Finding a substring inside a string and extracting it

see [How do you find and extract a specific substring from a string?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_a_substring_inside_a_string_and_extracting_it)

## Find if a smaller string is present inside a larger one

- Generally said "if a substring is present inside a string"
- Use **.indexOf()** method
  - Takes single parameter, the substring searching for
  - If true, result = starting position within string
  - If false, result = -1

**EXAMPLES**:

```javascript
var browserType = 'mozilla';
browserType.indexOf('zilla');   // 2
```

```javascript
var browserType = 'mozilla';
browserType.indexOf('vanilla'); // -1
```

```javascript
if(browserType.indexOf('mozilla') !== -1) {
  // do stuff with the string
}
```

## Extract substring

- Need to know where substring starts (and ends)
- Use **.slice()** method
  - second parameter is optional

**EXAMPLES**:

```javascript
var browserType = 'mozilla';
browserType.slice(0,3); // 'moz'
```

```javascript
var browserType = 'mozilla';
browserType.slice(2);   // 'zilla'
```
