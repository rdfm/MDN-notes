# Changing the box model completelySection

see [How to change the box model completely using box-sizing](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Box_model_recap#Changing_the_box_model_completely)

total width of a box = sum of its

- width
- padding-right
- padding-left
- border-right
- border-left

OR

**border-sizing: border-box;**

**EXAMPLE**: Difference or border-sizing: border-box;

HTML:

```html
<div class="one"></div>
<div class="two"></div>
```

CSS:

```css
html {
  font-family: sans-serif;
  background: #ccc;
}

.one, .two {
  background: red;
  width: 300px;
  height: 150px;
  padding: 20px;
  border: 10px solid black;
  margin: 20px auto;
}

.two {
  box-sizing: border-box;
}
```

JAVASCRIPT:

```javascript
var one = document.querySelector('.one');
var two = document.querySelector('.two');

function outputWH(box) {
  var width = box.offsetWidth;
  var height = box.offsetHeight;
  box.textContent = 'Width: ' + width + 'px, Height: ' + height + 'px.';
}

outputWH(one);
outputWH(two);
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/box-model-recap/box-sizing-example.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/css/styling-boxes/box-model-recap/box-sizing-example.html)**