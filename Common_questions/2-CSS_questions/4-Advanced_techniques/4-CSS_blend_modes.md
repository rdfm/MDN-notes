# Blend modes

see [How to use blend modes in CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Advanced_box_effects#Blend_modes)

- add blend modes to elements that specify a blending effect when two elements overlap
- the final color shown for each pixel will be the result of a combination of the original pixel color, and that of the pixel in the layer underneath it

Two properties that use blend modes in CSS:

- **background-blend-mode**:
  - which blends together multiple background images and colors set on a single element.
- **mix-blend-mode**:
  - which blends together the element it is set on with elements it is overlapping — both background and content.

**NOTE**: Blend modes are also very new, and slightly less well supported than filters. There is no support as yet in Edge, and Safari only supports some of the blend mode options.

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/advanced_box_effects/blend-modes.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html)**

Reference: [MDN: blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode)

## background-blend-mode

**EXAMPLE**:

HTML:

```html
<div>
</div>
<div class="multiply">
</div>
```

CSS:

```css
div {
  width: 250px;
  height: 130px;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  background: url(https://mdn.mozillademos.org/files/13090/colorful-heart.png) no-repeat center 20px;
  background-color: green;
}

.multiply {
  background-blend-mode: multiply;
}
```

## mix-blend-mode

**EXAMPLE**:

HTML:

```html
<article>
  No mix blend mode
  <div>
  </div>
  <div>
  </div>
</article>

<article>
  Multiply mix
  <div class="multiply-mix">
  </div>
  <div>
  </div>
</article>
```

CSS:

```css
article {
  width: 280px;
  height: 180px;
  margin: 10px;
  position: relative;
  display: inline-block;
}

div {
  width: 250px;
  height: 130px;
  padding: 10px;
  margin: 10px;
}

article div:first-child {
  position: absolute;
  top: 10px;
  left: 0;
  background: url(https://mdn.mozillademos.org/files/13090/colorful-heart.png) no-repeat center 20px;
  background-color: green;
}

article div:last-child {
  background-color: purple;
  position: absolute;
  bottom: -10px;
  right: 0;
  z-index: -1;
}

.multiply-mix {
  mix-blend-mode: multiply;
}
```