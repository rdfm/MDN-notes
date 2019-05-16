# Common beginner's mistakes

see [Common beginner's mistakes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#Common_beginner's_mistakes)

## Correct spelling and casing

```javascript
CORRECT:

getElementsByTagName()
getElementsByName()
getElementsByClassName()
getElementById()
```

## Semi-colon position

```javascript
CORRECT:

elem.style.color = 'red';
```

## Functions

- One of the most common errors is to declare the function, but not call it anywhere.

```javacript
function myFunction() {
  alert('This is my function.');
};

myFunction();
```

### Function scope

**REMEMBER**: Functions have their own scope — you can't access a variable value set inside a function from outside the function, unless you declared the variable globally (i.e. not inside any functions), or return the value out of the function.

### Running code after a return statement

**REMEMBER**: When return a value out of a function, the JavaScript interpreter exits the function — *NO* code declared after the return statement will run.

## Object notation versus normal assignment

```javascript
EXAMPLE (Normal assignment):

const myNumber = 0;
```

```javascript
EXAMPLE (Object notation):

const myObject = {
  name: 'Chris',
  age: 38
}
```