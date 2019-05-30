# Box shadows

see [How to add shadows to boxes](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Advanced_box_effects#Box_shadows)

**box-shadow** property:

- allows to apply one or more drop shadows to an element
- support most browsers and IE 9+
  - older IE version, shadow will NOT show

**[EXAMPLE (CODE)](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/box-shadow.html)**

**[LIVE VERSION](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/advanced_box_effects/box-shadow.html)**

## A simple box shadow

**HTML**:

```html
<article class="simple">
  <p><strong>Warning</strong>: The thermostat on the cosmic transcender has reached a critical level.</p>
</article>
```

**CSS**:

```css
p {
  margin: 0;
}

article {
  max-width: 500px;
  padding: 10px;
  background-color: red;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.25));
}

.simple {
  box-shadow: 5px 5px 5px rgba(0,0,0,0.7);
}
```

### box-shadow property values

1. First length value: **horizontal offset** = shadow to the right (negative value - left)
2. Second length value: **vertical offset** = shadow downwards (negative value - upwards)
3. Third length value: **blur radius** = amount of blurring applied
4. Color value: **base color** = base color of shadow

**NOTE**: Can use any length or color values.

## Multiple box shadows

**CSS**:

```css
p {
  margin: 0;
}

article {
  max-width: 500px;
  padding: 10px;
  background-color: red;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.25));
}

.multiple {
  box-shadow: 1px 1px 1px black,
              2px 2px 1px black,
              3px 3px 1px red,
              4px 4px 1px red,
              5px 5px 1px black,
              6px 6px 1px black;
}
```

## Other box shadow features

**box-shadow** has an **inset** keyword

- put at the start of shadow declaration causes it to become an inner shadow

**EXAMPLE**:

HTML:

```html
<button>Press me!</button>
```

CSS:

```css
button {
  width: 150px;
  font-size: 1.1rem;
  line-height: 2;
  border-radius: 10px;
  border: none;
  background-image: linear-gradient(to bottom right, #777, #ddd);
  box-shadow: 1px 1px 1px black,
              inset 2px 3px 5px rgba(0,0,0,0.3),
              inset -2px -3px 5px rgba(255,255,255,0.5);
}

button:focus, button:hover {
  background-image: linear-gradient(to bottom right, #888, #eee);
}

button:active {
  box-shadow: inset 2px 2px 1px black,
              inset 2px 3px 5px rgba(0,0,0,0.3),
              inset -2px -3px 5px rgba(255,255,255,0.5);
}
```

**NOTE**: (Not common) **box-shadow** value, is **spread radius**. Causes shadow to become bigger than the original box.