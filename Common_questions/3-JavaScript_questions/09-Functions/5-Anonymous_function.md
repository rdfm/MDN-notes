# Anonymous functions

see [What is an anonymous function?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Anonymous_functions)

```javascript
function() {
  alert('hello');
}
```

**anonymous function**:

- a function with no name
- won't do anything on its own
- generally use an anonymous function along with an event handler

```html
<button>Button</button>
```

```javascript
var myButton = document.querySelector('button');

myButton.onclick = function() {
  alert('hello');
}
```

Can also assign an anonymous function to be the value of a variable:

```javascript
var myGreeting = function() {
  alert('hello');
}

myGreeting();
```

Can also assign the function to be the value of multiple variables:

```javascript
var anotherGreeting = myGreeting;
```

```javascript
Invoke using either:

myGreeting();
anotherGreeting();
```

**RECOMMENDED**: Function Form

```javascript
function myGreeting() {
  alert('hello');
}
```

**RECOMMENDED**: Use anonymous functions to run code in response to an event (Button being clicked - using an event handler)

```javascript
myButton.onclick = function() {
  alert('hello');
  // I can put as much code
  // inside here as I want
}
```