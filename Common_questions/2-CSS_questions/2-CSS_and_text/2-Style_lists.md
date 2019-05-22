# Styling lists

see [How to customize a list of elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists)

## A simple list example

**EXAMPLE (HTML)**:

```html
<h2>Shopping (unordered) list</h2>

<p>Paragraph for reference, paragraph for reference, paragraph for reference,
paragraph for reference, paragraph for reference, paragraph for reference.</p>

<ul>
  <li>Hummus</li>
  <li>Pita</li>
  <li>Green salad</li>
  <li>Halloumi</li>
</ul>

<h2>Recipe (ordered) list</h2>

<p>Paragraph for reference, paragraph for reference, paragraph for reference,
paragraph for reference, paragraph for reference, paragraph for reference.</p>

<ol>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>Fry the halloumi in a shallow, non-stick pan, until browned on both sides.</li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>

<h2>Ingredient description list</h2>

<p>Paragraph for reference, paragraph for reference, paragraph for reference,
paragraph for reference, paragraph for reference, paragraph for reference.</p>

<dl>
  <dt>Hummus</dt>
  <dd>A thick dip/sauce generally made from chick peas blended with tahini, lemon juice, salt, garlic, and other ingredients.</dd>
  <dt>Pita</dt>
  <dd>A soft, slightly leavened flatbread.</dd>
  <dt>Halloumi</dt>
  <dd>A semi-hard, unripened, brined cheese with a higher-than-usual melting point, usually made from goat/sheep milk.</dd>
  <dt>Green salad</dt>
  <dd>That green healthy stuff that many of us just use to garnish kebabs.</dd>
</dl>
```

*NOTE*: Browser styling defaults

- &lt;ul&gt; and &lt;ol&gt; elements have a top and bottom margin of 16px (1em) and a padding-left of 40px (2.5em)
- &lt;li&gt; elements have no set defaults for spacing
- &lt;dl&gt; element has a top and bottom margin of 16px (1em), but no padding set
&lt;dd&gt; elements have margin-left of 40px (2.5em.)
- &lt;p&gt; elements have a top and bottom margin of 16px (1em), the same as the different list types.

## Handling list spacing

**[FINAL - EXAMPLE(CODE)](https://github.com/mdn/learning-area/blob/master/css/styling-text/styling-lists/index.html)**
**[FINAL - LIVE VERSION](https://mdn.github.io/learning-area/css/styling-text/styling-lists/)**

**EXAMPLE (Text styling and spacing)**:

```css
/* General styles */

html {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 10px;
}

h2 {
  font-size: 2rem;
}

ul,ol,dl,p {
  font-size: 1.5rem;
}

li, p {
  line-height: 1.5;
}

/* Description list styles */


dd, dt {
  line-height: 1.5;
}

dt {
  font-weight: bold;
}

dd {
  margin-bottom: 1.5rem;
}
```

## List-specific styles

Three properties can be set on &lt;ul&gt; or &lt;ol&gt; elements

- **list-style-type**: Sets the type of bullets to use for the list
  - Ex. square or circle bullets for an unordered list
  - Ex. numbers, letters or roman numerals for an ordered list.
- **list-style-position**: Sets whether the bullets appear inside the list items, or outside them before the start of each item.
- **list-style-image**: Allows to use a custom image for the bullet

### Bullet styles

**list-style-type** property

```css
ol {
  list-style-type: upper-roman;
}
```

[REFERENCE - MDN: list-style-type](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)

### Bullet position

**list-style-position** property

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

### Using a custom bullet image

**list-style-image** property

**EXAMPLES**:

```css
ul {
  list-style-image: url(star.svg);
}
```

```css
ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url(star.svg);
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

### list-style shorthand

- **list-style** shorthand property = all three properties can be set using

```css
ul {
  list-style-type: square;
  list-style-image: url(example.png);
  list-style-position: inside;
}
```

Could be replaced by:

```css
ul {
  list-style: square url(example.png) inside;
}
```

*NOTE*:

- values can be listed in any order
- can use one, two, or all three
- default values for properties not included (disc, none, outside)
- if both a type and image specified
  - type used as fallback, if image cannot load

## Controlling list counting

### start

**start** attribute = start the list counting from a number other than 1

```html
<ol start="4">
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>Fry the halloumi in a shallow, non-stick pan, until browned on both sides.</li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

### reversed

**reversed** attribute = start list counting down instead of up

```html
<ol start="4" reversed>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>Fry the halloumi in a shallow, non-stick pan, until browned on both sides.</li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

*NOTE*: If there are more list items in a reversed list than the value of the start attribute, the count will continue to zero and then into negative values.

### value

**value** attribute = allows to set list items to specific numberical value

```html
<ol>
  <li value="2">Toast pita, leave to cool, then slice down the edge.</li>
  <li value="4">Fry the halloumi in a shallow, non-stick pan, until browned on both sides.</li>
  <li value="6">Wash and chop the salad.</li>
  <li value="8">Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```