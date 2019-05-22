# Function parameters

see [How do you specify parameters (or arguments) when invoking a function?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Function_parameters)

**parameters**:

- values that need to be included inside the function parentheses
- aka arguments, properties, or even attributes

EXAMPLE: Browser's built-in Math.random function, does NOT require parameters. Returns a random number between 0 and 1

```javascript
var myNumber = Math.random();
```

EXAMPLE: replace function needs two parameters -- subtring to find, and substring to replace that string

```javascript
var myText = 'I am a string';
var newString = myText.replace('string', 'sausage');
```

**NOTE**: Multiple parameters are separated by commas

**NOTE**: Sometimes parameters are optional, if NOT specified the function will adopt a default behavior

EXAMPLE: Optional parameter (comma is used by default)

```javascript
var myArray = ['I', 'love', 'chocolate', 'frogs'];
var madeAString = myArray.join(' ');
// returns 'I love chocolate frogs'
var madeAString = myArray.join();
// returns 'I,love,chocolate,frogs'
```