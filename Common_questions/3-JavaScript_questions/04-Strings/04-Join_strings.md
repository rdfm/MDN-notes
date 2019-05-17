# Concatenating strings

see [How do you join strings together?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#Concatenating_strings)

> **Concatenate** is a fancy programming word that means "join together". Joining together strings in JavaScript uses the plus (+) operator

**EXAMPLES**:

```javascript
var one = 'Hello, ';
var two = 'how are you?';
var joined = one + two;
joined; // "Hello, how are you?".
```

```javascript
var multiple = one + one + one + one + two;
multiple;
```

```javascript
var response = one + 'I am fine — ' + two;
response;
```

*NOTE*: When enter an actual string in your code, enclosed in single or double quotes, it is called a **string literal**.

## Concatenation in context

**HTML**:

```html
<button>Press me</button>
```

**JAVASCRIPT**:

```javascript
var button = document.querySelector('button');

button.onclick = function() {
  var name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
}
```

**[LIVE VERSION](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#Concatenation_in_context)**