# Inline event handlers — don't use these

see [What are inline event handlers?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Inline_event_handlers_%E2%80%94_don%27t_use_these)

**WARNING**: DO NOT USE

**EXAMPLE**:

HTML:

```html
<button onclick="bgChange()">Press me</button>
```

JAVASCRIPT:

```javascript
function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
```

**EXAMPLE** (Old-fashioned event handler): 

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">Press me</button>
```

**EXAMPLE** (Apply to all buttons):

```javascript
var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = bgChange;
}
```