# Event handler properties

see [What are event handlers and how do you use them?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_handler_properties)

**EXAMPLE**:

HTML:

```html
<button>Change color</button>
```

JAVASCRIPT:

```javascript
var btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
```

**EXAMPLE** (set the handler property to be equal to a named function name):

```javascript
var btn = document.querySelector('button');

function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;
```

**Event Handler Properties**:

- btn.onclick
- btn.onfocus
- btn.onblur
- btn.ondblclick
- window.onkeypress
- window.onkeydown
- window.onkeyup
- btn.onmouseover
- btn.onmouseout