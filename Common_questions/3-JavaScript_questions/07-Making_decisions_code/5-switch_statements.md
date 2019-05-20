# switch statements

see [How do you conveniently handle a large number of choices for one condition?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements)

- take a single expression/value as an input
- then look through a number of choices until they find one that matches that value
- executing the corresponding code that goes along with it

*Pseudocode*:

```javascript
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;
    
  // include as many cases as you like

  default:
    actually, just run this code
}
```

*NOTE*: Don't have to include *default* section

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

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-switch.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html)**

*Research*:

- select.addEventListener('change', setWeather);
- select.onchange = setWeather;