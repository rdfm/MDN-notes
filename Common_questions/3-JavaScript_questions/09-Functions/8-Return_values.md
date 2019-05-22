# Function return values

see [What are return values, and how do you use them?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values)

## What are return values?

**return values** = values returned by the function when it completes

*NOTE*: Some functions **DO NOT** return a value (listed as void or undefined is such cases)

### Using return values in your own functions

Need to use the **return** keyword

*EXAMPLE*:

```javascript
function randomNumber(number) {
  return Math.floor(Math.random()*number);
}

Could be written as:

function randomNumber(number) {
  var result = Math.floor(Math.random()*number);
  return result;
}
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-library-finished.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html)**