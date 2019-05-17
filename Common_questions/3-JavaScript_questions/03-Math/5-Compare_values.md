# Comparison operators

see [How do you compare values in JavaScript? (e.g. to see which one is bigger, or to see if one value is equal to another).](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#Comparison_operators)

- Run true/false tests, then act accordingly depending on the result of that test — to do this we use comparison operators

## ===

> Strict equality

- Tests whether the left and right values are identical to one another
  - 5 === 2 + 4

## !==

> Strict-non-equality

- Tests whether the left and right values are not identical to one another
  - 5 !== 2 + 3

## <

> Less than

- Tests whether the left value is smaller than the right one
  - 10 < 6

## >

> Greater than

- Tests whether the left value is greater than the right one.
  - 10 > 20

## <=

> Less than or equal to

- Tests whether the left value is smaller than or equal to the right one.
  - 3 <= 2

## >=

> Greater than or equal to

- Tests whether the left value is greater than or equal to the right one.
  - 5 >= 4

*NOTE*: **==** and **!+**, DO NOT check if the values' datatypes are the same.

**EXAMPLE (CODE)**:

HTML:

```html
<button>Start machine</button>
<p>The machine is stopped.</p>
```

JAVASCRIPT:

```javascript
var btn = document.querySelector('button');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
}
```

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/conditional.html)**

*NOTE*: Such a control that swaps between two states is generally referred to as a **toggle**. It toggles between one state and another — light on, light off, etc.