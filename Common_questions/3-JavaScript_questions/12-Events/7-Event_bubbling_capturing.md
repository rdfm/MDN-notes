# Event bubbling and capture

see [How do events fire on nested elements? (event propagation, also related — event bubbling and capturing)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)

- Will NOT come across very often, but difficult to understand
- Event bubbling and capture are two mechanisms that describe what happens when two handlers of the same event type are activated on one element

**EXAMPLE**:

```html
<button>Display video</button>

<div class="hidden">
  <video>
    <source src="rabbit320.mp4" type="video/mp4">
    <source src="rabbit320.webm" type="video/webm">
    <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
  </video>
</div>
```

```javascript
var btn = document.querySelector('button');
var videoBox = document.querySelector('div');
var video = document.querySelector('video');

btn.onclick = function() {
    videoBox.setAttribute('class','showing');
}

videoBox.onclick = function() {
    videoBox.setAttribute('class','hidden');
};

video.onclick = function() {
    video.play();
};
```

[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/show-video-box.html)

[LIVE VERSION](https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box.html)

## Bubbling and capturing explained

When an event is fired on an element that has a parent, modern browsers run two different phases:

**capturing phase**:

- Browser checks to see if the element's outer-most ancestor (&lt;html&gt;) has an onclick event handler registered on it in the capturing phase, and runs it if so.
- Then it moves on to the next element inside &lt;html&gt; and does the same thing, then the next one, and so on until it reaches the element that was actually clicked on.

**bubbling phase**:

- Browser checks to see if the element that was actually clicked on has an onclick event handler registered on it in the bubbling phase, and runs it if so.
- Then it moves on to the next immediate ancestor element and does the same thing, then the next one, and so on until it reaches the &lt;html&gt; element.

## Fixing the problem with stopPropagation()

**stopPropagation()** = when invoked on a handler's event object makes it so that handler is run, but the event doesn't bubble any further up the chain, so no more handlers will be run

```javascript
video.onclick = function(e) {
  e.stopPropagation();
  video.play();
}
```

**[FINAL - EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/show-video-box.html)**

**[FINAL - LIVE VERSION](https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html)**
