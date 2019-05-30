# Filters

see [How to use filters in CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Advanced_box_effects#Filters)

Reference - [MDN: filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)

**filter** property:

- as apply filter to a layer
- filter can be applied to any element, block, or inline
- option example: *drop-shadow()*

**EXAMPLE**:

HTML:

```html
<p class="filter">Filter</p>

<p class="box-shadow">Box shadow</p>
```

CSS:

```css
p {
  margin: 1rem auto;
  padding: 20px;
  width: 100px;
  border: 5px dashed red;
}

.filter {
  -webkit-filter: drop-shadow(5px 5px 1px rgba(0,0,0,0.7));
  filter: drop-shadow(5px 5px 1px rgba(0,0,0,0.7));
}

.box-shadow {
  box-shadow: 5px 5px 1px rgba(0,0,0,0.7);
}
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/advanced_box_effects/filters.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/filters.html)**