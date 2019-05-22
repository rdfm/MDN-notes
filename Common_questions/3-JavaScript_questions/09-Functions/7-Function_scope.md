# Function scope and conflicts

see [What is function scope?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts)

- When create a function, variables and other things defined inside the function are inside their own separate **scope**
  - Locked away in their own separate compartments, unreachable from inside other functions or from code outside the function
- Top level outside all your functions is called the **global scope**
  - Values defined in the global scope are accessible from everywhere

*NOTE*: If two .js files have a similar greeting() function, the second/last called function will override the first.

[EXAMPLE (CODE)](https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/functions)
[LIVE VERSION](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html)

*NOTE*: [MDN: ReferenceError: "x" is not defined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined) is the most common error will encounter

## Functions inside functions

*NOTE*: Can call a function from anywhere, even inside another function. Easier to break down a complex function into several sub-functions. Just make sure values being used inside functions are properly in scope.

```javascript
function myBigFunction() {
  var myValue = 1;
      
  subFunction1(myValue);
  subFunction2(myValue);
  subFunction3(myValue);
}

function subFunction1(value) {
  console.log(value);
}

function subFunction2(value) {
  console.log(value);
}

function subFunction3(value) {
  console.log(value);
}
```