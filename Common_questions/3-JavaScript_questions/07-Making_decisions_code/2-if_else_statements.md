# if ... else statements

see [How do you use if ...else statements?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#if_..._else_statements)

**if ... else** statement = most common type of conditional statement in JavaScript

## Basic if ... else syntax

Pseudocode:

```
if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}
```

*Reads as*:  "**if** the **condition** returns true, run code A, **else** run code B"

### A real example

```javascript
var shoppingDone = false;

if (shoppingDone === true) {
  var childsAllowance = 10;
} else {
  var childsAllowance = 5;
}
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/allowance-updater.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html)**

## else if

- a way to chain on extra choices/outcomes to if...else

**EXAMPLE**:

HTML:

```html
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```

JAVASCRIPT:

```javascript
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-else-if.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html)**

**NOTE**: Comparison operators

- **===** and **!==** — test if one value is identical to, or not identical to, another
- **<** and **>** — test if one value is less than or greater than another
- **<=** and **>=** — test if one value is less than or equal to, or greater than or equal to, another

*NOTE*: Any value that is **NOT** false, undefined, null, 0, NaN, or an empty string ('') actually returns true when tested as a conditional statement, therefore can simply use a variable name on its own to test whether it is true, or even that it exists (i.e. it is not undefined.)

**EXAMPLES**:

```javascript
var cheese = 'Cheddar';

if (cheese) {
  console.log('Yay! Cheese available for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today.');
}
```

```javascript
var shoppingDone = false;

if (shoppingDone) { // don't need to explicitly specify '=== true'
  var childsAllowance = 10;
} else {
  var childsAllowance = 5;
}
```