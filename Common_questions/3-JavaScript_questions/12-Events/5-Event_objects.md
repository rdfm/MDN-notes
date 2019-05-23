# Event objects

see [What are event objects, and how do you use them?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_objects)

**event object** = parameter for an event handler function, with a name such as *event*, *evt*, or *e*

**EXAMPLE**:

```javascript
function bgChange(e) {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}  

btn.addEventListener('click', bgChange);
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventobject.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)**

## e.target

**e.target** = useful when you want to set the same event handler on multiple elements and do something to all of them when an event occurs on them

**EXAMPLE**:

```javascript
var divs = document.querySelectorAll('div');

for (var i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
    e.target.style.backgroundColor = bgChange();
  }
}
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/useful-eventtarget.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html)**

RESEARCH: [MDN - Media​Stream Recording API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API)