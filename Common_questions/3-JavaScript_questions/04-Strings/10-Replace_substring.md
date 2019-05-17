# Updating parts of a string

see [How do you replace one specific substring with another?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Updating_parts_of_a_string)

- Replace one substring inside a string with another substring
- Use **.replace()** method
  - takes 2 parameters
    - string want to replace
    - string to replace with

```javascript
var browserType = 'mozilla';
browserType.replace('moz','van');
```

*NOTE*: To get updated value reflected in the browserType variable, have to set the variable value to be the result of the operation (DOES NOT update the substring value automatically). Write: 

```javascript
browserType = browserType.replace('moz','van');
browserType;    // vanilla
```