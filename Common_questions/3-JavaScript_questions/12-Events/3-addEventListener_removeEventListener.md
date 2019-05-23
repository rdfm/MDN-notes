# addEventListener() and removeEventListener()

see [What does the addEventListener() function do, and how do you use it?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#addEventListener()_and_removeEventListener())

Mechanisms defined in the [Document Object Model (DOM) Level 2 Events Specification](https://www.w3.org/TR/DOM-Level-2-Events/)

## addEventListener() function

**EXAMPLE**:

```javascript
var btn = document.querySelector('button');

function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange);
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-addeventlistener.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-addeventlistener.html)**

## removeEventListener() function

- counterpart function to addEventListener()
- improve efficiency to clean up old unused event handlers

```javascript
btn.removeEventListener('click', bgChange);
```

**NOTE**: Can also register multiple handlers for the same listener / both would run

```javascript
myElement.onclick = functionA;
myElement.onclick = functionB;
```

```javascript
myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);
```

